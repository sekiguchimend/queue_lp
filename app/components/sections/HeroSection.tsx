import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen 2xl:min-h-0 overflow-hidden bg-[#f8f8fa]">
      {/* ヘッダー - トップ画面の一部として配置 */}
      <header
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 lg:px-8"
        style={{ background: 'linear-gradient(90deg, rgba(244, 247, 251, 0) 0%, #F4F7FB 75.48%)' }}
      >
        <div className="flex items-center">
          <Image
            src="/asset/logo.png"
            alt="QUEUE"
            width={90}
            height={72}
            className="h-auto w-[50px] md:w-[70px]"
            priority
          />
        </div>
        <nav className="flex items-center gap-4 md:gap-10 text-[12px] md:text-[15px] font-bold text-[#333333]">
          <a href="/company" className="transition-colors hover:text-[#2563eb]">
            会社概要
          </a>
          <a href="#contact" className="transition-colors hover:text-[#2563eb]">
            お問い合わせ
          </a>
        </nav>
      </header>

      {/* 右側イラスト（背景の一部として重ねる） */}
      <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-[50%] hidden md:block">
        <Image
          src="/asset/topimg.png"
          alt="AI illustration"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      {/* メインコンテンツ */}
      <div className="relative mx-auto 2xl:mx-0 2xl:ml-[8%] w-full max-w-[1400px] px-4 md:px-8 pb-24 pt-12 lg:px-16">

        {/* 左側テキスト */}
        <div className="relative z-10 pt-[80px] md:pt-[80px] pl-0 md:pl-[16px]">
          {/* メインタイトルブロック */}
          <div className="w-full md:w-[850px] flex flex-col gap-[16px] md:gap-[28px]">
            {/* メインタイトル1行目 */}
            <h1
              className="text-[28px] md:text-[40px] lg:text-[56px] font-black leading-[100%] tracking-[0.08em] bg-clip-text text-transparent"
              style={{
                fontFamily: 'var(--font-lexend)',
                background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              AI検索時代<span className="text-[22px] md:text-[32px] lg:text-[44px]">に、</span>
            </h1>

            {/* メインタイトル2行目 */}
            <h2
              className="text-[28px] md:text-[40px] lg:text-[56px] font-semibold leading-[100%] tracking-[0.03em] bg-clip-text text-transparent"
              style={{
                fontFamily: 'var(--font-lexend)',
                background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              "AIに選ばれる企業"<span className="text-[22px] md:text-[32px] lg:text-[44px]">をつくる。</span>
            </h2>
          </div>

          {/* モバイル用イラスト */}
          <div className="relative mt-0 md:hidden">
            <div className="relative ml-auto mr-[-60px] h-[280px] w-[320px] overflow-hidden rounded-full bg-white">
              <Image
                src="/asset/topimg.png"
                alt="AI illustration"
                fill
                className="object-cover object-right"
                priority
              />
            </div>
          </div>

          {/* 説明文 */}
          <div
            className="mt-8 md:mt-12 text-[14px] md:text-[18px] font-semibold leading-[200%] tracking-[0.07em] text-[#333333]"
            style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}
          >
            <p>Queue株式会社は、</p>
            <p>
              <span className="text-[20px] md:text-[28px] font-bold text-[#8120AF]">
                LLMO（AI SEO）事業
              </span>
              <br className="md:hidden" />
              <span
                className="text-[40px] md:text-[28px] font-black md:font-semibold text-[#8120AF] leading-[130%] tracking-[0.02em] md:leading-[200%] md:tracking-[0.07em]"
                style={{
                  fontFamily: 'var(--font-gothic-a1), sans-serif'
                }}
              >
                「umoren.ai」
              </span>
              <span>を主軸に、</span>
            </p>
            <p>AI検索・生成AIにおける認知・比較・意思決定領域を支援する</p>
            <p>テクノロジーカンパニーです。</p>
          </div>

          {/* ボタン */}
          <div className="mt-10 md:mt-16 flex flex-col md:flex-row gap-4">
            <a
              href="#contact"
              className="flex h-[56px] md:h-[72px] w-full md:w-[260px] items-center justify-center rounded-[12px] bg-[linear-gradient(90deg,#0952A1_0%,#3144BD_49.52%,#6D1D93_100%)] px-3 py-6 md:px-4 text-center text-[18px] md:text-[24px] font-medium leading-[100%] tracking-[0.05em] text-white transition-all hover:opacity-90 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
            >
              無料診断を受ける
            </a>
            <a
              href="#contact"
              className="flex h-[56px] md:h-[72px] w-full md:w-[260px] items-center justify-center rounded-[12px] bg-[linear-gradient(90deg,#0952A1_0%,#3144BD_49.52%,#6D1D93_100%)] px-3 py-6 md:px-12 text-center text-[18px] md:text-[24px] font-medium leading-[100%] tracking-[0.05em] text-white transition-all hover:opacity-90"
              style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
            >
              相談する
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
