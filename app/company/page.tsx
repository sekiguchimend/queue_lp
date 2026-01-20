import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | Queue株式会社",
  description: "Queue株式会社の会社概要ページ。会社名、事業内容、代表者、所在地、設立年月、従業員数、連絡先電話番号、資本金などの基本情報を掲載しています。",
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "会社概要 | Queue株式会社",
    description: "Queue株式会社の会社概要ページ。会社名、事業内容、代表者、所在地、設立年月、従業員数、連絡先電話番号、資本金などの基本情報を掲載しています。",
    url: "https://queue-tech.jp/company",
    type: "website",
    images: [{
      url: "https://queue-tech.jp/asset/logo.png",
      width: 1200,
      height: 630,
      alt: "Queue株式会社ロゴ",
    }],
  },
};

export default function CompanyPage() {
  const companyInfo = [
    { label: "会社名", value: "QUEUE株式会社", isLogo: true },
    { label: "事業内容", value: "LLMO（AI SEO）事業 / AI受託開発" },
    { label: "代表者", value: "谷口 太一" },
    { label: "所在地", value: "〒104-0061\n東京都中央区銀座8丁目17-5　THE HUB 銀座 OCT" },
    { label: "設立年月", value: "2024年4月" },
    { label: "従業員数", value: "10人" },
    { label: "連絡先電話番号", value: "03-5324-2678" },
    { label: "資本金", value: "115万円" },
  ];

  return (
    <main className="min-h-screen">
      {/* ヘッダー */}
      <header
        className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 lg:px-8 bg-white"
      >
        <a href="/" className="flex items-center" aria-label="ホームへ戻る">
          <Image
            src="/asset/logo.png"
            alt="QUEUE"
            width={90}
            height={72}
            className="h-auto w-[50px] md:w-[70px]"
            priority
          />
        </a>
        <nav className="flex items-center gap-4 md:gap-10 text-[12px] md:text-[15px] font-bold text-[#333333]" aria-label="メインナビゲーション">
          <a href="/#company" className="transition-colors hover:text-[#2563eb]">
            会社概要
          </a>
          <a href="/#contact" className="transition-colors hover:text-[#2563eb]">
            お問い合わせ
          </a>
        </nav>
      </header>

      {/* ヒーローセクション - モバイル */}
      <section
        className="md:hidden pt-[60px]"
        style={{
          backgroundImage: "url('/asset/company-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center py-12">
          <p
            className="text-[40px] font-medium leading-[100%] tracking-normal text-white"
            style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          >Company</p>
          <div className="mt-4 h-[2px] w-[50px] bg-[#f6c543]" />
          <p
            className="mt-4 text-[16px] font-medium leading-[100%] tracking-[0.03em] text-white"
            style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
          >会社概要</p>
        </div>
      </section>

      {/* ヒーローセクション - デスクトップ */}
      <section className="hidden md:block pt-[80px]">
        <Image
          src="/image.png"
          alt="Company"
          width={1717}
          height={361}
          className="h-auto w-full"
          priority
        />
      </section>

      {/* 会社情報セクション - モバイル */}
      <section className="md:hidden bg-white py-8">
        <div className="mx-auto w-full px-6">
          <div className="space-y-0">
            {companyInfo.map((item, index) => (
              <div
                key={index}
                className="py-6"
                style={{
                  borderBottom: '2px solid transparent',
                  borderImage: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%) 1',
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="h-[8px] w-[8px] rounded-full bg-[#1f5bb9]"></span>
                  <span className="text-[14px] font-medium text-[#333333]">
                    {item.label}
                  </span>
                </div>
                <div className="mt-2 ml-5">
                  {item.isLogo ? (
                    <div className="flex items-end gap-1">
                      <span
                        className="text-[28px] font-semibold leading-[100%] tracking-[0.05em]"
                        style={{
                          fontFamily: 'var(--font-lexend), sans-serif',
                          background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        QUEUE
                      </span>
                      <span className="text-[14px] font-medium text-[#333333] ml-1">
                        株式会社
                      </span>
                    </div>
                  ) : (
                    <p className="text-[14px] font-medium text-[#333333] whitespace-pre-line">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 会社情報セクション - デスクトップ */}
      <section className="hidden md:block bg-[#f5f6f8] py-20">
        <div className="mx-auto w-full max-w-[800px] px-8">
          <div className="space-y-0">
            {companyInfo.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-start gap-4"
              >
                <div
                  className="flex items-center gap-4 w-[200px] shrink-0 py-8 pl-4"
                  style={{
                    borderBottom: '2px solid transparent',
                    borderImage: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%) 1',
                  }}
                >
                  <span className="h-[10px] w-[10px] rounded-full bg-[#1f5bb9]"></span>
                  <span className="text-[15px] font-medium text-[#333333]">
                    {item.label}
                  </span>
                </div>
                <div className="ml-6 flex-1 py-8">
                  {item.isLogo ? (
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[32px] font-medium leading-[100%] tracking-normal"
                        style={{
                          fontFamily: 'var(--font-lexend), sans-serif',
                          background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        QUEUE
                      </span>
                      <span className="text-[15px] font-medium text-[#333333]">
                        株式会社
                      </span>
                    </div>
                  ) : (
                    <p className="text-[15px] font-medium text-[#333333] whitespace-pre-line">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section
        className="py-10 md:py-16"
        style={{
          backgroundImage: "url('/asset/gradient-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto w-full max-w-[1040px] px-10 md:px-8 py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* カード1 - モバイル */}
          <div
            className="md:hidden relative rounded-[3px] bg-white px-6 py-6"
            style={{ boxShadow: '6px 6px 12px 0px #5E6C84E5' }}
          >
            <p
              className="text-[36px] font-semibold text-[#FDCA39] leading-none"
              style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            >LLMO</p>
            <p
              className="text-[20px] font-bold text-[#FDCA39] leading-none mt-1"
              style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
            >無料診断</p>
            <p
              className="mt-4 text-[14px] font-medium leading-[180%] tracking-[0.03em] text-[#333333]"
              style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
            >
              ChatGPTで御社が<br />
              どう評価されているか<br />
              診断します。
            </p>
            <div className="flex justify-end mt-4">
              <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FDCA39] text-white">
                →
              </span>
            </div>
          </div>

          {/* カード1 - デスクトップ */}
          <div
            className="hidden md:flex relative h-[188px] rounded-[3px] bg-white px-10 py-8 flex-row justify-center items-center"
            style={{ boxShadow: '6px 6px 12px 0px #5E6C84E5' }}
          >
            <div>
              <div className="flex flex-row gap-2 items-end">
                <p className="text-[50px] font-semibold text-[#FDCA39] leading-none">LLMO</p>
                <p className="text-[24px] text-[#FDCA39] leading-none">無料診断</p>
              </div>
              <p
                className="mt-4 text-[16px] font-medium leading-[180%] tracking-[0.03em] text-[#333333]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >
                ChatGPTで御社が
                <br />
                どう評価されているか診断します。
              </p>
            </div>
            <span className="absolute right-10 top-1/2 -translate-y-1/2 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#FDCA39] text-white">
              →
            </span>
          </div>

          {/* カード2 - モバイル */}
          <div
            className="md:hidden relative rounded-[3px] bg-white px-6 py-6"
            style={{ boxShadow: '6px 6px 12px 0px #5E6C84E5' }}
          >
            <div className="flex flex-row items-end gap-0">
              <span
                className="text-[32px] font-bold text-[#1f5bb9] leading-none"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >AI</span>
              <span
                className="text-[20px] font-bold text-[#1f5bb9] leading-none"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >検索</span>
              <span
                className="text-[16px] font-medium text-[#333333] leading-none"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >での</span>
            </div>
            <p
              className="text-[20px] font-bold text-[#1f5bb9] leading-none mt-2"
              style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
            >表示状況チェック</p>
            <p
              className="mt-4 text-[14px] font-medium leading-[180%] tracking-[0.03em] text-[#333333]"
              style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
            >
              AI検索した際の、御社の<br />
              「露出有無」と「引用状況」を<br />
              調査します。
            </p>
            <div className="flex justify-end mt-4">
              <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#1f5bb9] text-white">
                →
              </span>
            </div>
          </div>

          {/* カード2 - デスクトップ */}
          <div
            className="hidden md:flex relative h-[188px] rounded-[3px] bg-white px-10 py-8 flex-row justify-center items-center"
            style={{ boxShadow: '6px 6px 12px 0px #5E6C84E5' }}
          >
            <div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-1 items-end">
                  <span
                    className="text-[40px] font-medium text-[#1f5bb9] leading-[100%] tracking-[0.03em]"
                    style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
                  >AI</span>
                  <span
                    className="text-[28px] font-medium text-[#1f5bb9] leading-[100%] tracking-[0.03em]"
                    style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                  >検索での</span>
                </div>
                <span
                  className="text-[28px] font-medium text-[#1f5bb9] leading-[100%] tracking-[0.03em]"
                  style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                >表示状況チェック</span>
              </div>
              <p
                className="mt-4 text-[16px] font-medium leading-[180%] tracking-[0.03em] text-[#333333]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >
                AI検索した際の、御社の
                <br />
                「露出有無」と「引用状況」を調査します。
              </p>
            </div>
            <span className="absolute right-10 top-1/2 -translate-y-1/2 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#1f5bb9] text-white">
              →
            </span>
          </div>

        </div>
      </section>

      {/* フッター */}
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
            <a href="/#contact" className="hover:text-[#1f5bb9] transition-colors">お問い合わせ</a>
            <a href="/privacy" className="hover:text-[#1f5bb9] transition-colors">個人情報保護方針</a>
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
    </main>
  );
}
