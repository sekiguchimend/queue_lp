import Image from "next/image";

export default function ProblemSectionEN() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #c8cfe0 0%, #b8c4d8 100%)' }}
    >
      {/* Background image - mobile */}
      <img
        src="/asset/problem-background.png"
        alt=""
        className="absolute top-0 left-1/2 -translate-x-1/2 md:hidden w-full"
        style={{ transformOrigin: 'top center', transform: 'scale(2.5)' }}
      />
      {/* Background image - desktop */}
      <img
        src="/asset/problem-background.png"
        alt=""
        className="absolute top-0 left-0 hidden md:block w-full h-auto"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 md:px-10 py-12 md:py-20">
        <div className="text-center text-[#3a3a3a]">
          <h2 className="text-[28px] md:text-[28px] font-bold">Problem</h2>
          <p className="mt-2 md:mt-3 text-[14px] md:text-sm font-medium text-[#4a4a4a]">Do you face these challenges?</p>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden relative mt-6 h-[600px]">
          {/* Top left */}
          <div className="absolute left-[-10px] top-0 h-[150px] w-[200px]">
            <Image src="/asset/cloud-white.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-[12px] font-semibold text-[#434343] leading-[160%]">
              Your company doesn&apos;t
              <br />
              appear in ChatGPT
              <br />
              search results
            </p>
          </div>

          {/* Top right */}
          <div className="absolute right-[-10px] top-[100px] h-[140px] w-[190px]">
            <Image src="/asset/cloud-blue-1.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-[12px] font-semibold text-[#434343] leading-[160%]">
              Unsure how AI
              <br />
              search perceives
              <br />
              your company
            </p>
          </div>

          {/* Middle left */}
          <div className="absolute left-[-10px] top-[200px] h-[150px] w-[200px]">
            <Image src="/asset/cloud-blue-2.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-[12px] font-semibold text-[#434343] leading-[160%]">
              Competitors are
              <br />
              being recommended
              <br />
              by AI instead
            </p>
          </div>

          {/* Bottom right */}
          <div className="absolute right-[-10px] top-[300px] h-[140px] w-[190px]">
            <Image src="/asset/cloud-white.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-[12px] font-semibold text-[#434343] leading-[160%]">
              Unsure what to do
              <br />
              after SEO
            </p>
          </div>

          {/* Worried person illustration */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] w-[280px]">
            <Image
              src="/asset/worried-person.png"
              alt="Worried person"
              width={280}
              height={260}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block relative mx-auto mt-10 h-[420px] w-full max-w-[1000px]">
          <Image
            src="/asset/worried-person.png"
            alt="Worried person"
            width={280}
            height={260}
            className="absolute left-1/2 top-[120px] -translate-x-1/2"
          />

          <div className="absolute left-[20px] top-[30px] h-[180px] w-[280px]">
            <Image src="/asset/cloud-white.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-semibold text-[#434343]">
              Your company doesn&apos;t
              <br />
              appear in ChatGPT
              <br />
              search results
            </p>
          </div>

          <div className="absolute left-[80px] bottom-[15px] h-[170px] w-[260px]">
            <Image src="/asset/cloud-blue-2.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-semibold text-[#434343]">
              Competitors are
              <br />
              being recommended
              <br />
              by AI instead
            </p>
          </div>

          <div className="absolute right-[40px] top-[60px] h-[170px] w-[260px]">
            <Image src="/asset/cloud-blue-1.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-semibold text-[#434343]">
              Unsure how AI
              <br />
              search perceives
              <br />
              your company
            </p>
          </div>

          <div className="absolute right-[20px] bottom-[10px] h-[180px] w-[280px]">
            <Image src="/asset/cloud-white.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-semibold text-[#434343]">
              Unsure what to do
              <br />
              after SEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
