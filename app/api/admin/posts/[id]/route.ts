import { NextRequest, NextResponse } from 'next/server';
import { getPostById, updatePost, deletePost } from '@/app/lib/blog-supabase';
import { BlogPostFormData } from '@/app/lib/blog-types';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const post = await getPostById(id);
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: post });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch post' },
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
    const body: Partial<BlogPostFormData> = await request.json();
    
    // Validate post type constraints if type is being changed
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

    const post = await updatePost(id, body);
    return NextResponse.json({ data: post });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to update post' },
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
    await deletePost(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to delete post' },
      { status: 500 }
    );
  }
}
