import Image from "next/image";

export default function AiDevelopmentSectionEN() {
  return (
    <section className="bg-[#f5f6f8] pb-10 md:pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-10">
        <div className="relative rounded-tl-[50px] md:rounded-tl-[100px] rounded-tr-none rounded-br-none rounded-bl-none border border-[#1f3f8f] bg-white p-4 md:p-10 shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[6px] md:w-[10px] bg-[#1f3f8f]" />
          <div className="flex flex-col md:grid md:grid-cols-[1.1fr_1fr] items-center md:items-start gap-6 md:gap-10">
            <div className="text-center md:text-left">
              <h2 className="flex flex-col md:block items-center md:items-start">
                <span
                  className="text-[60px] md:text-[110px] font-light leading-[120%] tracking-[0.03em] bg-clip-text text-transparent"
                  style={{ fontFamily: 'var(--font-lexend), sans-serif', background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >AI</span>
                <span
                  className="text-[28px] md:text-[48px] font-medium leading-[120%] tracking-[0.03em] bg-clip-text text-transparent"
                  style={{ fontFamily: 'var(--font-lexend), sans-serif', background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >Development</span>
              </h2>
              <p
                className="mt-6 md:mt-10 text-[14px] md:text-[20px] font-medium leading-[175%] text-[#333333] text-left md:text-left"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >
                Not &quot;building because it&apos;s AI&quot; – we deliver solutions based on real business challenges.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/asset/ai-development-illustration.png"
                alt="AI development"
                width={290}
                height={207}
                className="h-auto w-[200px] md:w-[290px] rounded-[8px]"
              />
            </div>
          </div>

          <div className="mt-6 md:mt-8 rounded-[12px] bg-[#f4f6fa] px-4 md:px-10 py-6 md:py-10 shadow-[4px_4px_4px_0px_#22222233]">
            <div className="flex items-center justify-between border-b border-[#5E6C84] pb-3">
              <span
                className="text-[18px] md:text-[24px] font-bold leading-[180%] text-[#0B60BB]"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >Services</span>
              <span
                className="text-[16px] md:text-[24px] font-light leading-[100%] text-[#5E6C84]"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >What We Build</span>
            </div>
            <div className="mt-5 flex flex-col md:flex-row md:justify-between items-center gap-6 md:gap-16">
              <ul
                className="space-y-4 md:space-y-5 text-[14px] md:text-[18px] font-medium text-[#333333]"
                style={{ fontFamily: 'var(--font-gothic-a1), sans-serif', lineHeight: '28px' }}
              >
                <li className="flex items-center gap-2">
                  <Image src="/asset/check-icon.png" alt="✓" width={22} height={22} className="flex-shrink-0 w-[18px] md:w-[22px] h-auto" />
                  <span>AI Agents / Business Automation / PoC</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/asset/check-icon.png" alt="✓" width={22} height={22} className="flex-shrink-0 w-[18px] md:w-[22px] h-auto" />
                  <span>LLM, RAG, Scraping, Automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/asset/check-icon.png" alt="✓" width={22} height={22} className="flex-shrink-0 w-[18px] md:w-[22px] h-auto" />
                  <span>AI-powered business improvement proposals</span>
                </li>
              </ul>
              <Image
                src="/asset/arrow-down.png"
                alt="→"
                width={40}
                height={40}
                className="md:hidden w-[30px] h-auto"
              />
              <Image
                src="/asset/arrow-right.png"
                alt="→"
                width={40}
                height={40}
                className="hidden md:block w-[40px] h-auto"
              />
              <div
                className="rounded-[8px] bg-[#FDCA39] px-3 md:px-4 py-2 md:py-3 text-center md:text-left text-[14px] md:text-[18px] font-bold leading-[200%] text-[#3c3c3c] shadow-[0px_2px_4px_0px_#22222233]"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >
                AI development powered by
                <br />
                our LLMO expertise and
                <br />
                cutting-edge know-how
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-[12px] bg-[#f4f6fa] px-4 md:px-10 py-6 md:py-10 shadow-[4px_4px_4px_0px_#22222233]">
              <div className="flex items-center justify-between border-b border-[#5E6C84] pb-3">
                <span
                  className="text-[18px] md:text-[24px] font-bold leading-[180%] text-[#0B60BB]"
                  style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
                >Examples</span>
                <span
                  className="text-[12px] md:text-[16px] font-light leading-[100%] text-[#5E6C84]"
                  style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
                >What We&apos;ve Built</span>
              </div>
              <ul
                className="mt-4 md:mt-5 space-y-4 md:space-y-5 text-[14px] md:text-[18px] font-medium text-[#333333]"
                style={{ fontFamily: 'var(--font-gothic-a1), sans-serif', lineHeight: '28px' }}
              >
                <li className="flex items-center gap-2">
                  <Image src="/asset/check-icon.png" alt="✓" width={22} height={22} className="flex-shrink-0 w-[18px] md:w-[22px] h-auto" />
                  <span>AI Chatbot Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/asset/check-icon.png" alt="✓" width={22} height={22} className="flex-shrink-0 w-[18px] md:w-[22px] h-auto" />
                  <span>Internal AI Tools & Automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/asset/check-icon.png" alt="✓" width={22} height={22} className="flex-shrink-0 w-[18px] md:w-[22px] h-auto" />
                  <span>AI/Web Application Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/asset/check-icon.png" alt="✓" width={22} height={22} className="flex-shrink-0 w-[18px] md:w-[22px] h-auto" />
                  <span className="whitespace-pre-line">PoC to Production<br />(No in-house AI engineers needed)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[12px] bg-[#f4f6fa] px-4 md:px-10 py-6 md:py-10 shadow-[4px_4px_4px_0px_#22222233]">
              <div className="flex items-center justify-between border-b border-[#5E6C84] pb-3">
                <span
                  className="text-[18px] md:text-[24px] font-bold leading-[180%] text-[#0B60BB]"
                  style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
                >Process</span>
                <span
                  className="text-[12px] md:text-[16px] font-light leading-[100%] text-[#5E6C84]"
                  style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
                >How We Work</span>
              </div>
              <div
                className="mt-4 md:mt-5 flex flex-col md:flex-row md:flex-wrap items-center gap-2 text-[14px] md:text-[16px] font-medium text-white max-w-[200px] md:max-w-none mx-auto md:mx-0"
                style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}
              >
                {["1. Discovery", "2. Requirements", "3. Design", "4. Build", "5. Test", "6. Deliver"].map(
                  (step, index) => (
                    <div key={step} className="flex flex-col md:flex-row items-center gap-1 md:gap-2 w-full md:w-auto">
                      <span
                        className="flex items-center justify-center bg-[#5E6C84] px-6 md:px-3 py-3 md:py-2 w-full md:w-auto rounded-[4px]"
                      >
                        {step}
                      </span>
                      {index < 5 && <Image src="/asset/arrow-small.png" alt="→" width={8} height={8} className="w-[12px] md:w-[8px] h-auto rotate-90 md:rotate-0 my-1 md:my-0" />}
                    </div>
                  )
                )}
              </div>
              <p
                className="mt-6 md:mt-10 text-[16px] md:text-[20px] leading-[180%] text-[#333333]"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >
                <span className="font-bold">End-to-end from requirements to delivery!</span>
                <br />
                <span className="font-medium"><span className="text-[#0B60BB]">Same reliable process</span> as traditional development.</span>
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-8 text-center">
            <p
              className="text-[18px] md:text-[24px] font-bold leading-[180%] text-[#0B60BB]"
              style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            >Recommended For</p>
            <div
              className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-[14px] md:text-[18px] font-medium text-white leading-[180%]"
              style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}
            >
              {[
                "Companies exploring AI for\nefficiency or new ventures",
                "Companies needing\nPoC to production support",
                "Companies without\nin-house AI engineers",
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-[4px] bg-[#0B60BB] whitespace-pre-line text-center flex items-center justify-center p-4 min-h-[100px] md:min-h-[140px]"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-14 text-center">
          <p className="text-[24px] md:text-[32px] font-bold text-[#3b3b3b]">
            <span className="md:inline">Achievements</span>
            <br className="md:hidden" />
            <span className="md:inline"> &</span>
            <br className="md:hidden" />
            <span className="md:inline"> Applications</span>
          </p>
          <div className="mx-auto mt-2" style={{ width: '80px', height: '3px', background: '#0B60BB' }} />
          <p className="mt-3 text-[14px] md:text-[16px] font-bold text-[#333333]">Track Record</p>
          <div className="mt-6 md:mt-10 grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-4 md:gap-10">
            {[
              { number: "1", label: "B2B\nSaaS" },
              { number: "2", label: "HR &\nRecruiting" },
              { number: "3", label: "Business\nSaaS" },
              { number: "4", label: "New\nVentures" },
            ].map((item) => (
              <div
                key={item.number}
                className="flex h-[150px] w-[150px] md:h-[250px] md:w-[250px] flex-col items-center justify-center rounded-full text-center text-[20px] md:text-[32px] font-normal text-[#3b3b3b] leading-[150%] gap-1 md:gap-2 mx-auto"
                style={{
                  fontFamily: 'var(--font-lexend), sans-serif',
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%) border-box',
                  border: '3px solid transparent'
                }}
              >
                <span className="text-[20px] md:text-[32px] font-normal text-[#1f5bb9]">
                  {item.number}
                </span>
                <span className="whitespace-pre-line font-normal text-[16px] md:text-[32px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
