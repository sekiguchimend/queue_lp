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
      <div className="mx-auto w-full max-w-[800px] px-10 py-20">
        <div className="px-12 py-10">
          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-[200px_1fr] items-start gap-28">
              <div>
                <p className="text-[44px] font-semibold">Vision</p>
                <div className="mt-2 h-[2px] w-[88px] bg-[#9b4dff]" />
                <p className="mt-4 text-sm text-white">ビジョン</p>
              </div>
              <div className="text-[18px] leading-[200%] text-[#e5e9ff]">
                <p>AIが世界の意思決定を担う時代に、</p>
                <p>企業の本当の価値が正しく理解され、</p>
                <p>選ばれる世界をつくる</p>
              </div>
            </div>

            <div className="grid grid-cols-[200px_1fr] items-start gap-28">
              <div>
                <p className="text-[44px] font-semibold">Mission</p>
                <div className="mt-2 h-[2px] w-[88px] bg-[#9b4dff]" />
                <p className="mt-4 text-sm text-white">ミッション</p>
              </div>
              <div className="text-[18px] leading-[200%] text-[#e5e9ff]">
                <p>AI検索・生成AIにおいて、</p>
                <p>企業の価値が正しく認識・引用・推薦される状態を</p>
                <p>テクノロジーで実装する</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
