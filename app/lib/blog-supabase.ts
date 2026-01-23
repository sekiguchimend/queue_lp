import { supabase } from './supabase';
import {
  BlogHub,
  BlogSubHub,
  BlogPost,
  BlogHubFormData,
  BlogSubHubFormData,
  BlogPostFormData,
  BlogStatus,
  PostType,
} from './blog-types';

// ============================================
// HUBS
// ============================================

export async function getHubs(options?: {
  status?: BlogStatus | 'all';
}): Promise<BlogHub[]> {
  let query = supabase.from('blog_hubs').select('*').order('created_at', { ascending: false });

  if (options?.status && options.status !== 'all') {
    query = query.eq('status', options.status);
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data || [];
}

export async function getHubBySlug(slug: string): Promise<BlogHub | null> {
  const { data, error } = await supabase
    .from('blog_hubs')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw new Error(error.message);
  }
  return data;
}

export async function getHubById(id: string): Promise<BlogHub | null> {
  const { data, error } = await supabase
    .from('blog_hubs')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw new Error(error.message);
  }
  return data;
}

export async function createHub(data: BlogHubFormData): Promise<BlogHub> {
  const { data: hub, error } = await supabase
    .from('blog_hubs')
    .insert([data])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return hub;
}

export async function updateHub(
  id: string,
  data: Partial<BlogHubFormData>
): Promise<BlogHub> {
  const { data: hub, error } = await supabase
    .from('blog_hubs')
    .update(data)
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return hub;
}

export async function deleteHub(id: string): Promise<void> {
  const { error } = await supabase.from('blog_hubs').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

// ============================================
// SUB-HUBS
// ============================================

export async function getSubHubs(options?: {
  hubId?: string;
  status?: BlogStatus | 'all';
}): Promise<BlogSubHub[]> {
  let query = supabase
    .from('blog_sub_hubs')
    .select('*, hub:blog_hubs(*)')
    .order('created_at', { ascending: false });

  if (options?.hubId) {
    query = query.eq('hub_id', options.hubId);
  }

  if (options?.status && options.status !== 'all') {
    query = query.eq('status', options.status);
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data || [];
}

export async function getSubHubBySlug(
  hubSlug: string,
  subHubSlug: string
): Promise<BlogSubHub | null> {
  // First get the hub
  const hub = await getHubBySlug(hubSlug);
  if (!hub) return null;

  const { data, error } = await supabase
    .from('blog_sub_hubs')
    .select('*, hub:blog_hubs(*)')
    .eq('hub_id', hub.id)
    .eq('slug', subHubSlug)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw new Error(error.message);
  }
  return data;
}

export async function getSubHubById(id: string): Promise<BlogSubHub | null> {
  const { data, error } = await supabase
    .from('blog_sub_hubs')
    .select('*, hub:blog_hubs(*)')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw new Error(error.message);
  }
  return data;
}

export async function createSubHub(data: BlogSubHubFormData): Promise<BlogSubHub> {
  const { data: subHub, error } = await supabase
    .from('blog_sub_hubs')
    .insert([data])
    .select('*, hub:blog_hubs(*)')
    .single();

  if (error) throw new Error(error.message);
  return subHub;
}

export async function updateSubHub(
  id: string,
  data: Partial<BlogSubHubFormData>
): Promise<BlogSubHub> {
  const { data: subHub, error } = await supabase
    .from('blog_sub_hubs')
    .update(data)
    .eq('id', id)
    .select('*, hub:blog_hubs(*)')
    .single();

  if (error) throw new Error(error.message);
  return subHub;
}

export async function deleteSubHub(id: string): Promise<void> {
  const { error } = await supabase.from('blog_sub_hubs').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

// ============================================
// POSTS
// ============================================

export async function getPosts(options?: {
  type?: PostType | 'all';
  hubId?: string;
  subHubId?: string;
  status?: BlogStatus | 'all';
  isPickup?: boolean;
  limit?: number;
}): Promise<BlogPost[]> {
  let query = supabase
    .from('blog_posts')
    .select('*, hub:blog_hubs(*), sub_hub:blog_sub_hubs(*)')
    .order('published_at', { ascending: false, nullsFirst: false });

  if (options?.type && options.type !== 'all') {
    query = query.eq('type', options.type);
  }

  if (options?.hubId) {
    query = query.eq('hub_id', options.hubId);
  }

  if (options?.subHubId) {
    query = query.eq('sub_hub_id', options.subHubId);
  }

  if (options?.status && options.status !== 'all') {
    query = query.eq('status', options.status);
  }

  if (options?.isPickup !== undefined) {
    query = query.eq('is_pickup', options.isPickup);
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data || [];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*, hub:blog_hubs(*), sub_hub:blog_sub_hubs(*)')
    .eq('slug', slug)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw new Error(error.message);
  }
  return data;
}

export async function getPostByHubAndSlug(hubSlug: string, postSlug: string): Promise<BlogPost | null> {
  // First get the hub
  const hub = await getHubBySlug(hubSlug);
  if (!hub) return null;

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*, hub:blog_hubs(*), sub_hub:blog_sub_hubs(*)')
    .eq('hub_id', hub.id)
    .eq('slug', postSlug)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw new Error(error.message);
  }
  return data;
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*, hub:blog_hubs(*), sub_hub:blog_sub_hubs(*)')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw new Error(error.message);
  }
  return data;
}

export async function createPost(data: BlogPostFormData): Promise<BlogPost> {
  // Auto-set published_at if status is 'published' and no published_at is set
  const insertData = {
    ...data,
    published_at: data.status === 'published' && !data.published_at 
      ? new Date().toISOString() 
      : data.published_at,
  };

  const { data: post, error } = await supabase
    .from('blog_posts')
    .insert([insertData])
    .select('*, hub:blog_hubs(*), sub_hub:blog_sub_hubs(*)')
    .single();

  if (error) throw new Error(error.message);
  return post;
}

export async function updatePost(
  id: string,
  data: Partial<BlogPostFormData>
): Promise<BlogPost> {
  // Get current post to check if status is changing
  const currentPost = await getPostById(id);
  
  const updateData: Partial<BlogPostFormData> = { ...data };
  
  // Auto-set published_at if transitioning from draft to published
  if (
    data.status === 'published' &&
    currentPost?.status === 'draft' &&
    !data.published_at &&
    !currentPost.published_at
  ) {
    updateData.published_at = new Date().toISOString();
  }

  const { data: post, error } = await supabase
    .from('blog_posts')
    .update(updateData)
    .eq('id', id)
    .select('*, hub:blog_hubs(*), sub_hub:blog_sub_hubs(*)')
    .single();

  if (error) throw new Error(error.message);
  return post;
}

export async function deletePost(id: string): Promise<void> {
  const { error } = await supabase.from('blog_posts').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

export async function getPostsForHub(hubId: string): Promise<BlogPost[]> {
  return getPosts({ hubId, status: 'published' });
}

export async function getPostsForSubHub(subHubId: string): Promise<BlogPost[]> {
  return getPosts({ subHubId, status: 'published' });
}

export async function getPickupPosts(limit: number = 5): Promise<BlogPost[]> {
  return getPosts({ isPickup: true, status: 'published', limit });
}

export async function getRecentPosts(limit: number = 10): Promise<BlogPost[]> {
  return getPosts({ status: 'published', limit });
}
