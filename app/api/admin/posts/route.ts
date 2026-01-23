import { NextRequest, NextResponse } from 'next/server';
import { getPosts, createPost, updatePost } from '@/app/lib/blog-supabase';
import { BlogPostFormData } from '@/app/lib/blog-types';
import OpenAI from 'openai';

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
        content: 'You are a professional Japanese to English translator. Always respond with valid JSON only.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.3,
    max_tokens: 8000,
  });

  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error('No response from OpenAI');
  }

  // Parse the JSON response, handling potential markdown code blocks
  let jsonStr = content.trim();
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

  const result = JSON.parse(jsonStr) as TranslationResult;
  return result;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const hubId = searchParams.get('hubId');
    const subHubId = searchParams.get('subHubId');
    const type = searchParams.get('type');
    
    const posts = await getPosts({ 
      hubId: hubId || undefined,
      subHubId: subHubId || undefined,
      type: type as any || 'all',
      status: 'all' 
    });
    return NextResponse.json({ data: posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: BlogPostFormData = await request.json();
    
    if (!body.title || !body.slug) {
      return NextResponse.json(
        { error: 'Title and slug are required' },
        { status: 400 }
      );
    }

    // Validate post type constraints
    if (body.type === 'standalone' && (body.hub_id || body.sub_hub_id)) {
      return NextResponse.json(
        { error: 'Standalone posts cannot have hub or sub-hub' },
        { status: 400 }
      );
    }

    if (body.type === 'hub_post' && !body.hub_id) {
      return NextResponse.json(
        { error: 'Hub post requires hub_id' },
        { status: 400 }
      );
    }

    if (body.type === 'sub_hub_post' && (!body.hub_id || !body.sub_hub_id)) {
      return NextResponse.json(
        { error: 'Sub-hub post requires both hub_id and sub_hub_id' },
        { status: 400 }
      );
    }

    const post = await createPost(body);

    // Auto-translate to English if publishing and OpenAI API key is configured
    if (body.status === 'published' && process.env.OPENAI_API_KEY) {
      try {
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
        const translatedPost = await updatePost(post.id, {
          title_en: translations.title_en,
          excerpt_en: translations.excerpt_en,
          content_en: translations.content_en,
          meta_title_en: translations.meta_title_en,
          meta_description_en: translations.meta_description_en,
          thumbnail_alt_en: translations.thumbnail_alt_en,
          thumbnail_description_en: translations.thumbnail_description_en,
        });

        return NextResponse.json({ data: translatedPost, translated: true }, { status: 201 });
      } catch (translationError) {
        console.error('Translation failed, but post was created:', translationError);
        // Return the post without translation if translation fails
        return NextResponse.json({ data: post, translated: false, translationError: 'Translation failed' }, { status: 201 });
      }
    }

    return NextResponse.json({ data: post, translated: false }, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create post' },
      { status: 500 }
    );
  }
}
