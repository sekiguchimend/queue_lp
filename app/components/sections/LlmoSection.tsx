import Image from "next/image";

export default function LlmoSection() {
  return (
    <section className="bg-[#f5f6f8] py-20">
      <div className="mx-auto w-full max-w-[1000px] px-8">
        {/* 上部の下向き矢印 */}
        <div className="flex justify-center mb-6">
          <div className="text-[#f6a623] text-3xl">▼</div>
        </div>

        {/* 黄色いバッジ */}
        <div className="flex justify-center">
          <div className="rounded-lg bg-[#f6c543] px-12 py-4 text-center">
            <p className="text-[18px] font-bold text-[#333333]">AI検索最適化</p>
            <p className="text-[14px] font-medium text-[#333333] mt-1">
              Large Language Model Optimization
            </p>
          </div>
        </div>

        {/* タイトル */}
        <p className="mt-10 text-center text-[20px] font-medium text-[#333333]">
          なぜ今
          <span className="text-[32px] font-bold text-[#6b21a8] mx-2">
            LLMO (AI SEO)
          </span>
          なのか !?
        </p>

        {/* 白いボックス */}
        <div className="mt-10 rounded-xl border border-[#c5ccd6] bg-white px-10 py-10 shadow-sm">
          <div className="flex items-center justify-between">
            {/* 左側: 3つの項目 */}
            <div className="space-y-6 text-[15px] text-[#333333]">
              <div className="flex items-start gap-3">
                <Image src="/asset/吹き出し.png" alt="!" width={28} height={28} className="flex-shrink-0" />
                <p className="leading-relaxed">
                  検索は「リンクを見る」から<br />
                  <span className="font-bold">「AIが答える」</span>時代へ
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Image src="/asset/吹き出し.png" alt="!" width={28} height={28} className="flex-shrink-0" />
                <p className="leading-relaxed">
                  比較・推薦・要約は<br />
                  AIが自動で<span className="font-bold">行う</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Image src="/asset/吹き出し.png" alt="!" width={28} height={28} className="flex-shrink-0" />
                <p className="leading-relaxed">
                  従来のSEOだけでは<br />
                  <span className="font-bold">AIの回答文脈に載らない</span>
                </p>
              </div>
            </div>

            {/* 中央: 矢印とテキスト */}
            <div className="flex flex-col items-center mx-8">
              <Image src="/asset/矢印 (1).png" alt="arrow" width={36} height={36} />
              <p className="text-[12px] text-[#666666] mt-2 text-center">
                そこで<br />必要なのが
              </p>
            </div>

            {/* 右側: LLMOとイラスト */}
            <div className="flex flex-col items-center">
              <p className="text-[42px] font-bold text-[#6b21a8]">LLMO</p>
              <p className="text-[14px] font-semibold text-[#f6a623] mt-1">
                (AIに最適化する新しいSEO)
              </p>
              <Image
                src="/asset/アセット 1@2x 1.png"
                alt="LLMO illustration"
                width={200}
                height={140}
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
