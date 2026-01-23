export type BlogStatus = 'draft' | 'published';
export type PostType = 'standalone' | 'hub_post' | 'sub_hub_post';

export interface BlogHub {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  title_en: string | null;
  description_en: string | null;
  status: BlogStatus;
  created_at: string;
  updated_at: string;
}

export interface BlogSubHub {
  id: string;
  hub_id: string;
  slug: string;
  title: string;
  description: string | null;
  title_en: string | null;
  description_en: string | null;
  status: BlogStatus;
  created_at: string;
  updated_at: string;
  hub?: BlogHub;
}

export interface BlogPost {
  id: string;
  hub_id: string | null;
  sub_hub_id: string | null;
  type: PostType;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  title_en: string | null;
  excerpt_en: string | null;
  content_en: string | null;
  status: BlogStatus;
  published_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_title_en: string | null;
  meta_description_en: string | null;
  og_image_url: string | null;
  canonical_url: string | null;
  thumbnail_url: string | null;
  thumbnail_alt: string | null;
  thumbnail_description: string | null;
  thumbnail_url_en: string | null;
  thumbnail_alt_en: string | null;
  thumbnail_description_en: string | null;
  is_pickup: boolean;
  created_at: string;
  updated_at: string;
  hub?: BlogHub;
  sub_hub?: BlogSubHub;
}

export interface BlogHubFormData {
  slug: string;
  title: string;
  description: string;
  title_en?: string | null;
  description_en?: string | null;
  status: BlogStatus;
}

export interface BlogSubHubFormData {
  hub_id: string;
  slug: string;
  title: string;
  description: string;
  title_en?: string | null;
  description_en?: string | null;
  status: BlogStatus;
}

export interface BlogPostFormData {
  type: PostType;
  hub_id: string | null;
  sub_hub_id: string | null;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  status: BlogStatus;
  published_at: string | null;
  meta_title: string;
  meta_description: string;
  og_image_url: string;
  canonical_url: string;
  thumbnail_url: string;
  thumbnail_alt: string;
  thumbnail_description: string;
  is_pickup: boolean;
  title_en?: string | null;
  excerpt_en?: string | null;
  content_en?: string | null;
  meta_title_en?: string | null;
  meta_description_en?: string | null;
  thumbnail_url_en?: string | null;
  thumbnail_alt_en?: string | null;
  thumbnail_description_en?: string | null;
}

// Utility function for slugification
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
