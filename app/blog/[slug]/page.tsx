import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { getPostBySlug, getHubBySlug, getPostsForHub, getSubHubs } from '@/app/lib/blog-supabase';
import { BlogPost, BlogHub, BlogSubHub } from '@/app/lib/blog-types';
import Header from '@/app/components/Header';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = 'https://queue-tech.jp';
  
  const post = await getPostBySlug(slug);
  if (post) {
    const ogImage = (post.og_image_url && post.og_image_url.length > 0) ? post.og_image_url : post.thumbnail_url;
    const canonicalUrl = (post.canonical_url && post.canonical_url.length > 0) ? post.canonical_url : `${baseUrl}/blog/${post.slug}`;
    return {
      title: post.meta_title || `${post.title} | Queue株式会社`,
      description: post.meta_description || post.excerpt || '',
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: post.meta_title || post.title,
        description: post.meta_description || post.excerpt || '',
        type: 'article',
        url: `${baseUrl}/blog/${post.slug}`,
        siteName: 'Queue株式会社',
        locale: 'ja_JP',
        images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: post.thumbnail_alt || post.title }] : [],
        publishedTime: post.published_at || undefined,
        modifiedTime: post.updated_at || undefined,
        authors: ['Queue株式会社'],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.meta_title || post.title,
        description: post.meta_description || post.excerpt || '',
        images: ogImage ? [ogImage] : [],
      },
    };
  }

  const hub = await getHubBySlug(slug);
  if (hub) {
    return {
      title: `${hub.title} | ブログ | Queue株式会社`,
      description: hub.description || `${hub.title}に関する記事一覧`,
      alternates: {
        canonical: `${baseUrl}/blog/${hub.slug}`,
      },
      openGraph: {
        title: `${hub.title} | Queue株式会社`,
        description: hub.description || `${hub.title}に関する記事一覧`,
        type: 'website',
        url: `${baseUrl}/blog/${hub.slug}`,
        siteName: 'Queue株式会社',
        locale: 'ja_JP',
      },
      twitter: {
        card: 'summary',
        title: `${hub.title} | Queue株式会社`,
        description: hub.description || `${hub.title}に関する記事一覧`,
      },
    };
  }

  return {
    title: 'Not Found | Queue株式会社',
  };
}

function formatDate(dateString: string | null): string {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function cleanContent(html: string): string {
  // Remove ChatGPT/external wrapper divs that prevent proper styling
  // Look for patterns like <div class="flex..."><article...>actual content</article></div>
  
  // Try to extract content from within wrapper divs
  const articleMatch = html.match(/<article[^>]*>([\s\S]*)<\/article>/);
  if (articleMatch) {
    // Found article wrapper, extract its content
    const articleContent = articleMatch[1];
    // Look for nested content divs
    const nestedMatch = articleContent.match(/<div[^>]*class="[^"]*(?:markdown|prose|text-base)[^"]*"[^>]*>([\s\S]*)<\/div>/);
    if (nestedMatch) {
      return nestedMatch[1];
    }
    return articleContent;
  }
  
  // If no article tag, look for content divs
  const contentMatch = html.match(/<div[^>]*class="[^"]*(?:markdown|prose|content)[^"]*"[^>]*>([\s\S]*)<\/div>/);
  if (contentMatch) {
    return contentMatch[1];
  }
  
  // Return original if no wrappers found
  return html;
}

export default async function BlogSlugPage({ params }: PageProps) {
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

  // Then check for a post by slug
  const post = await getPostBySlug(slug);
  if (post && post.status === 'published') {
    // If it's a hub_post or sub_hub_post with a hub, redirect to the correct URL
    if ((post.type === 'hub_post' || post.type === 'sub_hub_post') && post.hub) {
      redirect(`/blog/${post.hub.slug}/${post.slug}`);
    }
    // Standalone posts render here
    return <PostPage post={post} />;
  }

  notFound();
}

function PostPage({ post }: { post: BlogPost }) {
  const baseUrl = 'https://queue-tech.jp';
  const postUrl = `${baseUrl}/blog/${post.slug}`;
  const ogImage = (post.og_image_url && post.og_image_url.length > 0) ? post.og_image_url : post.thumbnail_url;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': postUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    headline: post.title,
    description: post.meta_description || post.excerpt,
    image: ogImage || undefined,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: {
      '@type': 'Organization',
      name: 'Queue株式会社',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Queue株式会社',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/asset/logo.png`,
      },
    },
    url: postUrl,
    inLanguage: 'ja',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'ブログ',
        item: `${baseUrl}/blog`,
      },
      ...(post.hub ? [{
        '@type': 'ListItem',
        position: 3,
        name: post.hub.title,
        item: `${baseUrl}/blog/${post.hub.slug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: postUrl,
      }] : [{
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      }]),
    ],
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header locale="ja" />

      {/* パンくず */}
      <div className="pt-[70px] md:pt-[90px] bg-[#f5f6f8]">
        <div className="mx-auto max-w-[900px] px-4 md:px-8 py-3 md:py-4">
          <nav className="text-[11px] md:text-[13px] text-[#666666]" aria-label="パンくずリスト">
            <ol className="flex items-center gap-1.5 md:gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-[#1f5bb9] transition-colors">ホーム</Link></li>
              <li aria-hidden="true">&gt;</li>
              <li><Link href="/blog" className="hover:text-[#1f5bb9] transition-colors">ブログ</Link></li>
              {post.hub && (
                <>
                  <li aria-hidden="true">&gt;</li>
                  <li><Link href={`/blog/${post.hub.slug}`} className="hover:text-[#1f5bb9] transition-colors">{post.hub.title}</Link></li>
                </>
              )}
              <li aria-hidden="true">&gt;</li>
              <li aria-current="page" className="text-[#333333] truncate max-w-[150px] md:max-w-[200px]">{post.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 記事 */}
      <article className="py-6 md:py-12">
        <div className="mx-auto max-w-[900px] px-4 md:px-8">
          {/* ヘッダー画像 */}
          {post.thumbnail_url && (
            <div className="relative h-[180px] sm:h-[250px] md:h-[400px] rounded-[8px] md:rounded-[12px] overflow-hidden mb-6 md:mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
              <Image
                src={post.thumbnail_url}
                alt={post.thumbnail_alt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />
            </div>
          )}

          {/* メタ情報 */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
            {post.hub && (
              <Link
                href={`/blog/${post.hub.slug}`}
                className="text-[11px] md:text-[12px] font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full transition-colors hover:opacity-80"
                style={{
                  background: 'linear-gradient(90deg, rgba(9, 82, 161, 0.1) 0%, rgba(49, 68, 189, 0.1) 49.52%, rgba(109, 29, 147, 0.1) 100%)',
                  color: '#1f5bb9'
                }}
              >
                {post.hub.title}
              </Link>
            )}
            <time className="text-[12px] md:text-[13px] text-[#999999]" dateTime={post.published_at || ''}>
              {formatDate(post.published_at)}
            </time>
          </div>

          {/* タイトル */}
          <h1 
            className="text-[22px] sm:text-[26px] md:text-[36px] font-bold text-[#333333] mb-4 md:mb-6 leading-[140%] md:leading-[150%]"
            style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
          >
            {post.title}
          </h1>

          {/* 概要 */}
          {post.excerpt && (
            <p 
              className="text-[14px] md:text-[18px] text-[#666666] mb-6 md:mb-8 leading-[180%] md:leading-[200%] p-4 md:p-6 bg-[#f8f9fc] rounded-[8px] md:rounded-[12px] border-l-4 border-[#1f5bb9]"
              style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}
            >
              {post.excerpt}
            </p>
          )}

          {/* 本文 */}
          {post.content && (
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: cleanContent(post.content) }}
            />
          )}

          {/* 関連リンク */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#e5e5e5]">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-[13px] md:text-[14px] font-bold text-[#1f5bb9] hover:opacity-70 transition-opacity"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              ブログ一覧に戻る
            </Link>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section 
        className="py-10 md:py-16"
        style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
      >
        <div className="mx-auto max-w-[800px] px-4 md:px-8 text-center">
          <h2 className="text-[18px] md:text-[28px] font-bold text-white mb-3 md:mb-4">
            AI検索で選ばれる企業へ
          </h2>
          <p className="text-[13px] md:text-[14px] text-white/80 mb-5 md:mb-6">
            LLMO（AI SEO）対策の無料診断を実施中
          </p>
          <a
            href="https://umoren.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-[8px] text-[14px] md:text-[15px] font-bold text-[#1f5bb9] bg-white hover:scale-[1.02] hover:shadow-xl transition-all"
          >
            無料診断を受ける
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* フッター */}
      <footer className="relative pb-8 md:pb-12 pt-10 md:pt-16" style={{ background: 'linear-gradient(180deg, #F4F7FB 0%, #E9EEF9 40%, #BEC8E2 100%)' }}>
        <div className="mx-auto w-full max-w-[800px] px-4 md:px-8 text-center">
          <Link href="/" className="inline-block">
            <Image src="/asset/logo.png" alt="QUEUE" width={80} height={64} className="h-auto w-[60px] md:w-[80px]" />
          </Link>
          <nav className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[12px] md:text-[13px] font-bold text-[#666666]">
            <Link href="/service" className="hover:text-[#1f5bb9]">サービス</Link>
            <Link href="/blog" className="hover:text-[#1f5bb9]">ブログ</Link>
            <Link href="/faq" className="hover:text-[#1f5bb9]">FAQ</Link>
            <Link href="/company" className="hover:text-[#1f5bb9]">会社概要</Link>
            <Link href="/#contact" className="hover:text-[#1f5bb9]">お問い合わせ</Link>
            <Link href="/privacy" className="hover:text-[#1f5bb9]">個人情報保護方針</Link>
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
  const baseUrl = 'https://queue-tech.jp';

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'ブログ',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: hub.title,
        item: `${baseUrl}/blog/${hub.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header locale="ja" />

      {/* ヒーロー */}
      <section 
        className="relative pt-[80px] pb-8 sm:pt-[100px] sm:pb-12 md:pt-[120px] md:pb-16"
        style={{ background: 'linear-gradient(180deg, #f8f9fc 0%, #e8edf8 100%)' }}
      >
        <div className="mx-auto max-w-[1000px] px-4 md:px-8">
          <nav className="mb-4 sm:mb-6 text-[11px] sm:text-[12px] md:text-[13px] text-[#666666]" aria-label="パンくずリスト">
            <ol className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-[#1f5bb9]">ホーム</Link></li>
              <li aria-hidden="true">&gt;</li>
              <li><Link href="/blog" className="hover:text-[#1f5bb9]">ブログ</Link></li>
              <li aria-hidden="true">&gt;</li>
              <li aria-current="page" className="text-[#333333]">{hub.title}</li>
            </ol>
          </nav>

          <div className="text-center">
            <h1 
              className="text-[26px] sm:text-[32px] md:text-[48px] font-bold leading-[130%] mb-3 md:mb-4"
              style={{
                fontFamily: 'var(--font-zen-kaku), sans-serif',
                background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                wordBreak: 'keep-all',
                overflowWrap: 'break-word',
                hyphens: 'auto',
              }}
            >
              {hub.title}
            </h1>
            {hub.description && (
              <p className="text-[13px] sm:text-[15px] md:text-[17px] text-[#666666] leading-[170%] sm:leading-[180%] max-w-[600px] mx-auto">
                {hub.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* サブハブ */}
      {subHubs.length > 0 && (
        <section className="py-8 sm:py-10 md:py-12">
          <div className="mx-auto max-w-[1100px] px-4 md:px-8">
            <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#333333] mb-4 sm:mb-6">サブカテゴリー</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {subHubs.map((subHub) => (
                <Link
                  key={subHub.id}
                  href={`/blog/${hub.slug}/${subHub.slug}`}
                  className="bg-white rounded-[10px] sm:rounded-[12px] p-3.5 sm:p-5 shadow-sm hover:shadow-md transition-shadow border border-[#e5e5e5]"
                >
                  <h3 className="font-bold text-[13px] sm:text-[15px] text-[#333333] hover:text-[#1f5bb9] transition-colors">
                    {subHub.title}
                  </h3>
                  {subHub.description && (
                    <p className="text-[11px] sm:text-[13px] text-[#666666] mt-1.5 sm:mt-2 line-clamp-2">{subHub.description}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 記事一覧 */}
      <section className="py-8 sm:py-10 md:py-12 bg-white">
        <div className="mx-auto max-w-[1100px] px-4 md:px-8">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#333333] mb-5 sm:mb-8">記事一覧</h2>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${hub.slug}/${post.slug}`} className="group block h-full">
                  <article className="h-full bg-[#f8f9fc] rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {post.thumbnail_url && (
                      <div className="relative h-40 sm:h-48 overflow-hidden">
                        <Image
                          src={post.thumbnail_url}
                          alt={post.thumbnail_alt || post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="p-4 sm:p-5">
                      <h3 className="text-[14px] sm:text-[15px] font-bold text-[#333333] mb-2 group-hover:text-[#1f5bb9] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-[12px] sm:text-[13px] text-[#666666] mb-2 sm:mb-3 line-clamp-2">{post.excerpt}</p>
                      )}
                      <time className="text-[11px] sm:text-[12px] text-[#999999]">{formatDate(post.published_at)}</time>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 sm:py-12 bg-[#f8f9fc] rounded-[12px]">
              <p className="text-[#666666] text-[14px] sm:text-[15px]">まだ記事がありません</p>
            </div>
          )}
        </div>
      </section>

      {/* フッター */}
      <footer className="relative pb-8 md:pb-12 pt-10 md:pt-16" style={{ background: 'linear-gradient(180deg, #F4F7FB 0%, #E9EEF9 40%, #BEC8E2 100%)' }}>
        <div className="mx-auto w-full max-w-[800px] px-4 md:px-8 text-center">
          <Link href="/" className="inline-block">
            <Image src="/asset/logo.png" alt="QUEUE" width={80} height={64} className="h-auto w-[60px] md:w-[80px]" />
          </Link>
          <nav className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[12px] md:text-[13px] font-bold text-[#666666]">
            <Link href="/service" className="hover:text-[#1f5bb9]">サービス</Link>
            <Link href="/blog" className="hover:text-[#1f5bb9]">ブログ</Link>
            <Link href="/faq" className="hover:text-[#1f5bb9]">FAQ</Link>
            <Link href="/company" className="hover:text-[#1f5bb9]">会社概要</Link>
            <Link href="/#contact" className="hover:text-[#1f5bb9]">お問い合わせ</Link>
            <Link href="/privacy" className="hover:text-[#1f5bb9]">個人情報保護方針</Link>
          </nav>
          <p className="mt-4 md:mt-6 text-[10px] md:text-[12px] text-[#999999]">© Queue Inc</p>
        </div>
      </footer>
    </div>
  );
}
