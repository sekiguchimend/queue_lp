import Image from "next/image";

export default function ReasonSection() {
  return (
    <section className="bg-white py-16 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10 text-center">
        <p className="text-center">
          <span
            className="text-[28px] md:text-[40px] font-medium bg-clip-text text-transparent"
            style={{
              fontFamily: 'var(--font-lexend), sans-serif',
              background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >Queue</span>
          <span
            className="text-[18px] md:text-[24px] font-bold text-[#333333]"
            style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
          > が選ばれる理由</span>
        </p>
        <p className="mt-4 md:mt-6 text-[28px] md:text-[42px] font-medium text-[#2f2f2f]">
          <span className="reason-highlight-blue">技術起点</span>
          <span className="mx-2 md:mx-4 text-[#2f2f2f]">×</span>
          <span className="reason-highlight-purple">実装力</span>
        </p>

        <div className="mt-10 md:mt-16 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {[
            {
              title: "設計力",
              subtitle: "Design capability",
              description: "AI検索の挙動を\n前提にした",
              ball: "/asset/ball1.png",
            },
            {
              title: "一体設計",
              subtitle: "Integrated design",
              description: "プロンプト・構造化データ・\nコンテンツの",
              ball: "/asset/ball2.png",
            },
            {
              title: "検証",
              subtitle: "Verification",
              description: "「理論」ではなく\nAI上の実測結果で",
              ball: "/asset/ball3.png",
            },
            {
              title: "運用体制",
              subtitle: "Utilize the system",
              description: "PoC → 改善 → 再検証を\n高速で回す",
              ball: "/asset/ball4.png",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[12px] bg-[#f4f6fa] px-3 md:px-4 py-6 md:py-10 shadow-[0_6px_14px_rgba(0,0,0,0.06)]"
            >
              <p
                className="text-[14px] md:text-[20px] font-medium text-[#4a4a4a] whitespace-pre-line leading-[150%] tracking-[0.03em]"
                style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}
              >
                {item.description}
              </p>
              <p className="mt-3 md:mt-4 text-[18px] md:text-[22px] font-semibold text-[#1f5bb9]">
                {item.title}
              </p>
              <p className="mt-2 md:mt-3 text-xs md:text-sm text-[#333333]">{item.subtitle}</p>
              <div className="mt-4 md:mt-8 flex justify-center">
                <Image
                  src={item.ball}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
