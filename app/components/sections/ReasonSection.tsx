import Image from "next/image";

export default function ReasonSection() {
  return (
    <section className="bg-white py-16 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10 text-center">
        <header className="text-center">
          <h2>
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
          </h2>
          <p className="mt-4 md:mt-6 text-[28px] md:text-[42px] font-medium text-[#2f2f2f] flex flex-col md:flex-row items-center justify-center">
            <span className="reason-highlight-blue">技術起点</span>
            <span className="my-1 md:my-0 mx-2 md:mx-4 text-[#2f2f2f]">×</span>
            <span className="reason-highlight-purple">実装力</span>
          </p>
        </header>

        <div className="mt-10 md:mt-16 grid grid-cols-1 gap-6 md:gap-5 md:grid-cols-2 lg:grid-cols-4 max-w-[280px] md:max-w-none mx-auto">
          {[
            {
              title: "設計力",
              subtitle: "Design capability",
              description: "AI検索の挙動を\n前提にした",
              ball: "/asset/reason-design.png",
            },
            {
              title: "一体設計",
              subtitle: "Integrated design",
              description: "プロンプト・構造化データ・\nコンテンツの",
              ball: "/asset/reason-integrated.png",
            },
            {
              title: "検証",
              subtitle: "Verification",
              description: "「理論」ではなく\nAI上の実測結果で",
              ball: "/asset/reason-verification.png",
            },
            {
              title: "運用体制",
              subtitle: "Utilize the system",
              description: "PoC → 改善 → 再検証を\n高速で回す",
              ball: "/asset/reason-operation.png",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[12px] bg-[#f4f6fa] px-1 md:px-2 py-6 md:py-10 shadow-[0_6px_14px_rgba(0,0,0,0.06)] text-center"
            >
              <p
                className="text-[14px] md:text-[20px] font-medium text-[#4a4a4a] whitespace-pre-line leading-[150%]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif', letterSpacing: '0.03em' }}
              >
                {item.description}
              </p>
              <p
                className="mt-2 md:mt-4 text-[20px] md:text-[28px] font-bold text-[#1f5bb9] leading-[150%]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif', letterSpacing: '0.03em' }}
              >
                {item.title}
              </p>
              <p
                className="mt-1 md:mt-3 text-[12px] md:text-[18px] font-normal text-[#333333] leading-[150%]"
                style={{ fontFamily: 'var(--font-lexend), sans-serif', letterSpacing: '0.03em' }}
              >
                {item.subtitle}
              </p>
              <div className="mt-3 md:mt-8 flex justify-center">
                <Image
                  src={item.ball}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="h-[80px] w-[80px] md:h-[150px] md:w-[150px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
