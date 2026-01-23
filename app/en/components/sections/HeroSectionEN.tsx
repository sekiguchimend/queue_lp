"use client";

import Image from "next/image";
import Header from "@/app/components/Header";

export default function HeroSectionEN() {
  return (
    <section className="relative min-h-screen 2xl:min-h-0 overflow-hidden bg-[#f8f8fa]">
      <Header locale="en" variant="transparent" />

      {/* Right side illustration */}
      <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-[50%] hidden md:block">
        <Image
          src="/asset/hero-illustration.png"
          alt="AI illustration"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      {/* Main content */}
      <div className="relative mx-auto 2xl:mx-0 2xl:ml-[8%] w-full max-w-[1400px] px-4 md:px-8 pb-24 pt-12 lg:px-16">
        {/* Left side text */}
        <div className="relative z-10 pt-[80px] md:pt-[80px] pl-0 md:pl-[16px]">
          {/* Main title block */}
          <div className="w-full md:w-[850px] flex flex-col gap-[16px] md:gap-[28px]">
            {/* Main title line 1 */}
            <h1
              className="text-[28px] md:text-[40px] lg:text-[52px] font-black leading-[110%] tracking-[0.02em] bg-clip-text text-transparent"
              style={{
                fontFamily: 'var(--font-lexend)',
                background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              In the AI Search Era,
            </h1>

            {/* Main title line 2 */}
            <h2
              className="text-[26px] md:text-[38px] lg:text-[50px] font-semibold leading-[110%] tracking-[0.02em] bg-clip-text text-transparent"
              style={{
                fontFamily: 'var(--font-lexend)',
                background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Building Companies<br />That AI Chooses.
            </h2>
          </div>

          {/* Mobile illustration */}
          <div className="relative mt-0 md:hidden">
            <div className="relative ml-auto mr-[-60px] h-[280px] w-[320px] overflow-hidden rounded-full bg-white">
              <Image
                src="/asset/hero-illustration.png"
                alt="AI illustration"
                fill
                className="object-cover object-right"
                priority
              />
            </div>
          </div>

          {/* Description */}
          <div
            className="mt-8 md:mt-12 text-[14px] md:text-[18px] font-semibold leading-[200%] tracking-[0.03em] text-[#333333]"
            style={{ fontFamily: 'var(--font-gothic-a1), sans-serif' }}
          >
            <p>Queue Inc. is a technology company</p>
            <p>
              focused on our{" "}
              <span className="text-[20px] md:text-[28px] font-bold text-[#8120AF]">
                LLMO (AI SEO) service
              </span>
            </p>
            <p>
              <span
                className="text-[36px] md:text-[28px] font-black md:font-semibold text-[#8120AF] leading-[130%] tracking-[0.02em] md:leading-[200%] md:tracking-[0.03em]"
                style={{
                  fontFamily: 'var(--font-gothic-a1), sans-serif'
                }}
              >
                "umoren.ai"
              </span>
            </p>
            <p>supporting AI search visibility and recommendations.</p>
          </div>

          {/* Buttons */}
          <div className="mt-10 md:mt-16 flex flex-col md:flex-row gap-4">
            <a
              href="https://umoren.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[56px] md:h-[72px] w-full md:w-[280px] items-center justify-center rounded-[12px] bg-[linear-gradient(90deg,#0952A1_0%,#3144BD_49.52%,#6D1D93_100%)] px-3 py-6 md:px-4 text-center text-[16px] md:text-[22px] font-medium leading-[100%] tracking-[0.03em] text-white transition-all hover:opacity-90 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            >
              Free AI Diagnosis
            </a>
            <a
              href="#contact"
              className="flex h-[56px] md:h-[72px] w-full md:w-[260px] items-center justify-center rounded-[12px] bg-[linear-gradient(90deg,#0952A1_0%,#3144BD_49.52%,#6D1D93_100%)] px-3 py-6 md:px-12 text-center text-[16px] md:text-[22px] font-medium leading-[100%] tracking-[0.03em] text-white transition-all hover:opacity-90"
              style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
