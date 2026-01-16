import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f8fa]">
      {/* ヘッダー - トップ画面の一部として配置 */}
      <header
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 lg:px-8"
        style={{ background: 'linear-gradient(90deg, rgba(244, 247, 251, 0) 0%, #F4F7FB 75.48%)' }}
      >
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
        <nav className="flex items-center gap-10 text-[15px] font-bold text-[#333333]">
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
        <div className="pointer-events-none absolute left-[43%] top-0 bottom-0 right-0">
          <Image
            src="/asset/FV右イラスト.png"
            alt="AI illustration"
            fill
            className="object-contain object-right-top"
            priority
          />
        </div>

        {/* 左側テキスト */}
        <div className="relative z-10 pt-[80px] pl-[16px]">
          {/* メインタイトルブロック */}
          <div className="w-[715px] flex flex-col gap-[28px]">
            {/* メインタイトル1行目 */}
            <h1
              className="text-[48px] font-black leading-[100%] tracking-[0.08em] bg-clip-text text-transparent"
              style={{
                fontFamily: 'var(--font-zen-kaku), sans-serif',
                background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              AI検索時代に、
            </h1>

            {/* メインタイトル2行目 */}
            <h2
              className="text-[56px] font-semibold leading-[100%] tracking-[0.03em] bg-clip-text text-transparent"
              style={{
                fontFamily: 'var(--font-lexend), sans-serif',
                background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              "AIに選ばれる企業"をつくる。
            </h2>
          </div>

          {/* 説明文 */}
          <div className="mt-12 text-[15px] leading-[2.4] text-[#333333]">
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
