import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { getPostById, updatePost } from '@/app/lib/blog-supabase';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface TranslationFields {
  title: string;
  excerpt: string | null;
  content: string | null;
  meta_title: string | null;
  meta_description: string | null;
  thumbnail_alt: string | null;
  thumbnail_description: string | null;
}

interface TranslationResult {
  title_en: string;
  excerpt_en: string;
  content_en: string;
  meta_title_en: string;
  meta_description_en: string;
  thumbnail_alt_en: string;
  thumbnail_description_en: string;
}

async function translateToEnglish(fields: TranslationFields): Promise<TranslationResult> {
  // Calculate approximate content length to determine max_tokens
  const contentLength = JSON.stringify(fields).length;
  // Estimate tokens (roughly 4 characters per token), add buffer for response
  // Use at least 16000 tokens, or more if content is large
  const estimatedInputTokens = Math.ceil(contentLength / 4);
  const maxTokens = Math.max(16000, estimatedInputTokens * 2);

  const prompt = `You are a professional Japanese to English translator. Translate the following blog post content from Japanese to natural, fluent English. Maintain the same tone, style, and formatting (including HTML tags if present).

Translate each field below:

Title: ${fields.title}

Excerpt: ${fields.excerpt || '(empty)'}

Content (may contain HTML): ${fields.content || '(empty)'}

Meta Title (for SEO, keep under 60 characters): ${fields.meta_title || '(empty)'}

Meta Description (for SEO, keep under 160 characters): ${fields.meta_description || '(empty)'}

Thumbnail Alt Text: ${fields.thumbnail_alt || '(empty)'}

Thumbnail Description: ${fields.thumbnail_description || '(empty)'}

Return your response as a valid JSON object with these exact keys:
{
  "title_en": "translated title",
  "excerpt_en": "translated excerpt",
  "content_en": "translated content with HTML preserved",
  "meta_title_en": "translated meta title",
  "meta_description_en": "translated meta description",
  "thumbnail_alt_en": "translated thumbnail alt",
  "thumbnail_description_en": "translated thumbnail description"
}

For any empty fields, return an empty string. Do not include any explanation or markdown formatting, just the raw JSON object.`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You are a professional Japanese to English translator. Always respond with valid JSON only. Ensure all strings are properly escaped.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.3,
    max_tokens: maxTokens,
    response_format: { type: 'json_object' },
  });

  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error('No response from OpenAI');
  }

  // Parse the JSON response, handling potential markdown code blocks
  let jsonStr = content.trim();
  
  // Remove markdown code blocks if present
  if (jsonStr.startsWith('```json')) {
    jsonStr = jsonStr.slice(7);
  }
  if (jsonStr.startsWith('```')) {
    jsonStr = jsonStr.slice(3);
  }
  if (jsonStr.endsWith('```')) {
    jsonStr = jsonStr.slice(0, -3);
  }
  jsonStr = jsonStr.trim();

  // Try to extract JSON object using regex if direct parsing fails
  let result: TranslationResult;
  try {
    result = JSON.parse(jsonStr) as TranslationResult;
  } catch (parseError) {
    // If parsing fails, try to extract JSON object from the response
    const jsonMatch = jsonStr.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        result = JSON.parse(jsonMatch[0]) as TranslationResult;
      } catch (secondParseError) {
        console.error('Failed to parse JSON response:', jsonStr.substring(0, 500));
        console.error('Parse error:', parseError);
        throw new Error(`Failed to parse JSON response: ${parseError instanceof Error ? parseError.message : 'Unknown error'}`);
      }
    } else {
      console.error('No JSON object found in response:', jsonStr.substring(0, 500));
      throw new Error(`No valid JSON found in response: ${parseError instanceof Error ? parseError.message : 'Unknown error'}`);
    }
  }

  // Validate that all required fields are present
  const requiredFields = ['title_en', 'excerpt_en', 'content_en', 'meta_title_en', 'meta_description_en', 'thumbnail_alt_en', 'thumbnail_description_en'];
  for (const field of requiredFields) {
    if (!(field in result)) {
      throw new Error(`Missing required field in translation result: ${field}`);
    }
  }

  return result;
}

// POST - Translate a specific post
export async function POST(request: NextRequest) {
  try {
    const { postId } = await request.json();

    if (!postId) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    // Get the post
    const post = await getPostById(postId);
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // Translate the Japanese content to English
    const translations = await translateToEnglish({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      meta_title: post.meta_title,
      meta_description: post.meta_description,
      thumbnail_alt: post.thumbnail_alt,
      thumbnail_description: post.thumbnail_description,
    });

    // Update the post with translations
    const updatedPost = await updatePost(postId, {
      title_en: translations.title_en,
      excerpt_en: translations.excerpt_en,
      content_en: translations.content_en,
      meta_title_en: translations.meta_title_en,
      meta_description_en: translations.meta_description_en,
      thumbnail_alt_en: translations.thumbnail_alt_en,
      thumbnail_description_en: translations.thumbnail_description_en,
    });

    return NextResponse.json({ 
      data: updatedPost,
      translations,
      message: 'Translation completed successfully' 
    });
  } catch (error) {
    console.error('Error translating post:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to translate post' },
      { status: 500 }
    );
  }
}
