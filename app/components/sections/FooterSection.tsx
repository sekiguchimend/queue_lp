import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="relative bg-[#f5f6f8] pb-12 pt-16">
      <div className="mx-auto w-full max-w-[800px] px-8 text-center">
        {/* ロゴ */}
        <div className="flex justify-center">
          <Image
            src="/asset/Group 1225.png"
            alt="QUEUE"
            width={80}
            height={64}
            className="h-auto w-[80px]"
          />
        </div>

        {/* ナビゲーションリンク */}
        <div className="mt-8 flex items-center justify-center gap-10 text-[13px] font-bold text-[#666666]">
          <a href="#company" className="hover:text-[#1f5bb9] transition-colors">会社概要</a>
          <a href="#contact" className="hover:text-[#1f5bb9] transition-colors">お問い合わせ</a>
        </div>

        {/* コピーライト */}
        <p className="mt-6 text-[12px] text-[#999999]">© Queue Inc</p>
      </div>

      {/* 上に戻るボタン */}
      <a
        href="#"
        className="absolute right-6 bottom-6 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white text-[#7a869f] shadow-md hover:shadow-lg transition-shadow"
        aria-label="ページ上部へ"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3V13M8 3L3 8M8 3L13 8" stroke="#7a869f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </footer>
  );
}
