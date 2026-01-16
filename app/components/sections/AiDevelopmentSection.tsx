import Image from "next/image";

export default function AiDevelopmentSection() {
  return (
    <section className="bg-[#f5f6f8] pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-10">
        <div className="relative rounded-tl-[100px] rounded-tr-none rounded-br-none rounded-bl-none border border-[#1f3f8f] bg-white p-10 shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[10px] bg-[#1f3f8f]" />
          <div className="grid grid-cols-[1.1fr_1fr] items-start gap-10">
            <div>
              <p className="text-[28px] font-semibold text-[#1f5bb9]">AI受託開発</p>
              <p className="mt-3 text-xs text-[#6b6b6b]">
                「AIだから構築」ではなく、業務課題ベースで確実に形にする
              </p>
            </div>
            <div className="flex justify-end">
              <Image
                src="/asset/FV右イラスト.png"
                alt="AI development"
                width={260}
                height={180}
                className="h-auto w-[260px]"
              />
            </div>
          </div>

          <div className="mt-8 rounded-[12px] bg-[#f4f6fa] px-6 py-6">
            <div className="flex items-center justify-between border-b border-[#d9dee7] pb-3 text-xs text-[#5f6c85]">
              <span>サービス</span>
              <span>Service</span>
            </div>
            <div className="mt-4 grid grid-cols-[1fr_auto] items-center gap-4">
              <ul className="space-y-2 text-[13px] text-[#3c3c3c]">
                <li>AIエージェント / 業務自動化 / PoC開発</li>
                <li>LLM・RAG・スクレイピング・自動化など</li>
                <li>AI技術を用いた業務改善提案と、その実装提供</li>
              </ul>
              <div className="rounded-[8px] bg-[#f6c543] px-4 py-3 text-xs font-semibold text-[#3c3c3c]">
                LLMO事業で蓄積した
                <br />
                最新トレンド・実装ノウハウを
                <br />
                活かしたAI開発
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="rounded-[12px] bg-[#f4f6fa] px-6 py-6">
              <div className="flex items-center justify-between border-b border-[#d9dee7] pb-3 text-xs text-[#5f6c85]">
                <span>受託開発例</span>
                <span>development Examples</span>
              </div>
              <ul className="mt-4 space-y-2 text-[13px] text-[#3c3c3c]">
                <li>AIチャットボット開発</li>
                <li>社内AIツール・業務自動化</li>
                <li>AI/WEBアプリ開発</li>
                <li>PoC〜本番開発（社内にAIエンジニアがいなくても安心）</li>
              </ul>
            </div>

            <div className="rounded-[12px] bg-[#f4f6fa] px-6 py-6">
              <div className="flex items-center justify-between border-b border-[#d9dee7] pb-3 text-xs text-[#5f6c85]">
                <span>進行フロー</span>
                <span>Progress Flow</span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[11px] text-white">
                {["1. ヒアリング", "2. 要件定義", "3. 設計", "4. 実装", "5. テスト", "6. 納品"].map(
                  (step) => (
                    <span key={step} className="rounded-[6px] bg-[#6a3ec8] px-2 py-1">
                      {step}
                    </span>
                  )
                )}
              </div>
              <p className="mt-4 text-[12px] text-[#3c3c3c]">
                要件定義から実装・納品まで一気通貫！
                <br />
                通常の受託開発と同じ進め方で安心です。
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[12px] font-semibold text-[#6b6b6b]">導入推奨企業</p>
            <div className="mt-4 grid grid-cols-3 gap-4 text-[11px] text-white">
              {[
                "AIを使った業務効率化・新規事業を\n検討している企業",
                "PoC〜本番開発を\n任せたい企業",
                "社内にAIエンジニアが\nいない企業",
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

        <div className="mt-14 text-center">
          <p className="text-[32px] font-bold text-[#3b3b3b]">
            Achievements & Applications
          </p>
          <p className="mt-3 text-[16px] font-bold text-[#6b6b6b]">実績・活用領域</p>
          <div className="mt-10 flex items-center justify-center gap-10">
            {[
              { number: "1", label: "BtoB\nSaaS" },
              { number: "2", label: "採用\n人材" },
              { number: "3", label: "業務\nSaaS" },
              { number: "4", label: "新規事業\nPoC" },
            ].map((item) => (
              <div
                key={item.number}
                className="flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full border-3 border-[#6a3ec8] text-center text-[14px] font-bold text-[#3b3b3b]"
              >
                <span className="text-[20px] font-bold text-[#1f5bb9]">
                  {item.number}
                </span>
                <span className="whitespace-pre-line font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
