export default function VisionMissionSection() {
  return (
    <section
      className="text-white"
      style={{
        backgroundImage: "url('/asset/Vision背景.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto w-full max-w-[800px] px-4 md:px-10 py-12 md:py-20">
        <div className="px-4 md:px-12 py-6 md:py-10">
          <div className="flex flex-col gap-10 md:gap-16">
            <div className="flex flex-col md:grid md:grid-cols-[200px_1fr] items-start gap-6 md:gap-28">
              <div>
                <p className="text-[32px] md:text-[44px] font-semibold">Vision</p>
                <div className="mt-2 h-[2px] w-[60px] md:w-[88px] bg-[#9b4dff]" />
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-white">ビジョン</p>
              </div>
              <div className="text-[14px] md:text-[18px] leading-[200%] text-[#e5e9ff]">
                <p>AIが世界の意思決定を担う時代に、</p>
                <p>企業の本当の価値が正しく理解され、</p>
                <p>選ばれる世界をつくる</p>
              </div>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-[200px_1fr] items-start gap-6 md:gap-28">
              <div>
                <p className="text-[32px] md:text-[44px] font-semibold">Mission</p>
                <div className="mt-2 h-[2px] w-[60px] md:w-[88px] bg-[#9b4dff]" />
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-white">ミッション</p>
              </div>
              <div className="text-[14px] md:text-[18px] leading-[200%] text-[#e5e9ff]">
                <p>AI検索・生成AIにおいて、</p>
                <p className="whitespace-nowrap">企業の価値が正しく認識・引用・推薦される状態を</p>
                <p>テクノロジーで実装する</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
