import { NextRequest, NextResponse } from 'next/server';
import { getSubHubById, updateSubHub, deleteSubHub } from '@/app/lib/blog-supabase';
import { BlogSubHubFormData } from '@/app/lib/blog-types';

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
    
    const subHub = await updateSubHub(id, body);
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
