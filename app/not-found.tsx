import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ページが見つかりません | Queue株式会社",
  description: "お探しのページは見つかりませんでした。URLをご確認いただくか、トップページからお探しください。",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] flex flex-col">
      {/* ヘッダー */}
      <header className="flex items-center justify-between px-4 py-3 lg:px-8 bg-white border-b border-[#e5e5e5]">
        <Link href="/" className="flex items-center" aria-label="ホームへ戻る">
          <Image
            src="/asset/logo.png"
            alt="QUEUE"
            width={90}
            height={72}
            className="h-auto w-[50px] md:w-[70px]"
            priority
          />
        </Link>
        <nav className="flex items-center gap-4 md:gap-10 text-[12px] md:text-[15px] font-bold text-[#333333]" aria-label="メインナビゲーション">
          <Link href="/company" className="transition-colors hover:text-[#2563eb]">
            会社概要
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-[#2563eb]">
            お問い合わせ
          </Link>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-[500px]">
          {/* 404 イラスト */}
          <div className="relative mb-8">
            <p
              className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none select-none"
              style={{
                fontFamily: 'var(--font-lexend), sans-serif',
                background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: 0.15,
              }}
            >
              404
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-6 shadow-lg">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1f5bb9]">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 8V11M11 14H11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* テキスト */}
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#333333] mb-4">
            ページが見つかりません
          </h1>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#666666] leading-relaxed mb-8">
            お探しのページは移動または削除された可能性があります。<br className="hidden sm:block" />
            URLをご確認いただくか、以下のリンクからお探しください。
          </p>

          {/* ボタン */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-lg text-[15px] font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              トップページへ
            </Link>
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-lg text-[15px] font-bold text-[#1f5bb9] bg-white border-2 border-[#1f5bb9] transition-colors hover:bg-[#f0f5ff]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              お問い合わせ
            </Link>
          </div>

          {/* サイトマップリンク */}
          <div className="mt-12 pt-8 border-t border-[#e5e5e5]">
            <p className="text-[13px] text-[#666666] mb-4">または以下のページをご覧ください</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-[14px]">
              <Link href="/" className="text-[#1f5bb9] hover:underline">トップ</Link>
              <span className="text-[#ccc]">|</span>
              <Link href="/company" className="text-[#1f5bb9] hover:underline">会社概要</Link>
              <span className="text-[#ccc]">|</span>
              <Link href="/#contact" className="text-[#1f5bb9] hover:underline">お問い合わせ</Link>
              <span className="text-[#ccc]">|</span>
              <Link href="/privacy" className="text-[#1f5bb9] hover:underline">個人情報保護方針</Link>
            </div>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="py-6 text-center border-t border-[#e5e5e5] bg-white">
        <p className="text-[12px] text-[#999999]">© Queue Inc</p>
      </footer>
    </div>
  );
}

