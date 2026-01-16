export default function ReasonSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-[1200px] px-10 text-center">
        <p className="text-[20px] font-semibold text-[#3d6bb8]">Queue が選ばれる理由</p>
        <p className="mt-4 text-[34px] font-semibold text-[#2f2f2f]">
          <span className="reason-highlight-blue">技術起点</span>
          <span className="mx-3 text-[#2f2f2f]">×</span>
          <span className="reason-highlight-purple">実装力</span>
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "設計力",
              subtitle: "Design capability",
              description: "AI検索の挙動を\n前提にした",
              icon: "AI",
            },
            {
              title: "一体設計",
              subtitle: "Integrated design",
              description: "プロンプト・構造化データ・\nコンテンツの",
              icon: "UX",
            },
            {
              title: "検証",
              subtitle: "Verification",
              description: "「理論」ではなく\nAI上の実測結果で",
              icon: "QC",
            },
            {
              title: "運用体制",
              subtitle: "Utilize the system",
              description: "PoC → 改善 → 再検証を\n高速で回す",
              icon: "OPS",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[12px] bg-[#f4f6fa] px-6 py-8 shadow-[0_6px_14px_rgba(0,0,0,0.06)]"
            >
              <p className="text-sm text-[#4a4a4a] whitespace-pre-line">
                {item.description}
              </p>
              <p className="mt-3 text-[18px] font-semibold text-[#1f5bb9]">
                {item.title}
              </p>
              <p className="mt-2 text-xs text-[#7a7a7a]">{item.subtitle}</p>
              <div className="mt-6 flex justify-center">
                <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#1f5bb9] text-[20px] font-semibold text-white">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
