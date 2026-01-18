import Image from "next/image";

export default function AiDevelopmentSection() {
  return (
    <section className="bg-[#f5f6f8] pb-10 md:pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-10">
        <div className="relative rounded-tl-[50px] md:rounded-tl-[100px] rounded-tr-none rounded-br-none rounded-bl-none border border-[#1f3f8f] bg-white p-4 md:p-10 shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[6px] md:w-[10px] bg-[#1f3f8f]" />
          <div className="flex flex-col md:grid md:grid-cols-[1.1fr_1fr] items-center md:items-start gap-6 md:gap-10">
            <div className="text-center md:text-left">
              <p className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                <span
                  className="text-[60px] md:text-[110px] font-light leading-[120%] tracking-[0.03em]"
                  style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
                >AI</span>
                <span
                  className="text-[28px] md:text-[48px] font-medium leading-[120%] tracking-[0.03em]"
                  style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                >受託開発</span>
              </p>
              <p
                className="mt-6 md:mt-10 text-[14px] md:text-[20px] font-medium leading-[175%] text-[#333333]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >
                「AIだから構築」ではなく、業務課題ベースで確実に形にする
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/asset/FV右イラスト.png"
                alt="AI development"
                width={290}
                height={207}
                className="h-auto w-[200px] md:w-[290px] rounded-[8px]"
              />
            </div>
          </div>

          <div className="mt-6 md:mt-8 rounded-[12px] bg-[#f4f6fa] px-4 md:px-10 py-6 md:py-10 shadow-[4px_4px_4px_0px_#22222233]">
            <div className="flex items-center justify-between border-b border-[#5E6C84] pb-3">
              <span
                className="text-[18px] md:text-[24px] font-bold leading-[180%] text-[#0B60BB]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >サービス</span>
              <span
                className="text-[16px] md:text-[24px] font-light leading-[100%] text-[#5E6C84]"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >Service</span>
            </div>
            <div className="mt-5 flex flex-col md:flex-row md:justify-between items-center gap-6 md:gap-16">
              <ul
                className="space-y-4 md:space-y-5 text-[14px] md:text-[18px] font-medium text-[#333333]"
                style={{ fontFamily: 'var(--font-gothic-a1), sans-serif', lineHeight: '28px' }}
              >
                <li className="flex items-center gap-2">
                  <Image src="/asset/icon-check.png" alt="✓" width={22} height={22} className="flex-shrink-0 w-[18px] md:w-[22px] h-auto" />
                  <span>AIエージェント / 業務自動化 / PoC開発</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/asset/icon-check.png" alt="✓" width={22} height={22} className="flex-shrink-0 w-[18px] md:w-[22px] h-auto" />
                  <span>LLM・RAG・スクレイピング・自動化など</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/asset/icon-check.png" alt="✓" width={22} height={22} className="flex-shrink-0 w-[18px] md:w-[22px] h-auto" />
                  <span>AI技術を用いた業務改善提案と、その実装提供</span>
                </li>
              </ul>
              <Image
                src="/asset/矢印 (1).png"
                alt="→"
                width={40}
                height={40}
                className="hidden md:block w-[30px] md:w-[40px] h-auto"
              />
              <div
                className="rounded-[8px] bg-[#FDCA39] px-3 md:px-4 py-2 md:py-3 text-left text-[14px] md:text-[18px] font-bold leading-[200%] text-[#3c3c3c] shadow-[0px_2px_4px_0px_#22222233]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >
                LLMO事業で蓄積した
                <br />
                最新トレンド・実装ノウハウを
                <br />
                活かしたAI開発
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-[12px] bg-[#f4f6fa] px-4 md:px-10 py-6 md:py-10 shadow-[4px_4px_4px_0px_#22222233]">
              <div className="flex items-center justify-between border-b border-[#5E6C84] pb-3">
                <span
                  className="text-[18px] md:text-[24px] font-bold leading-[180%] text-[#0B60BB]"
                  style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                >受託開発例</span>
                <span
                  className="text-[12px] md:text-[16px] font-light leading-[100%] text-[#5E6C84]"
                  style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
                >Development Examples</span>
              </div>
              <ul
                className="mt-4 md:mt-5 space-y-4 md:space-y-5 text-[14px] md:text-[18px] font-medium text-[#333333]"
                style={{ fontFamily: 'var(--font-gothic-a1), sans-serif', lineHeight: '28px' }}
              >
                <li className="flex items-center gap-2">
                  <Image src="/asset/icon-check.png" alt="✓" width={22} height={22} className="flex-shrink-0 w-[18px] md:w-[22px] h-auto" />
                  <span>AIチャットボット開発</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/asset/icon-check.png" alt="✓" width={22} height={22} className="flex-shrink-0 w-[18px] md:w-[22px] h-auto" />
                  <span>社内AIツール・業務自動化</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/asset/icon-check.png" alt="✓" width={22} height={22} className="flex-shrink-0 w-[18px] md:w-[22px] h-auto" />
                  <span>AI/WEBアプリ開発</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/asset/icon-check.png" alt="✓" width={22} height={22} className="flex-shrink-0 w-[18px] md:w-[22px] h-auto" />
                  <span className="whitespace-pre-line">PoC〜本番開発<br />（社内にAIエンジニアがいなくても安心）</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[12px] bg-[#f4f6fa] px-4 md:px-10 py-6 md:py-10 shadow-[4px_4px_4px_0px_#22222233]">
              <div className="flex items-center justify-between border-b border-[#5E6C84] pb-3">
                <span
                  className="text-[18px] md:text-[24px] font-bold leading-[180%] text-[#0B60BB]"
                  style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                >進行フロー</span>
                <span
                  className="text-[12px] md:text-[16px] font-light leading-[100%] text-[#5E6C84]"
                  style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
                >Progress Flow</span>
              </div>
              <div
                className="mt-4 md:mt-5 flex flex-wrap items-center gap-2 text-[12px] md:text-[16px] font-medium text-white"
                style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}
              >
                {["1. ヒアリング", "2. 要件定義", "3. 設計", "4. 実装", "5. テスト", "6. 納品"].map(
                  (step, index) => (
                    <div key={step} className="flex items-center gap-1 md:gap-2">
                      <span
                        className="flex items-center justify-center bg-[#5E6C84] px-2 md:px-3 py-1 md:py-2"
                      >
                        {step}
                      </span>
                      {index < 5 && <Image src="/asset/Vector.png" alt="→" width={8} height={8} className="w-[6px] md:w-[8px] h-auto" />}
                    </div>
                  )
                )}
              </div>
              <p
                className="mt-6 md:mt-10 text-[16px] md:text-[20px] leading-[180%] text-[#333333]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >
                <span className="font-bold">要件定義から実装・納品まで一気通貫！</span>
                <br />
                <span className="font-medium"><span className="text-[#0B60BB]">通常の受託開発と同じ進め方で安心</span>です。</span>
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-8 text-center">
            <p
              className="text-[18px] md:text-[24px] font-bold leading-[180%] text-[#0B60BB]"
              style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
            >導入推奨企業</p>
            <div
              className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-[14px] md:text-[18px] font-medium text-white leading-[180%]"
              style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}
            >
              {[
                "AIを使った業務効率化・新規事業を\n検討している企業",
                "PoC〜本番開発を\n任せたい企業",
                "社内にAIエンジニアが\nいない企業",
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-[4px] bg-[#0B60BB] whitespace-pre-line text-center flex items-center justify-center p-4 min-h-[100px] md:min-h-[140px]"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-14 text-center">
          <p className="text-[24px] md:text-[32px] font-bold text-[#3b3b3b]">
            Achievements & Applications
          </p>
          <div className="mx-auto mt-2" style={{ width: '80px', height: '3px', background: '#0B60BB' }} />
          <p className="mt-3 text-[14px] md:text-[16px] font-bold text-[#333333]">実績・活用領域</p>
          <div className="mt-6 md:mt-10 grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-4 md:gap-10">
            {[
              { number: "1", label: "BtoB\nSaaS" },
              { number: "2", label: "採用\n人材" },
              { number: "3", label: "業務\nSaaS" },
              { number: "4", label: "新規事業\nPoC" },
            ].map((item) => (
              <div
                key={item.number}
                className="flex h-[150px] w-[150px] md:h-[250px] md:w-[250px] flex-col items-center justify-center rounded-full text-center text-[20px] md:text-[32px] font-normal text-[#3b3b3b] leading-[150%] gap-1 md:gap-2 mx-auto"
                style={{
                  fontFamily: 'var(--font-lexend), sans-serif',
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%) border-box',
                  border: '3px solid transparent'
                }}
              >
                <span className="text-[20px] md:text-[32px] font-normal text-[#1f5bb9]">
                  {item.number}
                </span>
                <span className="whitespace-pre-line font-normal text-[16px] md:text-[32px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
