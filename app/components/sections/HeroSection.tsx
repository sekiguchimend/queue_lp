import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#f5f6f8]">
      <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-10 pb-4 pt-8">
        <Image
          src="/asset/Group 1225.png"
          alt="QUEUE"
          width={80}
          height={32}
          className="h-auto w-[80px]"
          priority
        />
        <nav className="flex items-center gap-10 text-sm font-medium text-[#3b3b3b]">
          <a href="#company" className="hover:text-[#1e3a8a]">
            会社概要
          </a>
          <a href="#contact" className="hover:text-[#1e3a8a]">
            お問い合わせ
          </a>
        </nav>
      </header>

      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-10 pb-16 pt-8">
        <div className="max-w-[520px]">
          <p className="text-[40px] font-semibold leading-tight text-[#1d4ca3]">
            AI検索時代に、
          </p>
          <p className="mt-2 text-[40px] font-semibold leading-tight text-[#1d4ca3]">
            <span className="bg-gradient-to-r from-[#6a3ec8] to-[#1f6ed4] bg-clip-text text-transparent">
              “AIに選ばれる企業”
            </span>
            をつくる。
          </p>

          <div className="mt-10 space-y-3 text-[15px] leading-relaxed text-[#333]">
            <p>Queue株式会社は、</p>
            <p>
              <span className="font-semibold text-[#6a3ec8]">
                LLMO（AI SEO）事業「umoren.ai」
              </span>
              を主軸に、
            </p>
            <p>AI検索・生成AIにおける認知・比較・意思決定領域を支援する</p>
            <p>テクノロジーカンパニーです。</p>
          </div>

          <div className="mt-12 flex gap-4">
            <a
              href="#contact"
              className="rounded-[12px] bg-gradient-to-r from-[#2b63c8] to-[#6a35b9] px-8 py-4 text-sm font-semibold text-white shadow-[0_6px_14px_rgba(32,78,170,0.25)]"
            >
              無料診断を受ける
            </a>
            <a
              href="#contact"
              className="rounded-[12px] bg-gradient-to-r from-[#1f6ed4] to-[#3e2aa5] px-8 py-4 text-sm font-semibold text-white shadow-[0_6px_14px_rgba(32,78,170,0.25)]"
            >
              相談する
            </a>
          </div>
        </div>

        <div className="relative h-[520px] w-[640px]">
          <div className="absolute inset-0 rounded-[24px] bg-white" />
          <Image
            src="/asset/FV右イラスト.png"
            alt="AI illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
