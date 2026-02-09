import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts, getHubs, getPickupPosts } from '@/app/lib/blog-supabase';
import { BlogPost, BlogHub } from '@/app/lib/blog-types';
import Header from '@/app/components/Header';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'ブログ | LLMO・AI SEO対策の最新情報 | Queue株式会社',
  description: 'Queue株式会社のブログでは、LLMO（AI SEO）対策、ChatGPT・Gemini・Perplexityなど生成AIに関する最新情報、業界トレンド、技術的なナレッジをお届けします。',
  keywords: ['LLMO', 'AI SEO', 'ChatGPT', 'Gemini', 'Perplexity', 'AI検索対策', 'AIO対策', 'ブログ'],
  openGraph: {
    title: 'ブログ | LLMO・AI SEO対策の最新情報 | Queue株式会社',
    description: 'LLMOやAI最適化に関する最新情報をお届けします',
    type: 'website',
  },
};

function formatDate(dateString: string | null): string {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getPostUrl(post: BlogPost): string {
  if (post.hub && (post.type === 'hub_post' || post.type === 'sub_hub_post')) {
    return `/blog/${post.hub.slug}/${post.slug}`;
  }
  return `/blog/${post.slug}`;
}

function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link href={getPostUrl(post)} className="group block h-full">
      <article className={`h-full bg-white rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 ${featured ? 'border-2 border-[#FDCA39]' : ''}`}>
        {post.thumbnail_url && (
          <div className="relative h-40 sm:h-48 overflow-hidden bg-[#f8f9fc]">
            <Image
              src={post.thumbnail_url}
              alt={post.thumbnail_alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {post.is_pickup && (
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2.5 sm:px-3 py-0.5 sm:py-1 bg-[#FDCA39] rounded-full text-[10px] sm:text-[11px] font-bold text-[#333333]">
                ピックアップ
              </div>
            )}
          </div>
        )}
        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            {post.hub && (
              <span 
                className="text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, rgba(9, 82, 161, 0.1) 0%, rgba(49, 68, 189, 0.1) 49.52%, rgba(109, 29, 147, 0.1) 100%)',
                  color: '#1f5bb9'
                }}
              >
                {post.hub.title}
              </span>
            )}
          </div>
          <h3 
            className="text-[14px] sm:text-[15px] md:text-[16px] font-bold text-[#333333] mb-2 sm:mb-3 group-hover:text-[#1f5bb9] transition-colors line-clamp-2"
            style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
          >
            {post.title}
          </h3>
          {post.excerpt && (
            <p 
              className="text-[12px] sm:text-[13px] text-[#666666] mb-3 sm:mb-4 line-clamp-2 leading-[170%] sm:leading-[180%]"
              style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}
            >
              {post.excerpt}
            </p>
          )}
          <time className="text-[11px] sm:text-[12px] text-[#999999]" dateTime={post.published_at || ''}>
            {formatDate(post.published_at)}
          </time>
        </div>
      </article>
    </Link>
  );
}

function HubTag({ hub }: { hub: BlogHub }) {
  return (
    <Link 
      href={`/blog/${hub.slug}`} 
      className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white border border-[#e5e5e5] rounded-full text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#333333] hover:border-[#1f5bb9] hover:text-[#1f5bb9] transition-colors"
    >
      {hub.title}
    </Link>
  );
}

export default async function BlogPage() {
  const [posts, hubs, pickupPosts] = await Promise.all([
    getPosts({ status: 'published' }),
    getHubs({ status: 'published' }),
    getPickupPosts(3),
  ]);

  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <Header locale="ja" />

      {/* ヒーローセクション */}
      <section 
        className="relative pt-[80px] pb-8 sm:pt-[100px] sm:pb-12 md:pt-[120px] md:pb-16"
        style={{ background: 'linear-gradient(180deg, #f8f9fc 0%, #e8edf8 100%)' }}
      >
        <div className="mx-auto max-w-[1000px] px-4 md:px-8">
          {/* パンくずリスト */}
          <nav className="mb-4 sm:mb-6 text-[11px] sm:text-[12px] md:text-[13px] text-[#666666]" aria-label="パンくずリスト">
            <ol className="flex items-center gap-1.5 sm:gap-2">
              <li>
                <Link href="/" className="hover:text-[#1f5bb9] transition-colors">ホーム</Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li aria-current="page" className="text-[#333333]">ブログ</li>
            </ol>
          </nav>

          <div className="text-center">
            <h1 
              className="text-[32px] sm:text-[40px] md:text-[64px] font-medium text-[#3b3b3b] leading-[100%] tracking-normal"
              style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            >
              Blog
            </h1>
            <div className="mx-auto mt-2 h-[2px] w-10 bg-[#1f5bb9]" />
            <p className="mt-2 text-[13px] sm:text-[14px] md:text-[16px] font-bold text-[#333333]">ブログ</p>
            <p 
              className="mt-3 sm:mt-4 text-[13px] sm:text-[14px] md:text-[16px] text-[#666666] leading-[170%] sm:leading-[180%]"
              style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}
            >
              LLMO・AI SEO対策に関する最新情報、業界トレンド、<br className="hidden md:block" />
              技術的なナレッジをお届けします
            </p>
          </div>
        </div>
      </section>

      {/* ピックアップ記事 */}
      {pickupPosts.length > 0 && (
        <section className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-[1100px] px-4 md:px-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
              <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FDCA39]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[16px] sm:h-[16px]">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#333333"/>
                </svg>
              </span>
              <h2 
                className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-[#333333]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >
                ピックアップ記事
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {pickupPosts.map((post) => (
                <PostCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* カテゴリー */}
      {hubs.length > 0 && (
        <section className="py-6 sm:py-8 md:py-10 bg-[#f8f9fc]">
          <div className="mx-auto max-w-[1100px] px-4 md:px-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {hubs.map((hub) => (
                <HubTag key={hub.id} hub={hub} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 最新記事 */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-[1100px] px-4 md:px-8">
          <div className="text-center mb-6 sm:mb-10">
            <h2 
              className="text-[28px] sm:text-[32px] md:text-[40px] font-medium text-[#3b3b3b] leading-[100%]"
              style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            >
              Latest
            </h2>
            <div className="mx-auto mt-2 h-[2px] w-10 bg-[#1f5bb9]" />
            <p className="mt-2 text-[13px] sm:text-[14px] font-bold text-[#333333]">最新記事</p>
          </div>
          
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16 bg-[#f8f9fc] rounded-[12px]">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-[#e8edf8] flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[32px] sm:h-[32px]">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[#666666] text-[14px] sm:text-[15px]">まだ記事がありません</p>
              <p className="text-[#999999] text-[12px] sm:text-[13px] mt-2">コンテンツは近日公開予定です</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-10 md:py-16"
        style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
      >
        <div className="mx-auto max-w-[800px] px-4 md:px-8 text-center">
          <h2 
            className="text-[18px] sm:text-[20px] md:text-[28px] font-bold text-white mb-3 md:mb-4"
            style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
          >
            AI検索で選ばれる企業へ
          </h2>
          <p className="text-[13px] md:text-[14px] text-white/80 mb-5 md:mb-6 leading-[180%]">
            LLMO（AI SEO）対策の無料診断を実施中
          </p>
          <a
            href="https://umoren.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-[8px] text-[14px] md:text-[15px] font-bold text-[#1f5bb9] bg-white transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            無料診断を受ける
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* フッター */}
      <footer className="relative pb-8 md:pb-12 pt-10 md:pt-16" style={{ background: 'linear-gradient(180deg, #F4F7FB 0%, #E9EEF9 40%, #BEC8E2 100%)' }}>
        <div className="mx-auto w-full max-w-[800px] px-4 md:px-8 text-center">
          <div className="flex justify-center">
            <Link href="/" aria-label="ホームへ戻る">
              <Image
                src="/asset/logo.png"
                alt="QUEUE"
                width={80}
                height={64}
                className="h-auto w-[60px] md:w-[80px]"
              />
            </Link>
          </div>

          <nav className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[12px] md:text-[13px] font-bold text-[#666666]" aria-label="フッターナビゲーション">
            <Link href="/service" className="hover:text-[#1f5bb9] transition-colors">サービス</Link>
            <Link href="/blog" className="hover:text-[#1f5bb9] transition-colors">ブログ</Link>
            <Link href="/faq" className="hover:text-[#1f5bb9] transition-colors">FAQ</Link>
            <Link href="/company" className="hover:text-[#1f5bb9] transition-colors">会社概要</Link>
            <Link href="/#contact" className="hover:text-[#1f5bb9] transition-colors">お問い合わせ</Link>
            <Link href="/privacy" className="hover:text-[#1f5bb9] transition-colors">個人情報保護方針</Link>
            <Link href="/security" className="hover:text-[#1f5bb9] transition-colors">セキュリティ</Link>
          </nav>

          <p className="mt-4 md:mt-6 text-[10px] md:text-[12px] text-[#999999]">© Queue Inc</p>
        </div>
      </footer>
    </div>
  );
}
