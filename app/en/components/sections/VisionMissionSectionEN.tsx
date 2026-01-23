export default function VisionMissionSectionEN() {
  return (
    <section
      className="text-white"
      style={{
        backgroundImage: "url('/asset/vision-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto w-full max-w-[800px] px-4 md:px-10 py-12 md:py-20">
        <div className="px-4 md:px-12 py-6 md:py-10">
          <div className="flex flex-col gap-10 md:gap-16">
            {/* Vision */}
            <div className="flex flex-col md:grid md:grid-cols-[200px_1fr] items-start gap-6 md:gap-28">
              <div className="text-right md:text-left self-end md:self-start">
                <h2 className="text-[32px] md:text-[44px] font-semibold">Vision</h2>
                <div className="ml-auto md:ml-0 mt-2 h-[2px] w-[60px] md:w-[88px] bg-[#9b4dff]" />
              </div>
              <div className="text-[14px] md:text-[18px] leading-[200%] text-[#e5e9ff]">
                <p>In an era where AI drives global decisions,</p>
                <p>we create a world where companies&apos;</p>
                <p>true value is understood and chosen.</p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex flex-col md:grid md:grid-cols-[200px_1fr] items-start gap-6 md:gap-28">
              <div className="text-right md:text-left self-end md:self-start">
                <h2 className="text-[32px] md:text-[44px] font-semibold">Mission</h2>
                <div className="ml-auto md:ml-0 mt-2 h-[2px] w-[60px] md:w-[88px] bg-[#9b4dff]" />
              </div>
              <div className="text-[14px] md:text-[18px] leading-[200%] text-[#e5e9ff]">
                <p>In AI search and generative AI,</p>
                <p>we implement technology that ensures</p>
                <p>companies are properly recognized, cited, and recommended.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
