import Image from "next/image";

export default function ServiceSection() {
  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="mx-auto w-full max-w-[1200px] px-10">
        <div className="text-center">
          <p className="text-[24px] font-semibold text-[#3b3b3b]">Service</p>
          <p className="mt-2 text-[12px] text-[#6c6c6c]">サービス</p>
        </div>

        <div className="mt-10 rounded-[24px] border border-[#1f3f8f] bg-white p-10 shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-[1.1fr_1fr] items-start gap-8">
            <div>
              <p className="text-[36px] font-semibold text-[#1f5bb9]">
                LLMO
                <span className="ml-3 text-[14px] font-semibold text-[#6a7bbf]">
                  (AI SEO)
                </span>
              </p>
              <p className="mt-2 text-[20px] font-semibold text-[#6a3ec8]">umoren.ai</p>
              <p className="mt-4 text-sm leading-relaxed text-[#3c3c3c]">
                AI時代の検索市場で、貴社を「信頼される回答」へ。
                <br />
                生成AIによる推論シェアを「可視化」「実装」し露出を実現します。
              </p>
            </div>
            <div className="flex justify-end">
              <Image
                src="/asset/FV右イラスト.png"
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
              <ul className="mt-4 space-y-2 text-[13px]">
                <li>AI検索露出診断（ChatGPT / Gemini等での現状分析）</li>
                <li>LLMO（AI SEO）戦略設計（プロンプト / 構造の最適化）</li>
                <li>コンテンツ・構造の改善支援</li>
                <li>継続的な改善サイクル（Before / After）</li>
              </ul>
              <div className="mt-4 flex items-center justify-end gap-4 text-xs font-semibold text-[#6a3ec8]">
                <span className="rounded-[6px] bg-[#f6c543] px-3 py-1 text-[#3c3c3c]">
                  診断
                </span>
                <span className="rounded-[6px] bg-[#f6c543] px-3 py-1 text-[#3c3c3c]">
                  設計
                </span>
                <span className="rounded-[6px] bg-[#f6c543] px-3 py-1 text-[#3c3c3c]">
                  改善
                </span>
                <span className="rounded-[6px] bg-[#f6c543] px-3 py-1 text-[#3c3c3c]">
                  監視
                </span>
              </div>
            </div>

            <div className="rounded-[12px] bg-[#f4f6fa] px-6 py-6 text-sm text-[#3c3c3c]">
              <div className="flex items-center justify-between border-b border-[#d9dee7] pb-3 text-xs text-[#5f6c85]">
                <span>提供価値</span>
                <span>Value Proposition</span>
              </div>
              <ul className="mt-4 space-y-2 text-[13px]">
                <li>ChatGPT / AI検索で自社がどう見られているかを可視化</li>
                <li>なぜ回答に出ないのかを構造的に特定</li>
                <li>AIに強く引用・推薦される状態をつくる</li>
                <li>プロンプト起点での構造設計</li>
                <li>AI検索上の変化をBefore / Afterで確認</li>
              </ul>
              <div className="mt-4 flex items-center justify-end">
                <span className="rounded-[8px] bg-[#f6c543] px-4 py-2 text-xs font-semibold text-[#3c3c3c]">
                  「AIに実際に出てくる」状態を成果に
                </span>
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
