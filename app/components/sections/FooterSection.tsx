import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="relative pb-8 md:pb-12 pt-10 md:pt-16" style={{ background: 'linear-gradient(180deg, #F4F7FB 0%, #E9EEF9 40%, #BEC8E2 100%)' }}>
      <div className="mx-auto w-full max-w-[800px] px-4 md:px-8 text-center">
        {/* ロゴ */}
        <div className="flex justify-center">
          <a href="/" aria-label="ホームへ戻る">
            <Image
              src="/asset/logo.png"
              alt="QUEUE"
              width={80}
              height={64}
              className="h-auto w-[60px] md:w-[80px]"
            />
          </a>
        </div>

        {/* ナビゲーションリンク */}
        <nav className="mt-6 md:mt-8 flex items-center justify-center gap-6 md:gap-10 text-[12px] md:text-[13px] font-bold text-[#666666]" aria-label="フッターナビゲーション">
          <a href="/company" className="hover:text-[#1f5bb9] transition-colors">会社概要</a>
          <a href="#contact" className="hover:text-[#1f5bb9] transition-colors">お問い合わせ</a>
        </nav>

        {/* コピーライト */}
        <p className="mt-4 md:mt-6 text-[10px] md:text-[12px] text-[#999999]">© Queue Inc</p>
      </div>

      {/* 上に戻るボタン */}
      <a
        href="#"
        className="absolute right-4 md:right-6 bottom-4 md:bottom-6 flex h-[36px] w-[36px] md:h-[44px] md:w-[44px] items-center justify-center rounded-full bg-white text-[#7a869f] shadow-md hover:shadow-lg transition-shadow"
        aria-label="ページ上部へ"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[12px] md:w-[16px] h-auto">
          <path d="M8 3V13M8 3L3 8M8 3L13 8" stroke="#7a869f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </footer>
  );
}
