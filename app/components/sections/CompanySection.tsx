export default function CompanySection() {
  return (
    <section
      id="company"
      style={{
        backgroundImage: "url('/asset/会社.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-10 py-20">
        <div className="grid grid-cols-[280px_1fr] items-start gap-10">
          <div className="text-white">
            <p className="text-[48px] font-semibold">Company</p>
            <div className="mt-3 h-[2px] w-[70px] bg-white" />
            <p className="mt-4 text-sm text-[#d9e2ff]">会社概要</p>
          </div>

          <div className="text-sm text-[#3b3b3b]">
            <div className="space-y-4">
              {[
                { label: "会社名", value: "Queue株式会社" },
                { label: "事業内容", value: "LLMO（AI SEO）事業 / AI受託開発" },
                { label: "代表者", value: "谷口 太一" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-4 rounded-[6px] bg-white px-4 py-2.5 shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
                >
                  <span className="min-w-[80px] font-semibold text-[#2f2f2f]">
                    {row.label}
                  </span>
                  <span className="text-[#3b3b3b]">{row.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button className="flex items-center gap-3 rounded-[8px] bg-[#f6c543] px-6 py-3 text-sm font-semibold text-[#3b3b3b] shadow-[0_6px_12px_rgba(0,0,0,0.2)]">
                詳しく見る
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#3b3b3b]">
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
