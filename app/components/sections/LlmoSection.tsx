import Image from "next/image";

export default function LlmoSection() {
  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="mx-auto w-full max-w-[1200px] px-10">
        <div className="flex justify-center">
          <div className="rounded-[10px] bg-[#f6c543] px-10 py-3 text-center text-sm font-semibold text-[#3f3f3f]">
            AI検索最適化
            <div className="text-[12px] font-medium text-[#3f3f3f]">
              Large Language Model Optimization
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-[22px] font-semibold text-[#3b3b3b]">
          なぜ今
          <span className="text-[28px] font-bold tracking-wide text-[#3b3b3b]">
            LLMO (AI SEO)
          </span>
          なのか!?
        </p>

        <div className="mt-8 rounded-[10px] border border-[#6b778d] bg-white px-12 py-10 shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-[1fr_40px_1fr] items-center gap-6">
            <div className="space-y-8 text-sm text-[#3f3f3f]">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-6 w-6 rounded-full border-2 border-[#4f67b2] text-center text-xs font-bold text-[#4f67b2]">
                  !
                </div>
                <p>
                  検索は「リンクを見る」から
                  <br />
                  「AIが答える」時代へ
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 h-6 w-6 rounded-full border-2 border-[#4f67b2] text-center text-xs font-bold text-[#4f67b2]">
                  !
                </div>
                <p>
                  比較・推薦・要約は
                  <br />
                  AIが自動で行う
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 h-6 w-6 rounded-full border-2 border-[#4f67b2] text-center text-xs font-bold text-[#4f67b2]">
                  !
                </div>
                <p>
                  従来のSEOだけでは
                  <br />
                  AIの回答文脈に載らない
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="text-[42px] font-semibold text-[#7a869f]">»</div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[28px] font-bold text-[#1f5bb9]">LLMO</p>
                <p className="mt-2 text-sm font-semibold text-[#1f5bb9]">
                  (AIに最適化する新しいSEO)
                </p>
              </div>
              <Image
                src="/asset/img.png"
                alt="LLMO illustration"
                width={220}
                height={150}
                className="h-auto w-[220px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
