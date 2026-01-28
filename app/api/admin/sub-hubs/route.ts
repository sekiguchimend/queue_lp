import { NextRequest, NextResponse } from 'next/server';
import { getSubHubs, createSubHub, getHubById } from '@/app/lib/blog-supabase';
import { BlogSubHubFormData } from '@/app/lib/blog-types';
import { submitToIndexNow, generateSubHubUrls } from '@/app/lib/indexnow';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const hubId = searchParams.get('hubId');
    
    const subHubs = await getSubHubs({ 
      hubId: hubId || undefined, 
      status: 'all' 
    });
    return NextResponse.json({ data: subHubs });
  } catch (error) {
    console.error('Error fetching sub-hubs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch sub-hubs' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: BlogSubHubFormData = await request.json();
    
    if (!body.title || !body.slug || !body.hub_id) {
      return NextResponse.json(
        { error: 'Title, slug, and hub_id are required' },
        { status: 400 }
      );
    }

    const subHub = await createSubHub(body);

    // Submit to IndexNow if published
    if (body.status === 'published') {
      try {
        const hub = await getHubById(body.hub_id);
        if (hub) {
          const urls = generateSubHubUrls(hub.slug, subHub.slug);
          await submitToIndexNow(urls);
        }
      } catch (indexError) {
        console.error('IndexNow submission failed:', indexError);
        // Don't fail the request if IndexNow fails
      }
    }

    return NextResponse.json({ data: subHub }, { status: 201 });
  } catch (error) {
    console.error('Error creating sub-hub:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create sub-hub' },
      { status: 500 }
    );
  }
}
