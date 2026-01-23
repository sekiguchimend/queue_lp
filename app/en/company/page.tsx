import Image from "next/image";
import { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Company | Queue Inc.",
  description: "Queue Inc. company information. A technology company focused on LLMO (AI SEO) services through 'umoren.ai'. Company name, business, CEO, address, founding date, and more.",
  alternates: {
    canonical: "/en/company",
    languages: {
      'ja': '/company',
      'en': '/en/company',
    },
  },
  openGraph: {
    title: "Company | Queue Inc.",
    description: "Queue Inc. company information. A technology company focused on LLMO (AI SEO) services.",
    url: "https://queue-tech.jp/en/company",
    type: "website",
  },
};

export default function CompanyPageEN() {
  const companyInfo = [
    { label: "Company Name", value: "Queue Inc.", isLogo: true },
    { label: "Business", value: "LLMO (AI SEO) / AI Development" },
    { label: "CEO", value: "Taichi Taniguchi" },
    { label: "Address", value: "THE HUB Ginza OCT, 8-17-5 Ginza,\nChuo-ku, Tokyo 104-0061, Japan" },
    { label: "Founded", value: "April 2024" },
    { label: "Employees", value: "10" },
    { label: "Phone", value: "+81-3-5324-2678" },
    { label: "Capital", value: "¥1,150,000" },
  ];

  return (
    <>
      <main className="min-h-screen">
        <Header locale="en" variant="white" />

        {/* Breadcrumb - Mobile */}
        <nav className="md:hidden pt-[70px] px-4 text-[12px] text-[#666666]" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <a href="/en" className="hover:text-[#1f5bb9] transition-colors">Home</a>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li aria-current="page" className="text-[#333333]">Company</li>
          </ol>
        </nav>

        {/* Hero Section - Mobile */}
        <section
          className="md:hidden"
          style={{
            backgroundImage: "url('/asset/company-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col items-center py-12">
            <p
              className="text-[40px] font-medium leading-[100%] tracking-normal text-white"
              style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            >Company</p>
            <div className="mt-4 h-[2px] w-[50px] bg-[#f6c543]" />
            <p
              className="mt-4 text-[16px] font-medium leading-[100%] tracking-[0.03em] text-white"
              style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            >About Us</p>
          </div>
        </section>

        {/* Hero Section - Desktop */}
        <section className="hidden md:block pt-[80px]">
          <Image
            src="/image.png"
            alt="Company"
            width={1717}
            height={361}
            className="h-auto w-full"
            priority
          />
        </section>

        {/* Company Info Section - Mobile */}
        <section className="md:hidden bg-white py-8">
          <div className="mx-auto w-full px-6">
            <div className="space-y-0">
              {companyInfo.map((item, index) => (
                <div
                  key={index}
                  className="py-6"
                  style={{
                    borderBottom: '2px solid transparent',
                    borderImage: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%) 1',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-[8px] w-[8px] rounded-full bg-[#1f5bb9]"></span>
                    <span className="text-[14px] font-medium text-[#333333]">
                      {item.label}
                    </span>
                  </div>
                  <div className="mt-2 ml-5">
                    {item.isLogo ? (
                      <div className="flex items-end gap-1">
                        <span
                          className="text-[28px] font-semibold leading-[100%] tracking-[0.05em]"
                          style={{
                            fontFamily: 'var(--font-lexend), sans-serif',
                            background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          QUEUE
                        </span>
                        <span className="text-[14px] font-medium text-[#333333] ml-1">
                          Inc.
                        </span>
                      </div>
                    ) : (
                      <p className="text-[14px] font-medium text-[#333333] whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Info Section - Desktop */}
        <section className="hidden md:block bg-[#f5f6f8] py-20">
          {/* Breadcrumb - Desktop */}
          <nav className="mx-auto w-full max-w-[800px] px-8 mb-8 text-[13px] text-[#666666]" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <a href="/en" className="hover:text-[#1f5bb9] transition-colors">Home</a>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li aria-current="page" className="text-[#333333]">Company</li>
            </ol>
          </nav>

          <div className="mx-auto w-full max-w-[800px] px-8">
            <div className="space-y-0">
              {companyInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-start gap-4"
                >
                  <div
                    className="flex items-center gap-4 w-[200px] shrink-0 py-8 pl-4"
                    style={{
                      borderBottom: '2px solid transparent',
                      borderImage: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%) 1',
                    }}
                  >
                    <span className="h-[10px] w-[10px] rounded-full bg-[#1f5bb9]"></span>
                    <span className="text-[15px] font-medium text-[#333333]">
                      {item.label}
                    </span>
                  </div>
                  <div className="ml-6 flex-1 py-8">
                    {item.isLogo ? (
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[32px] font-medium leading-[100%] tracking-normal"
                          style={{
                            fontFamily: 'var(--font-lexend), sans-serif',
                            background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          QUEUE
                        </span>
                        <span className="text-[15px] font-medium text-[#333333]">
                          Inc.
                        </span>
                      </div>
                    ) : (
                      <p className="text-[15px] font-medium text-[#333333] whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer locale="en" />
      </main>
    </>
  );
}
