import { MetadataRoute } from 'next'
import { supabase } from './lib/supabase'

interface BlogPost {
  slug: string
  hub_id: string | null
  sub_hub_id: string | null
  published_at: string | null
  updated_at: string
  hub?: { slug: string } | null
  sub_hub?: { slug: string } | null
}

interface BlogHub {
  slug: string
  updated_at: string
}

interface BlogSubHub {
  slug: string
  updated_at: string
  hub?: { slug: string } | null
}

async function getPublishedPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug, hub_id, sub_hub_id, published_at, updated_at, hub:blog_hubs(slug), sub_hub:blog_sub_hubs(slug)')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts for sitemap:', error)
    return []
  }

  // Supabase returns relations as arrays, transform to single objects
  return (data || []).map((post) => ({
    ...post,
    hub: Array.isArray(post.hub) ? post.hub[0] || null : post.hub,
    sub_hub: Array.isArray(post.sub_hub) ? post.sub_hub[0] || null : post.sub_hub,
  }))
}

async function getPublishedHubs(): Promise<BlogHub[]> {
  const { data, error } = await supabase
    .from('blog_hubs')
    .select('slug, updated_at')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching hubs for sitemap:', error)
    return []
  }
  return data || []
}

async function getPublishedSubHubs(): Promise<BlogSubHub[]> {
  const { data, error } = await supabase
    .from('blog_sub_hubs')
    .select('slug, updated_at, hub:blog_hubs(slug)')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching sub-hubs for sitemap:', error)
    return []
  }

  // Supabase returns relations as arrays, transform to single objects
  return (data || []).map((subHub) => ({
    ...subHub,
    hub: Array.isArray(subHub.hub) ? subHub.hub[0] || null : subHub.hub,
  }))
}

function getPostUrl(post: BlogPost, lang: 'ja' | 'en'): string {
  const baseUrl = 'https://queue-tech.jp'
  const langPrefix = lang === 'en' ? '/en' : ''

  // If post has a hub
  if (post.hub?.slug) {
    // If post also has a sub-hub
    if (post.sub_hub?.slug) {
      return `${baseUrl}${langPrefix}/blog/${post.hub.slug}/${post.sub_hub.slug}/${post.slug}`
    }
    // Hub post without sub-hub
    return `${baseUrl}${langPrefix}/blog/${post.hub.slug}/${post.slug}`
  }

  // Standalone post
  return `${baseUrl}${langPrefix}/blog/${post.slug}`
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://queue-tech.jp'
  const currentDate = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    // Japanese pages
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/service`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/company`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/security`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // English pages
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en/service`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/company`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/en/security`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Fetch dynamic content
  const [posts, hubs, subHubs] = await Promise.all([
    getPublishedPosts(),
    getPublishedHubs(),
    getPublishedSubHubs(),
  ])

  // Blog hub pages (Japanese and English)
  const hubPages: MetadataRoute.Sitemap = hubs.flatMap((hub) => [
    {
      url: `${baseUrl}/blog/${hub.slug}`,
      lastModified: new Date(hub.updated_at),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/blog/${hub.slug}`,
      lastModified: new Date(hub.updated_at),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ])

  // Blog sub-hub pages (Japanese and English)
  const subHubPages: MetadataRoute.Sitemap = subHubs.flatMap((subHub) => {
    if (!subHub.hub?.slug) return []
    return [
      {
        url: `${baseUrl}/blog/${subHub.hub.slug}/${subHub.slug}`,
        lastModified: new Date(subHub.updated_at),
        changeFrequency: 'daily' as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/en/blog/${subHub.hub.slug}/${subHub.slug}`,
        lastModified: new Date(subHub.updated_at),
        changeFrequency: 'daily' as const,
        priority: 0.7,
      },
    ]
  })

  // Blog post pages (Japanese and English)
  const postPages: MetadataRoute.Sitemap = posts.flatMap((post) => [
    {
      url: getPostUrl(post, 'ja'),
      lastModified: new Date(post.published_at || post.updated_at),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: getPostUrl(post, 'en'),
      lastModified: new Date(post.published_at || post.updated_at),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ])

  return [...staticPages, ...hubPages, ...subHubPages, ...postPages]
}
