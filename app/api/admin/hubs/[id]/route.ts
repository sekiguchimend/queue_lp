import { NextRequest, NextResponse } from 'next/server';
import { getHubById, updateHub, deleteHub } from '@/app/lib/blog-supabase';
import { BlogHubFormData } from '@/app/lib/blog-types';
import { submitToIndexNow, generateHubUrls } from '@/app/lib/indexnow';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const hub = await getHubById(id);
    
    if (!hub) {
      return NextResponse.json(
        { error: 'Hub not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: hub });
  } catch (error) {
    console.error('Error fetching hub:', error);
    return NextResponse.json(
      { error: 'Failed to fetch hub' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body: Partial<BlogHubFormData> = await request.json();
    
    // Get the current hub to check if status is changing to published
    const currentHub = await getHubById(id);
    const isBeingPublished = body.status === 'published' && currentHub?.status !== 'published';
    const isAlreadyPublished = currentHub?.status === 'published';

    const hub = await updateHub(id, body);

    // Submit to IndexNow if hub is being published or was already published (update)
    if (isBeingPublished || (isAlreadyPublished && body.status !== 'draft')) {
      try {
        const urls = generateHubUrls(hub.slug);
        await submitToIndexNow(urls);
      } catch (indexError) {
        console.error('IndexNow submission failed:', indexError);
        // Don't fail the request if IndexNow fails
      }
    }

    return NextResponse.json({ data: hub });
  } catch (error) {
    console.error('Error updating hub:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to update hub' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await deleteHub(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting hub:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to delete hub' },
      { status: 500 }
    );
  }
}
