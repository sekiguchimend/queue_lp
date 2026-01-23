import Image from "next/image";

export default function LlmoSectionEN() {
  return (
    <section className="relative bg-[#f5f6f8] py-12 md:py-20">
      {/* Arrow positioned above section boundary */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <Image src="/asset/arrow-down.png" alt="arrow" width={60} height={60} className="w-[40px] md:w-[60px] h-auto" />
      </div>
      <div className="mx-auto w-full max-w-[1100px] px-4 md:px-8">
        {/* Yellow badge */}
        <div className="flex justify-center">
          <div className="rounded-lg bg-[#FDCA39] px-6 md:px-16 py-4 md:py-6 text-center">
            <p className="text-[#333333]">
              <span
                className="text-[24px] md:text-[38px] font-medium leading-[100%] tracking-[0.05em]"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >AI</span>
              <span
                className="text-[20px] md:text-[30px] font-bold leading-[100%] tracking-[0.05em]"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              > Search Optimization</span>
            </p>
            <p
              className="text-[14px] md:text-[30px] font-light text-[#333333] mt-1 leading-[100%] tracking-normal"
              style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            >
              Large Language Model Optimization
            </p>
          </div>
        </div>

        {/* Title */}
        <h2
          className="mt-6 md:mt-10 text-center font-bold text-[#333333] leading-[150%] tracking-normal"
          style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
        >
          <span className="text-[18px] md:text-[28px]">Why </span>
          <span
            className="text-[32px] md:text-[64px] font-medium text-[#333333] mx-1 md:mx-2 leading-[150%] tracking-normal block md:inline"
            style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          >
            LLMO (AI SEO)
          </span>
          <span className="text-[18px] md:text-[28px]"> Now?</span>
        </h2>

        {/* White box */}
        <div className="mt-6 md:mt-10 rounded-[10px] border-[3px] border-[#5E6C84] bg-white px-4 md:px-16 py-6 md:py-10 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8">
            {/* Left side: 3 items */}
            <div className="space-y-6 md:space-y-10 text-[#333333] ml-0 lg:ml-12">
              <div className="flex items-start gap-3">
                <Image src="/asset/exclamation-icon.png" alt="!" width={36} height={36} className="flex-shrink-0 mt-1 w-[28px] md:w-[36px] h-auto" />
                <p className="text-[16px] md:text-[20px] font-medium leading-[150%] tracking-normal" style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}>
                  Search shifted from &quot;clicking links&quot;<br />
                  <span className="text-[18px] md:text-[24px] font-bold">to &quot;AI answers&quot;</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Image src="/asset/exclamation-icon.png" alt="!" width={36} height={36} className="flex-shrink-0 mt-1 w-[28px] md:w-[36px] h-auto" />
                <p className="text-[16px] md:text-[20px] font-medium leading-[150%] tracking-normal" style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}>
                  Comparisons and recommendations<br />
                  are now <span className="text-[18px] md:text-[24px] font-bold">automated by AI</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Image src="/asset/exclamation-icon.png" alt="!" width={36} height={36} className="flex-shrink-0 mt-1 w-[28px] md:w-[36px] h-auto" />
                <p className="text-[16px] md:text-[20px] font-medium leading-[150%] tracking-normal" style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}>
                  Traditional SEO alone<br />
                  <span className="text-[18px] md:text-[24px] font-bold">won&apos;t get you in AI responses</span>
                </p>
              </div>
            </div>

            {/* Center: Arrow and text */}
            <div className="flex flex-col items-center mx-4 md:mx-8">
              <Image src="/asset/arrow-down.png" alt="arrow" width={50} height={50} className="w-[40px] md:w-[50px] h-auto md:hidden" />
              <Image src="/asset/arrow-right.png" alt="arrow" width={50} height={50} className="hidden md:block w-[50px] h-auto" />
              <p className="text-[14px] md:text-[16px] font-bold text-[#333333] mt-2 md:mt-3 text-center whitespace-nowrap md:whitespace-normal">
                That&apos;s why<br className="hidden md:block" />you need
              </p>
            </div>

            {/* Right side: LLMO and illustration */}
            <div className="flex flex-col items-center lg:items-start">
              <p
                className="text-[40px] md:text-[64px] font-bold bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >LLMO</p>
              <p
                className="text-[16px] md:text-[26px] font-bold mt-1 leading-[100%] tracking-normal bg-clip-text text-transparent text-center lg:text-left"
                style={{
                  fontFamily: 'var(--font-lexend), sans-serif',
                  background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                (New SEO for AI Optimization)
              </p>
              <Image
                src="/asset/llmo-illustration.png"
                alt="LLMO illustration"
                width={300}
                height={210}
                className="mt-4 w-[200px] md:w-[300px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
