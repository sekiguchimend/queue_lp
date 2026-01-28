import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getHubBySlug, getPostsForHub, getSubHubs } from '@/app/lib/blog-supabase';
import { BlogPost, BlogHub, BlogSubHub } from '@/app/lib/blog-types';
import Header from '@/app/components/Header';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  const post = await getPostBySlug(slug);
  if (post) {
    const title = post.title_en || post.title;
    const description = post.meta_description_en || post.meta_description || post.excerpt_en || post.excerpt || '';
    const metaTitle = post.meta_title_en || post.meta_title || title;
    
    return {
      title: `${metaTitle} | Queue Inc.`,
      description: description,
      openGraph: {
        title: metaTitle,
        description: description,
        type: 'article',
        images: post.og_image_url || post.thumbnail_url ? [{ url: post.og_image_url || post.thumbnail_url || '' }] : [],
        publishedTime: post.published_at || undefined,
      },
    };
  }

  const hub = await getHubBySlug(slug);
  if (hub) {
    const title = hub.title_en || hub.title;
    const description = hub.description_en || hub.description || `Articles about ${title}`;
    return {
      title: `${title} | Queue Inc.`,
      description: description,
    };
  }

  return {
    title: 'Not Found | Queue Inc.',
  };
}

function formatDate(dateString: string | null): string {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogSlugPageEN({ params }: PageProps) {
  const { slug } = await params;

  // First check if it's a hub page
  const hub = await getHubBySlug(slug);
  if (hub && hub.status === 'published') {
    const [hubPosts, subHubs] = await Promise.all([
      getPostsForHub(hub.id),
      getSubHubs({ hubId: hub.id, status: 'published' }),
    ]);
    return <HubPage hub={hub} posts={hubPosts} subHubs={subHubs} />;
  }

  // Then check for standalone post (posts without a hub)
  const post = await getPostBySlug(slug);
  if (post && post.status === 'published' && post.type === 'standalone') {
    return <PostPage post={post} />;
  }

  notFound();
}

function PostPage({ post }: { post: BlogPost }) {
  const title = post.title_en || post.title;
  const excerpt = post.excerpt_en || post.excerpt;
  const content = post.content_en || post.content;
  const thumbnailUrl = post.thumbnail_url_en || post.thumbnail_url;
  const thumbnailAlt = post.thumbnail_alt_en || post.thumbnail_alt || title;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: excerpt,
    image: thumbnailUrl,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: {
      '@type': 'Organization',
      name: 'Queue Inc.',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Queue Inc.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://queue-tech.jp/asset/logo.png',
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header locale="en" />

      {/* Breadcrumb */}
      <div className="pt-[80px] md:pt-[90px] bg-white border-b border-[#e5e5e5]">
        <div className="mx-auto max-w-[900px] px-4 md:px-8 py-4">
          <nav className="text-[12px] md:text-[13px] text-[#666666]">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/en" className="hover:text-[#1f5bb9]">Home</Link></li>
              <li>&gt;</li>
              <li><Link href="/en/blog" className="hover:text-[#1f5bb9]">Blog</Link></li>
              {post.hub && (
                <>
                  <li>&gt;</li>
                  <li><Link href={`/en/blog/${post.hub.slug}`} className="hover:text-[#1f5bb9]">{post.hub.title_en || post.hub.title}</Link></li>
                </>
              )}
              <li>&gt;</li>
              <li className="text-[#333333] truncate max-w-[200px]">{title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-8 md:py-12">
        <div className="mx-auto max-w-[900px] px-4 md:px-8">
          {/* Hero Image */}
          {thumbnailUrl && (
            <div className="relative h-[200px] md:h-[400px] rounded-[12px] overflow-hidden mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
              <Image
                src={thumbnailUrl}
                alt={thumbnailAlt}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            {post.hub && (
              <Link
                href={`/en/blog/${post.hub.slug}`}
                className="text-[12px] font-bold px-4 py-1.5 rounded-full transition-colors hover:opacity-80"
                style={{
                  background: 'linear-gradient(90deg, rgba(9, 82, 161, 0.1) 0%, rgba(49, 68, 189, 0.1) 49.52%, rgba(109, 29, 147, 0.1) 100%)',
                  color: '#1f5bb9'
                }}
              >
                {post.hub.title_en || post.hub.title}
              </Link>
            )}
            <time className="text-[13px] text-[#999999]" dateTime={post.published_at || ''}>
              {formatDate(post.published_at)}
            </time>
          </div>

          {/* Title */}
          <h1 
            className="text-[24px] md:text-[36px] font-bold text-[#333333] mb-6 leading-[140%]"
            style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          >
            {title}
          </h1>

          {/* Excerpt */}
          {excerpt && (
            <p 
              className="text-[16px] md:text-[18px] text-[#666666] mb-8 leading-[180%] p-6 bg-[#f8f9fc] rounded-[12px] border-l-4 border-[#1f5bb9]"
            >
              {excerpt}
            </p>
          )}

          {/* Content */}
          {content && (
            <div
              className="prose prose-lg max-w-none 
                prose-headings:text-[#333333] prose-headings:font-bold
                prose-h2:text-[22px] prose-h2:md:text-[26px] prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-[#1f5bb9]
                prose-h3:text-[18px] prose-h3:md:text-[20px] prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-[15px] prose-p:md:text-[16px] prose-p:text-[#333333] prose-p:leading-[180%]
                prose-a:text-[#1f5bb9] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#333333]
                prose-img:rounded-[12px] prose-img:shadow-lg
                prose-ul:my-6 prose-li:text-[15px] prose-li:text-[#333333]
                prose-blockquote:border-l-4 prose-blockquote:border-[#8120AF] prose-blockquote:bg-[#f8f9fc] prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
              "
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-[#e5e5e5]">
            <Link 
              href="/en/blog"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#1f5bb9] hover:opacity-70 transition-opacity"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section 
        className="py-12 md:py-16"
        style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
      >
        <div className="mx-auto max-w-[800px] px-4 md:px-8 text-center">
          <h2 className="text-[20px] md:text-[28px] font-bold text-white mb-4">
            Get Recommended by AI Search
          </h2>
          <p className="text-[14px] text-white/80 mb-6">
            Free LLMO (AI SEO) diagnosis available
          </p>
          <a
            href="https://umoren.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[8px] text-[15px] font-bold text-[#1f5bb9] bg-white hover:scale-[1.02] hover:shadow-xl transition-all"
          >
            Get Free Diagnosis
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pb-8 md:pb-12 pt-10 md:pt-16" style={{ background: 'linear-gradient(180deg, #F4F7FB 0%, #E9EEF9 40%, #BEC8E2 100%)' }}>
        <div className="mx-auto w-full max-w-[800px] px-4 md:px-8 text-center">
          <Link href="/en" className="inline-block">
            <Image src="/asset/logo.png" alt="QUEUE" width={80} height={64} className="h-auto w-[60px] md:w-[80px]" />
          </Link>
          <nav className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[12px] md:text-[13px] font-bold text-[#666666]">
            <Link href="/en/service" className="hover:text-[#1f5bb9]">Services</Link>
            <Link href="/en/blog" className="hover:text-[#1f5bb9]">Blog</Link>
            <Link href="/en/faq" className="hover:text-[#1f5bb9]">FAQ</Link>
            <Link href="/en/company" className="hover:text-[#1f5bb9]">Company</Link>
            <Link href="/en#contact" className="hover:text-[#1f5bb9]">Contact</Link>
            <Link href="/en/privacy" className="hover:text-[#1f5bb9]">Privacy Policy</Link>
          </nav>
          <p className="mt-4 md:mt-6 text-[10px] md:text-[12px] text-[#999999]">© Queue Inc</p>
        </div>
      </footer>
    </div>
  );
}

function HubPage({
  hub,
  posts,
  subHubs,
}: {
  hub: BlogHub;
  posts: BlogPost[];
  subHubs: BlogSubHub[];
}) {
  const title = hub.title_en || hub.title;
  const description = hub.description_en || hub.description;

  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <Header locale="en" />

      {/* Hero */}
      <section 
        className="relative pt-[100px] pb-12 md:pt-[120px] md:pb-16"
        style={{ background: 'linear-gradient(180deg, #f8f9fc 0%, #e8edf8 100%)' }}
      >
        <div className="mx-auto max-w-[1000px] px-4 md:px-8">
          <nav className="mb-6 text-[12px] md:text-[13px] text-[#666666]">
            <ol className="flex items-center gap-2">
              <li><Link href="/en" className="hover:text-[#1f5bb9]">Home</Link></li>
              <li>&gt;</li>
              <li><Link href="/en/blog" className="hover:text-[#1f5bb9]">Blog</Link></li>
              <li>&gt;</li>
              <li className="text-[#333333]">{title}</li>
            </ol>
          </nav>

          <div className="text-center">
            <h1 
              className="text-[32px] md:text-[48px] font-bold leading-[130%] mb-4"
              style={{
                fontFamily: 'var(--font-lexend), sans-serif',
                background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                wordBreak: 'keep-all',
                overflowWrap: 'break-word',
                hyphens: 'auto',
              }}
            >
              {title}
            </h1>
            {description && (
              <p className="text-[15px] md:text-[17px] text-[#666666] leading-[180%] max-w-[600px] mx-auto">
                {description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Sub Hubs */}
      {subHubs.length > 0 && (
        <section className="py-10 md:py-12">
          <div className="mx-auto max-w-[1100px] px-4 md:px-8">
            <h2 className="text-[18px] md:text-[20px] font-bold text-[#333333] mb-6">Subcategories</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {subHubs.map((subHub) => (
                <Link
                  key={subHub.id}
                  href={`/en/blog/${hub.slug}/${subHub.slug}`}
                  className="bg-white rounded-[12px] p-5 shadow-sm hover:shadow-md transition-shadow border border-[#e5e5e5]"
                >
                  <h3 className="font-bold text-[#333333] hover:text-[#1f5bb9] transition-colors">
                    {subHub.title_en || subHub.title}
                  </h3>
                  {(subHub.description_en || subHub.description) && (
                    <p className="text-[13px] text-[#666666] mt-2 line-clamp-2">{subHub.description_en || subHub.description}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Posts */}
      <section className="py-10 md:py-12 bg-white">
        <div className="mx-auto max-w-[1100px] px-4 md:px-8">
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#333333] mb-8">Articles</h2>
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => {
                const postTitle = post.title_en || post.title;
                const postExcerpt = post.excerpt_en || post.excerpt;
                const postThumbnail = post.thumbnail_url_en || post.thumbnail_url;
                const postThumbnailAlt = post.thumbnail_alt_en || post.thumbnail_alt || postTitle;

                return (
                  <Link key={post.id} href={`/en/blog/${hub.slug}/${post.slug}`} className="group block">
                    <article className="bg-[#f8f9fc] rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      {postThumbnail && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={postThumbnail}
                            alt={postThumbnailAlt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="text-[15px] font-bold text-[#333333] mb-2 group-hover:text-[#1f5bb9] transition-colors line-clamp-2">
                          {postTitle}
                        </h3>
                        {postExcerpt && (
                          <p className="text-[13px] text-[#666666] mb-3 line-clamp-2">{postExcerpt}</p>
                        )}
                        <time className="text-[12px] text-[#999999]">{formatDate(post.published_at)}</time>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-[#f8f9fc] rounded-[12px]">
              <p className="text-[#666666]">No articles yet</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pb-8 md:pb-12 pt-10 md:pt-16" style={{ background: 'linear-gradient(180deg, #F4F7FB 0%, #E9EEF9 40%, #BEC8E2 100%)' }}>
        <div className="mx-auto w-full max-w-[800px] px-4 md:px-8 text-center">
          <Link href="/en" className="inline-block">
            <Image src="/asset/logo.png" alt="QUEUE" width={80} height={64} className="h-auto w-[60px] md:w-[80px]" />
          </Link>
          <nav className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[12px] md:text-[13px] font-bold text-[#666666]">
            <Link href="/en/service" className="hover:text-[#1f5bb9]">Services</Link>
            <Link href="/en/blog" className="hover:text-[#1f5bb9]">Blog</Link>
            <Link href="/en/faq" className="hover:text-[#1f5bb9]">FAQ</Link>
            <Link href="/en/company" className="hover:text-[#1f5bb9]">Company</Link>
            <Link href="/en#contact" className="hover:text-[#1f5bb9]">Contact</Link>
            <Link href="/en/privacy" className="hover:text-[#1f5bb9]">Privacy Policy</Link>
          </nav>
          <p className="mt-4 md:mt-6 text-[10px] md:text-[12px] text-[#999999]">© Queue Inc</p>
        </div>
      </footer>
    </div>
  );
}
