import { NextRequest, NextResponse } from 'next/server';
import { getHubs, createHub } from '@/app/lib/blog-supabase';
import { BlogHubFormData } from '@/app/lib/blog-types';
import { submitToIndexNow, generateHubUrls } from '@/app/lib/indexnow';

export async function GET() {
  try {
    const hubs = await getHubs({ status: 'all' });
    return NextResponse.json({ data: hubs });
  } catch (error) {
    console.error('Error fetching hubs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch hubs' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: BlogHubFormData = await request.json();
    
    if (!body.title || !body.slug) {
      return NextResponse.json(
        { error: 'Title and slug are required' },
        { status: 400 }
      );
    }

    const hub = await createHub(body);

    // Submit to IndexNow if published
    if (body.status === 'published') {
      try {
        const urls = generateHubUrls(hub.slug);
        await submitToIndexNow(urls);
      } catch (indexError) {
        console.error('IndexNow submission failed:', indexError);
        // Don't fail the request if IndexNow fails
      }
    }

    return NextResponse.json({ data: hub }, { status: 201 });
  } catch (error) {
    console.error('Error creating hub:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create hub' },
      { status: 500 }
    );
  }
}
