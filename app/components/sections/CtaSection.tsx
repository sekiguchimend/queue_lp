export default function CtaSection() {
  return (
    <section
      className="cta-bg py-10 md:py-16"
      style={{
        backgroundImage: "url('/asset/背景セット.png')",
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
  );
}
