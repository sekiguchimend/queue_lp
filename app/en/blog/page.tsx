import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts, getHubs, getPickupPosts } from '@/app/lib/blog-supabase';
import { BlogPost, BlogHub } from '@/app/lib/blog-types';
import Header from '@/app/components/Header';

export const metadata: Metadata = {
  title: 'Blog | LLMO & AI SEO Insights | Queue Inc.',
  description: 'Stay updated with the latest insights on LLMO (AI SEO), ChatGPT, Gemini, Perplexity optimization, industry trends, and technical knowledge from Queue Inc.',
  keywords: ['LLMO', 'AI SEO', 'ChatGPT', 'Gemini', 'Perplexity', 'AI search optimization', 'AIO', 'blog'],
  openGraph: {
    title: 'Blog | LLMO & AI SEO Insights | Queue Inc.',
    description: 'Latest insights on LLMO and AI optimization',
    type: 'website',
  },
};

function formatDate(dateString: string | null): string {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getPostUrl(post: BlogPost): string {
  if (post.hub && (post.type === 'hub_post' || post.type === 'sub_hub_post')) {
    return `/en/blog/${post.hub.slug}/${post.slug}`;
  }
  return `/en/blog/${post.slug}`;
}

function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const title = post.title_en || post.title;
  const excerpt = post.excerpt_en || post.excerpt;
  const thumbnailAlt = post.thumbnail_alt_en || post.thumbnail_alt || title;
  const thumbnailUrl = post.thumbnail_url_en || post.thumbnail_url;

  return (
    <Link href={getPostUrl(post)} className="group block h-full">
      <article className={`h-full bg-white rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 ${featured ? 'border-2 border-[#FDCA39]' : ''}`}>
        {thumbnailUrl && (
          <div className="relative h-48 overflow-hidden bg-[#f8f9fc]">
            <Image
              src={thumbnailUrl}
              alt={thumbnailAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {post.is_pickup && (
              <div className="absolute top-3 left-3 px-3 py-1 bg-[#FDCA39] rounded-full text-[11px] font-bold text-[#333333]">
                Featured
              </div>
            )}
          </div>
        )}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            {post.hub && (
              <span 
                className="text-[11px] font-bold px-3 py-1 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, rgba(9, 82, 161, 0.1) 0%, rgba(49, 68, 189, 0.1) 49.52%, rgba(109, 29, 147, 0.1) 100%)',
                  color: '#1f5bb9'
                }}
              >
                {post.hub.title_en || post.hub.title}
              </span>
            )}
          </div>
          <h3 
            className="text-[15px] md:text-[16px] font-bold text-[#333333] mb-3 group-hover:text-[#1f5bb9] transition-colors line-clamp-2"
            style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          >
            {title}
          </h3>
          {excerpt && (
            <p 
              className="text-[13px] text-[#666666] mb-4 line-clamp-2 leading-[180%]"
            >
              {excerpt}
            </p>
          )}
          <time className="text-[12px] text-[#999999]" dateTime={post.published_at || ''}>
            {formatDate(post.published_at)}
          </time>
        </div>
      </article>
    </Link>
  );
}

function HubTag({ hub }: { hub: BlogHub }) {
  const title = hub.title_en || hub.title;

  return (
    <Link 
      href={`/en/blog/${hub.slug}`} 
      className="inline-block px-6 py-3 bg-white border border-[#e5e5e5] rounded-full text-[14px] md:text-[15px] font-medium text-[#333333] hover:border-[#1f5bb9] hover:text-[#1f5bb9] transition-colors"
    >
      {title}
    </Link>
  );
}

export default async function BlogPageEN() {
  const [posts, hubs, pickupPosts] = await Promise.all([
    getPosts({ status: 'published' }),
    getHubs({ status: 'published' }),
    getPickupPosts(3),
  ]);

  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <Header locale="en" />

      {/* Hero Section */}
      <section 
        className="relative pt-[100px] pb-12 md:pt-[120px] md:pb-16"
        style={{ background: 'linear-gradient(180deg, #f8f9fc 0%, #e8edf8 100%)' }}
      >
        <div className="mx-auto max-w-[1000px] px-4 md:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-[12px] md:text-[13px] text-[#666666]" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/en" className="hover:text-[#1f5bb9] transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li aria-current="page" className="text-[#333333]">Blog</li>
            </ol>
          </nav>

          <div className="text-center">
            <h1 
              className="text-[40px] md:text-[64px] font-medium text-[#3b3b3b] leading-[100%] tracking-normal"
              style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            >
              Blog
            </h1>
            <div className="mx-auto mt-2 h-[2px] w-10 bg-[#1f5bb9]" />
            <p className="mt-2 text-[14px] md:text-[16px] font-bold text-[#333333]">Insights & Updates</p>
            <p 
              className="mt-4 text-[14px] md:text-[16px] text-[#666666] leading-[180%]"
            >
              Latest insights on LLMO, AI SEO optimization,<br className="hidden md:block" />
              industry trends, and technical knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {pickupPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-[1100px] px-4 md:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FDCA39]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#333333"/>
                </svg>
              </span>
              <h2 
                className="text-[20px] md:text-[24px] font-bold text-[#333333]"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >
                Featured Articles
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pickupPosts.map((post) => (
                <PostCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      {hubs.length > 0 && (
        <section className="py-8 md:py-10 bg-[#f8f9fc]">
          <div className="mx-auto max-w-[1100px] px-4 md:px-8">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {hubs.map((hub) => (
                <HubTag key={hub.id} hub={hub} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-[1100px] px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 
              className="text-[32px] md:text-[40px] font-medium text-[#3b3b3b] leading-[100%]"
              style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            >
              Latest
            </h2>
            <div className="mx-auto mt-2 h-[2px] w-10 bg-[#1f5bb9]" />
            <p className="mt-2 text-[14px] font-bold text-[#333333]">Recent Articles</p>
          </div>
          
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#f8f9fc] rounded-[12px]">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#e8edf8] flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[#666666] text-[15px]">No articles yet</p>
              <p className="text-[#999999] text-[13px] mt-2">Content coming soon</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-12 md:py-16"
        style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
      >
        <div className="mx-auto max-w-[800px] px-4 md:px-8 text-center">
          <h2 
            className="text-[20px] md:text-[28px] font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          >
            Get Recommended by AI Search
          </h2>
          <p className="text-[14px] text-white/80 mb-6 leading-[180%]">
            Free LLMO (AI SEO) diagnosis available
          </p>
          <a
            href="https://umoren.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[8px] text-[15px] font-bold text-[#1f5bb9] bg-white transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            Get Free Diagnosis
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pb-8 md:pb-12 pt-10 md:pt-16" style={{ background: 'linear-gradient(180deg, #F4F7FB 0%, #E9EEF9 40%, #BEC8E2 100%)' }}>
        <div className="mx-auto w-full max-w-[800px] px-4 md:px-8 text-center">
          <div className="flex justify-center">
            <Link href="/en" aria-label="Go to home">
              <Image
                src="/asset/logo.png"
                alt="QUEUE"
                width={80}
                height={64}
                className="h-auto w-[60px] md:w-[80px]"
              />
            </Link>
          </div>

          <nav className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[12px] md:text-[13px] font-bold text-[#666666]" aria-label="Footer navigation">
            <Link href="/en/service" className="hover:text-[#1f5bb9] transition-colors">Services</Link>
            <Link href="/en/blog" className="hover:text-[#1f5bb9] transition-colors">Blog</Link>
            <Link href="/en/faq" className="hover:text-[#1f5bb9] transition-colors">FAQ</Link>
            <Link href="/en/company" className="hover:text-[#1f5bb9] transition-colors">Company</Link>
            <Link href="/en#contact" className="hover:text-[#1f5bb9] transition-colors">Contact</Link>
            <Link href="/en/privacy" className="hover:text-[#1f5bb9] transition-colors">Privacy Policy</Link>
            <Link href="/en/security" className="hover:text-[#1f5bb9] transition-colors">Security</Link>
          </nav>

          <p className="mt-4 md:mt-6 text-[10px] md:text-[12px] text-[#999999]">© Queue Inc</p>
        </div>
      </footer>
    </div>
  );
}
