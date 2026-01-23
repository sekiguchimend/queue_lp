import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getSubHubBySlug, getPostsForSubHub, getPostByHubAndSlug, getHubBySlug } from '@/app/lib/blog-supabase';
import { BlogPost, BlogSubHub } from '@/app/lib/blog-types';
import Header from '@/app/components/Header';

interface PageProps {
  params: Promise<{ slug: string; subSlug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, subSlug } = await params;
  
  // Check if it's a hub post first
  const post = await getPostByHubAndSlug(slug, subSlug);
  if (post) {
    return {
      title: post.meta_title || `${post.title} | Queue株式会社`,
      description: post.meta_description || post.excerpt || '',
      openGraph: {
        title: post.meta_title || post.title,
        description: post.meta_description || post.excerpt || '',
        type: 'article',
        images: post.og_image_url || post.thumbnail_url ? [{ url: post.og_image_url || post.thumbnail_url || '' }] : [],
        publishedTime: post.published_at || undefined,
      },
    };
  }

  // Check if it's a sub-hub
  const subHub = await getSubHubBySlug(slug, subSlug);
  if (subHub) {
    return {
      title: `${subHub.title} | ${subHub.hub?.title} | Queue株式会社`,
      description: subHub.description || `${subHub.title}に関する記事一覧`,
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
  const articleMatch = html.match(/<article[^>]*>([\s\S]*)<\/article>/);
  if (articleMatch) {
    const articleContent = articleMatch[1];
    const nestedMatch = articleContent.match(/<div[^>]*class="[^"]*(?:markdown|prose|text-base)[^"]*"[^>]*>([\s\S]*)<\/div>/);
    if (nestedMatch) {
      return nestedMatch[1];
    }
    return articleContent;
  }
  
  const contentMatch = html.match(/<div[^>]*class="[^"]*(?:markdown|prose|content)[^"]*"[^>]*>([\s\S]*)<\/div>/);
  if (contentMatch) {
    return contentMatch[1];
  }
  
  return html;
}

export default async function HubSubPage({ params }: PageProps) {
  const { slug, subSlug } = await params;

  // First, try to find a hub post with this slug
  const post = await getPostByHubAndSlug(slug, subSlug);
  if (post && post.status === 'published') {
    return <PostPage post={post} hubSlug={slug} />;
  }

  // If not a post, try to find a sub-hub
  const subHub = await getSubHubBySlug(slug, subSlug);
  if (subHub && subHub.status === 'published') {
    const posts = await getPostsForSubHub(subHub.id);
    return <SubHubPage subHub={subHub} posts={posts} hubSlug={slug} />;
  }

  notFound();
}

function PostPage({ post, hubSlug }: { post: BlogPost; hubSlug: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.thumbnail_url,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: {
      '@type': 'Organization',
      name: 'Queue株式会社',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Queue株式会社',
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

      <Header locale="ja" />

      {/* パンくず */}
      <div className="pt-[80px] md:pt-[90px] bg-[#f5f6f8]">
        <div className="mx-auto max-w-[900px] px-4 md:px-8 py-4">
          <nav className="text-[12px] md:text-[13px] text-[#666666]">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-[#1f5bb9] transition-colors">ホーム</Link></li>
              <li>&gt;</li>
              <li><Link href="/blog" className="hover:text-[#1f5bb9] transition-colors">ブログ</Link></li>
              {post.hub && (
                <>
                  <li>&gt;</li>
                  <li><Link href={`/blog/${post.hub.slug}`} className="hover:text-[#1f5bb9] transition-colors">{post.hub.title}</Link></li>
                </>
              )}
              <li>&gt;</li>
              <li className="text-[#333333] truncate max-w-[200px]">{post.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 記事 */}
      <article className="py-8 md:py-12">
        <div className="mx-auto max-w-[900px] px-4 md:px-8">
          {/* ヘッダー画像 */}
          {post.thumbnail_url && (
            <div className="relative h-[200px] md:h-[400px] rounded-[12px] overflow-hidden mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
              <Image
                src={post.thumbnail_url}
                alt={post.thumbnail_alt || post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* メタ情報 */}
          <div className="flex items-center gap-3 mb-6">
            {post.hub && (
              <Link
                href={`/blog/${post.hub.slug}`}
                className="text-[12px] font-bold px-4 py-1.5 rounded-full transition-colors hover:opacity-80"
                style={{
                  background: 'linear-gradient(90deg, rgba(9, 82, 161, 0.1) 0%, rgba(49, 68, 189, 0.1) 49.52%, rgba(109, 29, 147, 0.1) 100%)',
                  color: '#1f5bb9'
                }}
              >
                {post.hub.title}
              </Link>
            )}
            <time className="text-[13px] text-[#999999]" dateTime={post.published_at || ''}>
              {formatDate(post.published_at)}
            </time>
          </div>

          {/* タイトル */}
          <h1 
            className="text-[24px] md:text-[36px] font-bold text-[#333333] mb-6 leading-[150%]"
            style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
          >
            {post.title}
          </h1>

          {/* 概要 */}
          {post.excerpt && (
            <p 
              className="text-[16px] md:text-[18px] text-[#666666] mb-8 leading-[200%] p-6 bg-[#f8f9fc] rounded-[12px] border-l-4 border-[#1f5bb9]"
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
          <div className="mt-12 pt-8 border-t border-[#e5e5e5]">
            <Link 
              href={post.hub ? `/blog/${post.hub.slug}` : '/blog'}
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#1f5bb9] hover:opacity-70 transition-opacity"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {post.hub ? `${post.hub.title}の記事一覧に戻る` : 'ブログ一覧に戻る'}
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
            AI検索で選ばれる企業へ
          </h2>
          <p className="text-[14px] text-white/80 mb-6">
            LLMO（AI SEO）対策の無料診断を実施中
          </p>
          <a
            href="https://umoren.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[8px] text-[15px] font-bold text-[#1f5bb9] bg-white hover:scale-[1.02] hover:shadow-xl transition-all"
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

function SubHubPage({ subHub, posts, hubSlug }: { subHub: BlogSubHub; posts: BlogPost[]; hubSlug: string }) {
  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <Header locale="ja" />

      {/* ヒーロー */}
      <section 
        className="relative pt-[100px] pb-12 md:pt-[120px] md:pb-16"
        style={{ background: 'linear-gradient(180deg, #f8f9fc 0%, #e8edf8 100%)' }}
      >
        <div className="mx-auto max-w-[1000px] px-4 md:px-8">
          <nav className="mb-6 text-[12px] md:text-[13px] text-[#666666]">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-[#1f5bb9]">ホーム</Link></li>
              <li>&gt;</li>
              <li><Link href="/blog" className="hover:text-[#1f5bb9]">ブログ</Link></li>
              {subHub.hub && (
                <>
                  <li>&gt;</li>
                  <li><Link href={`/blog/${subHub.hub.slug}`} className="hover:text-[#1f5bb9]">{subHub.hub.title}</Link></li>
                </>
              )}
              <li>&gt;</li>
              <li className="text-[#333333]">{subHub.title}</li>
            </ol>
          </nav>

          <div className="text-center">
            <p className="text-[14px] font-bold text-[#1f5bb9] mb-3">
              {subHub.hub?.title}
            </p>
            <h1 
              className="text-[32px] md:text-[48px] font-bold leading-[130%] mb-4"
              style={{
                fontFamily: 'var(--font-zen-kaku), sans-serif',
                background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {subHub.title}
            </h1>
            {subHub.description && (
              <p className="text-[15px] md:text-[17px] text-[#666666] leading-[180%] max-w-[600px] mx-auto">
                {subHub.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 記事一覧 */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-[1100px] px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 
              className="text-[32px] md:text-[40px] font-medium text-[#3b3b3b] leading-[100%]"
              style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            >
              Articles
            </h2>
            <div className="mx-auto mt-2 h-[2px] w-10 bg-[#1f5bb9]" />
            <p className="mt-2 text-[14px] font-bold text-[#333333]">記事一覧</p>
          </div>
          
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${hubSlug}/${post.slug}`} className="group block h-full">
                  <article className="h-full bg-white rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
                    {post.thumbnail_url && (
                      <div className="relative h-48 overflow-hidden bg-[#f8f9fc]">
                        <Image
                          src={post.thumbnail_url}
                          alt={post.thumbnail_alt || post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <h3 
                        className="text-[15px] md:text-[16px] font-bold text-[#333333] mb-3 group-hover:text-[#1f5bb9] transition-colors line-clamp-2"
                        style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                      >
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p 
                          className="text-[13px] text-[#666666] mb-4 line-clamp-2 leading-[180%]"
                          style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}
                        >
                          {post.excerpt}
                        </p>
                      )}
                      <time className="text-[12px] text-[#999999]" dateTime={post.published_at || ''}>
                        {formatDate(post.published_at)}
                      </time>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-[12px] shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f8f9fc] flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[#666666] text-[15px]">まだ記事がありません</p>
              <p className="text-[#999999] text-[13px] mt-2">コンテンツは近日公開予定です</p>
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
          <h2 className="text-[20px] md:text-[28px] font-bold text-white mb-4">
            AI検索で選ばれる企業へ
          </h2>
          <p className="text-[14px] text-white/80 mb-6">
            LLMO（AI SEO）対策の無料診断を実施中
          </p>
          <a
            href="https://umoren.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[8px] text-[15px] font-bold text-[#1f5bb9] bg-white hover:scale-[1.02] hover:shadow-xl transition-all"
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
