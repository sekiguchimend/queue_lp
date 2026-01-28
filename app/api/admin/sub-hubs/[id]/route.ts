import { NextRequest, NextResponse } from 'next/server';
import { getSubHubById, updateSubHub, deleteSubHub, getHubById } from '@/app/lib/blog-supabase';
import { BlogSubHubFormData } from '@/app/lib/blog-types';
import { submitToIndexNow, generateSubHubUrls } from '@/app/lib/indexnow';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const subHub = await getSubHubById(id);
    
    if (!subHub) {
      return NextResponse.json(
        { error: 'Sub-hub not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: subHub });
  } catch (error) {
    console.error('Error fetching sub-hub:', error);
    return NextResponse.json(
      { error: 'Failed to fetch sub-hub' },
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
    const body: Partial<BlogSubHubFormData> = await request.json();
    
    // Get the current sub-hub to check if status is changing to published
    const currentSubHub = await getSubHubById(id);
    const isBeingPublished = body.status === 'published' && currentSubHub?.status !== 'published';
    const isAlreadyPublished = currentSubHub?.status === 'published';

    const subHub = await updateSubHub(id, body);

    // Submit to IndexNow if sub-hub is being published or was already published (update)
    if (isBeingPublished || (isAlreadyPublished && body.status !== 'draft')) {
      try {
        // Get hub slug from the sub-hub's hub relation or fetch it
        const hubSlug = subHub.hub?.slug;
        if (hubSlug) {
          const urls = generateSubHubUrls(hubSlug, subHub.slug);
          await submitToIndexNow(urls);
        } else if (currentSubHub?.hub_id) {
          const hub = await getHubById(currentSubHub.hub_id);
          if (hub) {
            const urls = generateSubHubUrls(hub.slug, subHub.slug);
            await submitToIndexNow(urls);
          }
        }
      } catch (indexError) {
        console.error('IndexNow submission failed:', indexError);
        // Don't fail the request if IndexNow fails
      }
    }

    return NextResponse.json({ data: subHub });
  } catch (error) {
    console.error('Error updating sub-hub:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to update sub-hub' },
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
    await deleteSubHub(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting sub-hub:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to delete sub-hub' },
      { status: 500 }
    );
  }
}
