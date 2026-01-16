import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f8fa]">
      {/* ヘッダー */}
      <header className="relative z-10 mx-auto flex w-full max-w-[1400px] items-center justify-between px-8 py-6 lg:px-16">
        <div className="flex items-center">
          <Image
            src="/asset/Group 1225.png"
            alt="QUEUE"
            width={90}
            height={72}
            className="h-auto w-[70px]"
            priority
          />
        </div>
        <nav className="flex items-center gap-10 text-[15px] font-medium text-[#1a1a1a]">
          <a href="#company" className="transition-colors hover:text-[#2563eb]">
            会社概要
          </a>
          <a href="#contact" className="transition-colors hover:text-[#2563eb]">
            お問い合わせ
          </a>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <div className="relative mx-auto w-full max-w-[1400px] px-8 pb-24 pt-12 lg:px-16">
        {/* 右側イラスト（背景の一部として重ねる） */}
        <div className="pointer-events-none absolute right-[-140px] top-[-10px] h-[620px] w-[900px]">
          <Image
            src="/asset/FV右イラスト.png"
            alt="AI illustration"
            fill
            className="object-contain object-right-top"
            priority
          />
        </div>

        {/* 左側テキスト */}
        <div className="relative z-10 max-w-[620px] pt-8">
          {/* メインタイトル1行目 */}
          <h1 className="text-[48px] leading-[1.3]">
            <span className="font-bold text-[#1e3a8a]">AI検索時代</span>
            <span className="font-normal text-[#1e3a8a]">に、</span>
          </h1>
          
          {/* メインタイトル2行目 */}
          <h2 className="mt-2 text-[48px] font-bold leading-[1.3]">
            <span className="bg-gradient-to-r from-[#7c3aed] via-[#5b21b6] to-[#3b82f6] bg-clip-text text-transparent">
              "AIに選ばれる企業"
            </span>
            <span className="text-[#1e3a8a]">をつくる。</span>
          </h2>

          {/* 説明文 */}
          <div className="mt-12 text-[15px] leading-[2.4] text-[#1a1a1a]">
            <p>Queue株式会社は、</p>
            <p>
              <span className="font-bold text-[#2563eb]">
                LLMO（AI SEO）事業「umoren.ai」
              </span>
              <span>を主軸に、</span>
            </p>
            <p>AI検索・生成AIにおける認知・比較・意思決定領域を支援する</p>
            <p>テクノロジーカンパニーです。</p>
          </div>

          {/* ボタン */}
          <div className="mt-16 flex gap-4">
            <a
              href="#contact"
              className="rounded-md bg-gradient-to-r from-[#7c3aed] to-[#6366f1] px-10 py-4 text-[15px] font-bold text-white transition-all hover:opacity-90"
            >
              無料診断を受ける
            </a>
            <a
              href="#contact"
              className="rounded-md bg-gradient-to-r from-[#4f46e5] to-[#3b82f6] px-10 py-4 text-[15px] font-bold text-white transition-all hover:opacity-90"
            >
              相談する
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
