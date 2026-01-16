import Image from "next/image";

export default function LlmoSection() {
  return (
    <section className="relative bg-[#f5f6f8] py-20">
      {/* セクション境界の上に配置する矢印 */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <Image src="/asset/矢印.png" alt="arrow" width={60} height={60} />
      </div>
      <div className="mx-auto w-full max-w-[1100px] px-8">
        {/* 黄色いバッジ */}
        <div className="flex justify-center">
          <div className="rounded-lg bg-[#FDCA39] px-16 py-6 text-center">
            <p className="text-[#333333]">
              <span
                className="text-[38px] font-medium leading-[100%] tracking-[0.05em]"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >AI</span>
              <span
                className="text-[30px] font-bold leading-[100%] tracking-[0.05em]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >検索最適化</span>
            </p>
            <p
              className="text-[30px] font-light text-[#333333] mt-1 leading-[100%] tracking-normal"
              style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            >
              Large Language Model Optimization
            </p>
          </div>
        </div>

        {/* タイトル */}
        <p
          className="mt-10 text-center text-[28px] font-bold text-[#333333] leading-[150%] tracking-normal"
          style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
        >
          なぜ今
          <span
            className="text-[64px] font-medium text-[#333333] mx-2 leading-[150%] tracking-normal"
            style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          >
            LLMO (AI SEO)
          </span>
          なのか !?
        </p>

        {/* 白いボックス */}
        <div className="mt-10 rounded-[10px] border-[3px] border-[#5E6C84] bg-white px-16 py-10 shadow-sm">
          <div className="flex items-center justify-between">
            {/* 左側: 3つの項目 */}
            <div className="space-y-10 text-[#333333] ml-12">
              <div className="flex items-start gap-3">
                <Image src="/asset/吹き出し.png" alt="!" width={36} height={36} className="flex-shrink-0 mt-1" />
                <p className="text-[20px] font-medium leading-[150%] tracking-normal" style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}>
                  検索は「リンクを見る」から<br />
                  <span className="text-[24px] font-bold">「AIが答える」</span>時代へ
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Image src="/asset/吹き出し.png" alt="!" width={36} height={36} className="flex-shrink-0 mt-1" />
                <p className="text-[20px] font-medium leading-[150%] tracking-normal" style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}>
                  比較・推薦・要約は<br />
                  AIが自動で<span className="text-[24px] font-bold">行う</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Image src="/asset/吹き出し.png" alt="!" width={36} height={36} className="flex-shrink-0 mt-1" />
                <p className="text-[20px] font-medium leading-[150%] tracking-normal" style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}>
                  従来のSEOだけでは<br />
                  <span className="text-[24px] font-bold">AIの回答文脈に載らない</span>
                </p>
              </div>
            </div>

            {/* 中央: 矢印とテキスト */}
            <div className="flex flex-col items-center mx-8">
              <Image src="/asset/矢印 (1).png" alt="arrow" width={50} height={50} />
              <p className="text-[16px] font-bold text-[#333333] mt-3 text-center">
                そこで<br />必要なのが
              </p>
            </div>

            {/* 右側: LLMOとイラスト */}
            <div className="flex flex-col items-start">
              <p
                className="text-[64px] font-bold bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >LLMO</p>
              <p
                className="text-[26px] font-bold mt-1 leading-[100%] tracking-normal bg-clip-text text-transparent"
                style={{
                  fontFamily: 'var(--font-zen-kaku), sans-serif',
                  background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                (AIに最適化する新しいSEO)
              </p>
              <Image
                src="/asset/img.png"
                alt="LLMO illustration"
                width={300}
                height={210}
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
