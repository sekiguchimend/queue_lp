export default function CompanySection() {
  return (
    <section
      id="company"
      style={{
        backgroundImage: "url('/asset/company-section-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-10 py-16 md:py-28">
        {/* モバイル用 */}
        <div className="md:hidden flex flex-col items-center">
          <p
            className="text-[40px] font-medium leading-[100%] tracking-normal text-white"
            style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          >Company</p>
          <div className="mt-4 h-[2px] w-[50px] bg-white" />
          <p
            className="mt-4 text-[16px] font-medium leading-[100%] tracking-[0.03em] text-white"
            style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
          >会社概要</p>

          <div className="mt-8 space-y-4 w-full">
            {[
              { label: "会社名", value: "Queue株式会社" },
              { label: "事業内容", value: "LLMO（AI SEO）事業 / AI受託開発" },
              { label: "代表者", value: "谷口 太一" },
            ].map((row) => (
              <div
                key={row.label}
                className="rounded-[4px] bg-white px-4 py-4 shadow-[0_2px_6px_rgba(0,0,0,0.12)] w-full"
              >
                <p className="font-semibold text-[#2f2f2f] text-[14px]">{row.label}</p>
                <p className="font-medium text-[#3b3b3b] text-[14px] mt-1">{row.value}</p>
              </div>
            ))}
          </div>

          <button
            className="mt-8 relative flex items-center justify-center bg-[#f6c543] px-10 py-4 text-sm font-semibold text-[#3b3b3b] shadow-[0_6px_12px_rgba(0,0,0,0.2)] rounded-[5px]"
          >
            詳しく見る
            <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#3b3b3b]">
              →
            </span>
          </button>
        </div>

        {/* デスクトップ用 */}
        <div className="hidden md:flex flex-row items-start justify-between gap-20">
          <div className="text-white">
            <p
              className="text-[64px] font-medium leading-[100%] tracking-normal"
              style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            >Company</p>
            <div className="mt-3 h-[2px] w-[70px] bg-white" />
            <p
              className="mt-4 text-[20px] font-medium leading-[100%] tracking-[0.03em] text-white"
              style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
            >会社概要</p>
          </div>

          <div className="text-sm text-[#3b3b3b] flex flex-col items-end">
            <div className="space-y-4">
              {[
                { label: "会社名", value: "Queue株式会社" },
                { label: "事業内容", value: "LLMO（AI SEO）事業 / AI受託開発" },
                { label: "代表者", value: "谷口 太一" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-4 rounded-[4px] bg-white px-4 py-2 shadow-[0_2px_6px_rgba(0,0,0,0.12)] w-[621px]"
                >
                  <span className="min-w-[80px] font-semibold text-[#2f2f2f] text-sm">
                    {row.label}
                  </span>
                  <span className="font-medium text-[#3b3b3b] text-sm">{row.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end w-full">
              <button
                className="relative flex items-center justify-center bg-[#f6c543] px-14 py-4 text-sm font-semibold text-[#3b3b3b] shadow-[0_6px_12px_rgba(0,0,0,0.2)]"
                style={{ borderRadius: '5px' }}
              >
                詳しく見る
                <span className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#3b3b3b]">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
