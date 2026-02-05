import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ完了 | Queue株式会社",
  description: "お問い合わせいただきありがとうございます。内容を確認の上、担当者より折り返しご連絡いたします。",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ContactThanksPage() {
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
        <div className="text-center max-w-[600px]">
          {/* 成功アイコン */}
          <div className="relative mb-8 flex justify-center">
            <div className="relative">
              {/* 背景の円アニメーション */}
              <div 
                className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
              />
              <div 
                className="relative bg-white rounded-full p-6 shadow-xl"
                style={{ 
                  boxShadow: '0 10px 40px rgba(31, 91, 185, 0.2)',
                }}
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* テキスト */}
          <h1 
            className="text-[24px] sm:text-[28px] md:text-[36px] font-bold mb-4"
            style={{
              background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            お問い合わせ<br className="sm:hidden" />ありがとうございます
          </h1>
          
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md mb-8">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#333333] leading-relaxed">
              お問い合わせ内容を受け付けました。<br />
              内容を確認の上、担当者より<span className="font-bold text-[#1f5bb9]">2営業日以内</span>に<br className="hidden sm:block" />
              折り返しご連絡いたします。
            </p>
          </div>

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
              トップページへ戻る
            </Link>
            <a
              href="https://umoren.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-lg text-[15px] font-bold text-[#1f5bb9] bg-white border-2 border-[#1f5bb9] transition-colors hover:bg-[#f0f5ff]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              umoren.aiを見る
            </a>
          </div>

          {/* CTAセクション */}
          <div className="mt-12 pt-8 border-t border-[#e5e5e5]">
            <p className="text-[13px] text-[#666666] mb-4">お返事をお待ちいただく間に...</p>
            <a
              href="https://umoren.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FDCA39]/10 to-[#FDCA39]/5 border border-[#FDCA39]/30 rounded-xl px-6 py-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-start">
                <span className="text-[11px] text-[#666666]">無料で今すぐチェック</span>
                <span className="text-[15px] font-bold text-[#333333]">LLMO無料診断を受ける →</span>
              </div>
            </a>
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

