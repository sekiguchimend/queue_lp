export default function CtaSection() {
  return (
    <section
      className="cta-bg py-16"
      style={{
        backgroundImage: "url('/asset/背景セット.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto w-full max-w-[1040px] px-8 py-10 grid grid-cols-2 gap-8">
       
          <div className="h-[188px] rounded-[3px] bg-white px-10 py-8 shadow-[0_10px_20px_rgba(0,0,0,0.18)] flex flex-row justify-center items-center">
            <div>
              <div className="flex flex-row items-center gap-2 items-end"> 
                <p className="text-[50px] font-semibold text-[#FDCA39]">LLMO</p>
                <p className="text-[24px] text-[#FDCA39]">無料診断</p>
              </div>
           
            <p className="mt-4 text-[13px] leading-[1.7] text-[#3b3b3b]">
              ChatGPTで御社が
              <br />
              どう評価されているか診断します。
            </p>
            </div>
            <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#FDCA39] text-white">
                →
              </span>
          </div>

          <div className="h-[188px] rounded-[3px] bg-white px-10 py-8 shadow-[0_10px_20px_rgba(0,0,0,0.18)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[24px] font-semibold text-[#1f5bb9]">
                  AI検索
                  <span className="text-[14px]">での</span>
                </p>
                <p className="text-[20px] font-semibold text-[#1f5bb9]">
                  表示状況チェック
                </p>
              </div>
              <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#1f5bb9] text-white">
                →
              </span>
            </div>
            <p className="mt-4 text-[13px] leading-[1.7] text-[#3b3b3b]">
              AI検索した際の、御社の
              <br />
              「露出有無」と「引用状況」を調査します。
            </p>
          </div>
     
      </div>
    </section>
  );
}
