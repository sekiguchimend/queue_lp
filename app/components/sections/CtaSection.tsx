export default function CtaSection() {
  return (
    <section
      className="cta-bg py-20"
      style={{
        backgroundImage: "url('/asset/背景セット.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-10">
        <div className="grid grid-cols-2 gap-10">
          <div className="h-[200px] rounded-[12px] bg-white px-10 py-9 shadow-[0_12px_24px_rgba(0,0,0,0.18)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[32px] font-semibold text-[#f3b61f]">LLMO</p>
                <p className="text-[18px] font-semibold text-[#f3b61f]">無料診断</p>
              </div>
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#f3b61f] text-white">
                →
              </span>
            </div>
            <p className="mt-4 text-[14px] leading-[1.6] text-[#3b3b3b]">
              ChatGPTで御社が
              <br />
              どう評価されているか診断します。
            </p>
          </div>

          <div className="h-[200px] rounded-[12px] bg-white px-10 py-9 shadow-[0_12px_24px_rgba(0,0,0,0.18)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[26px] font-semibold text-[#1f5bb9]">
                  AI検索
                  <span className="text-[16px]">での</span>
                </p>
                <p className="text-[20px] font-semibold text-[#1f5bb9]">
                  表示状況チェック
                </p>
              </div>
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#1f5bb9] text-white">
                →
              </span>
            </div>
            <p className="mt-4 text-[14px] leading-[1.6] text-[#3b3b3b]">
              AI検索した際の、御社の
              <br />
              「露出有無」と「引用状況」を調査します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
