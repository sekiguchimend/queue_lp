import Image from "next/image";

export default function ServiceSection() {
  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="mx-auto w-full max-w-[1200px] px-10">
        <div className="text-center">
          <p className="text-[24px] font-semibold text-[#3b3b3b]">Service</p>
          <div className="mx-auto mt-2 h-[2px] w-10 bg-[#1f5bb9]" />
          <p className="mt-2 text-[16px] font-bold text-[#6c6c6c]">サービス</p>
        </div>

        <div className="relative mt-10 rounded-tl-[100px] rounded-tr-none rounded-br-none rounded-bl-none border border-[#1f3f8f] bg-white p-10 shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[10px] bg-[#1f3f8f]" />
          <div className="grid grid-cols-[1.1fr_1fr] items-start gap-8">
            <div>
              <p className="text-[12px] font-semibold text-[#6a7bbf]">(AI SEO)</p>
              <p className="mt-2 text-[40px] font-semibold tracking-wide text-[#1f5bb9]">
                LLMO
              </p>
              <span className="mt-3 inline-flex items-center rounded-full bg-[#6a3ec8] px-6 py-2 text-[16px] font-semibold text-white">
                umoren.ai
              </span>
              <p className="mt-4 text-[12px] leading-relaxed text-[#3c3c3c]">
                AI時代の検索市場で、貴社を「信頼される回答」へ。
                <br />
                生成AIによる推論シェアを「可視化」「実装」し露出を実現します。
              </p>
            </div>
            <div className="flex justify-end">
              <Image
                src="/asset/img.png"
                alt="LLMO service"
                width={260}
                height={180}
                className="h-auto w-[260px]"
              />
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-[12px] bg-[#f4f6fa] px-6 py-6 text-sm text-[#3c3c3c]">
              <div className="flex items-center justify-between border-b border-[#d9dee7] pb-3 text-xs text-[#5f6c85]">
                <span>サービス</span>
                <span>Service</span>
              </div>
              <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <ul className="space-y-2 text-[12px]">
                  {[
                    "AI検索露出診断（ChatGPT / Gemini等での現状分析）",
                    "LLMO（AI SEO）戦略設計（プロンプト / 構造の最適化）",
                    "コンテンツ・構造の改善支援",
                    "継続的な改善サイクル（Before / After）",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#1f5bb9] text-[10px] text-[#1f5bb9]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <Image
                    src="/asset/矢印 (1).png"
                    alt="arrow"
                    width={22}
                    height={22}
                    className="h-auto w-[22px]"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-wrap justify-center gap-2 text-[11px] font-semibold text-[#3c3c3c]">
                    {["診断", "設計", "改善", "監視"].map((label) => (
                      <span key={label} className="rounded-[6px] bg-[#f6c543] px-3 py-1">
                        {label}
                      </span>
                    ))}
                  </div>
                  <p className="text-center text-[11px] text-[#3c3c3c]">
                    4つの
                    <br />
                    明確なサイクル
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[12px] bg-[#f4f6fa] px-6 py-6 text-sm text-[#3c3c3c]">
              <div className="flex items-center justify-between border-b border-[#d9dee7] pb-3 text-xs text-[#5f6c85]">
                <span>提供価値</span>
                <span>Value Proposition</span>
              </div>
              <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <ul className="space-y-2 text-[12px]">
                  {[
                    "ChatGPT / AI検索で自社がどう見られているかを可視化",
                    "なぜ回答に出ないのかを構造的に特定",
                    "AIに強く引用・推薦される状態をつくる",
                    "プロンプト起点での構造設計",
                    "AI検索上の変化をBefore / Afterで確認",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#1f5bb9] text-[10px] text-[#1f5bb9]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <Image
                    src="/asset/矢印 (1).png"
                    alt="arrow"
                    width={22}
                    height={22}
                    className="h-auto w-[22px]"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="rounded-[8px] bg-[#f6c543] px-4 py-3 text-center text-[12px] font-semibold text-[#3c3c3c]">
                    「AIに実際に出てくる」
                    <br />
                    状態を成果に
                  </span>
                  <p className="text-center text-[11px] text-[#3c3c3c]">として効果します</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-[12px] font-semibold text-[#6b6b6b]">導入推奨企業</p>
              <div className="mt-4 grid grid-cols-4 gap-4 text-[11px] text-white">
                {[
                  "BtoB SaaS企業",
                  "IT・DX・AI関連企業",
                  "採用活動の高い現場\n(労務・採用・評価など)",
                  "SEOは実施済みだが\nAI検索への対策は未実施の企業",
                ].map((label) => (
                  <div
                    key={label}
                    className="rounded-[8px] bg-[#1f5bb9] px-3 py-2 whitespace-pre-line"
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
