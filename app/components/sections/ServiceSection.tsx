import Image from "next/image";

export default function ServiceSection() {
  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="mx-auto w-full max-w-[1200px] px-10">
        <div className="text-center">
          <p
            className="text-[64px] font-medium text-[#3b3b3b] leading-[100%] tracking-normal"
            style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          >Service</p>
          <div className="mx-auto mt-2 h-[2px] w-10 bg-[#1f5bb9]" />
          <p className="mt-2 text-[16px] font-bold text-[#333333]">サービス</p>
        </div>

        <div
          className="relative mt-10 rounded-tl-[100px] rounded-tr-none rounded-br-none rounded-bl-none bg-white p-10 shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
          style={{
            borderWidth: '2px 18px 2px 2px',
            borderStyle: 'solid',
            borderColor: '#29498D'
          }}
        >
          <div className="grid grid-cols-[1.1fr_1fr] items-start gap-8">
            <div>
              <p
                className="text-[40px] font-light leading-[140%] tracking-[0.03em] bg-clip-text text-transparent"
                style={{
                  fontFamily: 'var(--font-lexend), sans-serif',
                  background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >(AI SEO)</p>
              <p
                className="mt-2 text-[128px] font-light leading-[100%] tracking-[0.03em] bg-clip-text text-transparent"
                style={{
                  fontFamily: 'var(--font-lexend), sans-serif',
                  background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                LLMO
              </p>
              <span
                className="mt-3 inline-flex items-center justify-center text-[56px] font-light text-white leading-[100%] tracking-[0.02em]"
                style={{
                  fontFamily: 'var(--font-lexend), sans-serif',
                  width: '367px',
                  height: '88px',
                  borderRadius: '50px',
                  padding: '16px',
                  background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)'
                }}
              >
                umoren.ai
              </span>
              <div
                className="mt-10 text-[22px] font-medium leading-[175%] tracking-normal text-[#333333]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >
                <p className="whitespace-nowrap">AI時代の検索市場で、貴社を「信頼される回答」へ。</p>
                <p className="whitespace-nowrap">生成AIによる推論シェアを「可視化」「実装」し露出を実現します。</p>
              </div>
            </div>
            <div className="flex justify-end">
              <Image
                src="/asset/Mask group.png"
                alt="LLMO service"
                width={400}
                height={280}
                className="h-auto w-[400px]"
              />
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-[12px] bg-[#f4f6fa] px-10 py-10 text-sm text-[#3c3c3c] shadow-[4px_4px_4px_0px_#22222233]">
              <div className="flex items-center justify-between border-b border-[#5E6C84] pb-3">
                <span
                  className="text-[24px] font-bold leading-[180%] text-[#0B60BB]"
                  style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                >サービス</span>
                <span
                  className="text-[24px] font-light leading-[100%] text-[#5E6C84]"
                  style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
                >Service</span>
              </div>
              <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <ul
                  className="space-y-5 text-[18px] font-medium text-[#333333]"
                  style={{ fontFamily: 'var(--font-gothic-a1), sans-serif', lineHeight: '28px' }}
                >
                  {[
                    "AI検索露出診断\n（ChatGPT / Gemini等での現状分析）",
                    "LLMO（AI SEO）戦略設計\n（プロンプト / 構造の最適化）",
                    "コンテンツ・構造の改善支援",
                    "継続的な改善サイクル\n（Before / After）",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Image src="/asset/icon-check.png" alt="✓" width={22} height={22} className="flex-shrink-0" />
                      <span className="whitespace-pre-line">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <Image
                    src="/asset/矢印 (1).png"
                    alt="arrow"
                    width={40}
                    height={40}
                    className="h-auto w-[40px]"
                  />
                </div>
                <div className="flex flex-col items-center gap-6">
                  <div
                    className="flex flex-wrap justify-center gap-4 text-[28px] font-bold text-[#3c3c3c] leading-[180%]"
                    style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                  >
                    {["診断", "設計", "改善", "監視"].map((label) => (
                      <span key={label} className="rounded-[6px] bg-[#FDCA39] px-4 py-1 shadow-[0px_2px_4px_0px_#22222233]">
                        {label}
                      </span>
                    ))}
                  </div>
                  <p
                    className="text-center font-medium leading-[150%] text-[#333333]"
                    style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                  >
                    <span className="text-[32px]">4つの</span>
                    <br />
                    <span className="text-[28px]">明確なサイクル</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[12px] bg-[#f4f6fa] px-10 py-10 text-sm text-[#3c3c3c] shadow-[4px_4px_4px_0px_#22222233]">
              <div className="flex items-center justify-between border-b border-[#5E6C84] pb-3">
                <span
                  className="text-[24px] font-bold leading-[180%] text-[#0B60BB]"
                  style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                >提供価値</span>
                <span
                  className="text-[24px] font-light leading-[100%] text-[#5E6C84]"
                  style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
                >Value Proposition</span>
              </div>
              <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <ul
                  className="space-y-5 text-[18px] font-medium text-[#333333]"
                  style={{ fontFamily: 'var(--font-gothic-a1), sans-serif', lineHeight: '28px' }}
                >
                  {[
                    "ChatGPT / AI検索で自社が\nどう見られているかを可視化",
                    "なぜ回答に出ないのかを\n構造的に特定",
                    "AIに強く引用・推薦される\n状態をつくる",
                    "プロンプト起点での構造設計",
                    "AI検索上の変化を\nBefore / Afterで確認",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Image src="/asset/icon-check.png" alt="✓" width={22} height={22} className="flex-shrink-0" />
                      <span className="whitespace-pre-line">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <Image
                    src="/asset/矢印 (1).png"
                    alt="arrow"
                    width={40}
                    height={40}
                    className="h-auto w-[40px]"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p
                    className="text-[18px] font-medium leading-[200%] text-center text-[#333333]"
                    style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                  >「対策」ではなく</p>
                  <span
                    className="rounded-[8px] bg-[#f6c543] px-4 py-3 text-center text-[32px] font-bold leading-[150%] text-[#3c3c3c]"
                    style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                  >
                    「AIに実際に出てくる」
                    <br />
                    状態を成果に
                  </span>
                  <p
                    className="text-center text-[18px] font-medium leading-[200%] text-[#333333]"
                    style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                  >として効果します</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p
                className="text-[24px] font-bold leading-[180%] text-[#0B60BB]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >導入推奨企業</p>
              <div
                  className="mt-4 grid grid-cols-4 gap-4 text-[18px] font-medium text-white leading-[100%]"
                  style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}
                >
                {[
                  "BtoB SaaS企業",
                  "IT・DX・AI関連企業",
                  "採用活動の高い現場\n(労務・採用・評価など)",
                  "SEOは実施済みだが\nAI検索への対策は未実施の企業",
                ].map((label) => (
                  <div
                    key={label}
                    className="rounded-[4px] bg-[#0B60BB] whitespace-pre-line text-center flex items-center justify-center"
                    style={{ width: '230px', height: '102px', padding: '8px' }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
