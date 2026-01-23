import Link from "next/link";
import { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "LLMO (AI SEO) Service umoren.ai | Queue Inc.",
  description: "Become a company that AI search recommends. Our LLMO (AI SEO) service helps you get cited and recommended by ChatGPT, Gemini, Perplexity, and other AI search engines. AI search traffic has 4.4x higher CVR than traditional SEO.",
  alternates: {
    canonical: "/en/service",
    languages: {
      'ja': '/service',
      'en': '/en/service',
    },
  },
};

export default function ServicePageEN() {
  return (
    <>
      <div className="min-h-screen bg-[#f5f6f8]">
        <Header locale="en" variant="white" />

        {/* Hero Section */}
        <section 
          className="relative pt-[100px] pb-16 md:pt-[120px] md:pb-24"
          style={{ background: 'linear-gradient(180deg, #f8f9fc 0%, #e8edf8 100%)' }}
        >
          <div className="mx-auto max-w-[1000px] px-4 md:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6 text-[12px] md:text-[13px] text-[#666666]" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/en" className="hover:text-[#1f5bb9] transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">&gt;</li>
                <li aria-current="page" className="text-[#333333]">LLMO Service</li>
              </ol>
            </nav>

            <div className="text-center">
              <p className="text-[14px] md:text-[16px] font-bold text-[#1f5bb9] mb-4">
                Queue Inc.&apos;s LLMO (AI SEO) Service
              </p>
              <h1 
                className="text-[32px] md:text-[48px] lg:text-[56px] font-black leading-[130%] mb-6"
                style={{
                  background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Become the Company<br />
                AI Search Recommends
              </h1>
              <p className="text-[15px] md:text-[18px] text-[#333333] leading-[180%] mb-8 max-w-[700px] mx-auto">
                ChatGPT / Google AI Overviews / Gemini / Perplexity<br />
                We design <strong className="text-[#8120AF]">high-conversion AI search traffic</strong>
              </p>
              
              {/* AI Platform Tags */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
                {['ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Grok'].map((ai) => (
                  <span 
                    key={ai}
                    className="px-4 py-2 bg-white rounded-full text-[12px] md:text-[14px] font-medium text-[#333333] shadow-sm"
                  >
                    {ai}
                  </span>
                ))}
                <span className="px-4 py-2 bg-[#1f5bb9] rounded-full text-[12px] md:text-[14px] font-medium text-white">
                  & more
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://umoren.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-lg text-[15px] md:text-[17px] font-bold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
                >
                  Free AI Diagnosis
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="https://umoren.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-lg text-[15px] md:text-[17px] font-bold text-[#1f5bb9] bg-white border-2 border-[#1f5bb9] transition-colors hover:bg-[#f0f5ff]"
                >
                  Visit umoren.ai →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-[900px] px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-[#f8f9fc]">
                <p className="text-[48px] md:text-[56px] font-black text-[#1f5bb9]">4.4<span className="text-[24px]">x</span></p>
                <p className="text-[14px] text-[#666666] mt-2">AI Search CVR<br />(vs. Traditional SEO)</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-[#f8f9fc]">
                <p className="text-[48px] md:text-[56px] font-black text-[#8120AF]">5<span className="text-[24px]">+</span></p>
                <p className="text-[14px] text-[#666666] mt-2">AI Platforms<br />ChatGPT/Gemini & more</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-[#f8f9fc]">
                <p className="text-[48px] md:text-[56px] font-black text-[#0952A1]">$0</p>
                <p className="text-[14px] text-[#666666] mt-2">Initial Diagnosis<br />Free Assessment</p>
              </div>
            </div>
          </div>
        </section>

        {/* What is LLMO Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-[#f8f9fc] to-white">
          <div className="mx-auto max-w-[900px] px-4 md:px-8">
            <div className="text-center mb-10">
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#333333]">
                What is LLMO / AI SEO?
              </h2>
              <p className="text-[14px] text-[#666666] mt-3">
                Overview of umoren.ai&apos;s LLMO Service
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="mb-8">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#1f5bb9] mb-4">
                  What is LLMO (AI SEO)?
                </h3>
                <p className="text-[15px] leading-[200%] text-[#333333]">
                  <strong>LLMO (Large Language Model Optimization)</strong> is the practice of optimizing your content so your company or service gets &quot;recommended&quot; and &quot;cited&quot; by AI search engines like ChatGPT, Claude, Gemini, Perplexity, and Grok. It&apos;s also known as <strong>AIO (AI Optimization)</strong> or <strong>GEO (Generative Engine Optimization)</strong>.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#1f5bb9] mb-4">
                  LLMO vs Traditional SEO
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-[14px] border-collapse">
                    <thead>
                      <tr className="bg-[#f8f9fc]">
                        <th className="border border-[#e5e5e5] p-3 text-left font-bold">Aspect</th>
                        <th className="border border-[#e5e5e5] p-3 text-left font-bold">Traditional SEO</th>
                        <th className="border border-[#e5e5e5] p-3 text-left font-bold text-[#1f5bb9]">LLMO / AI SEO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-[#e5e5e5] p-3 font-medium">Target</td>
                        <td className="border border-[#e5e5e5] p-3">Google Search Rankings</td>
                        <td className="border border-[#e5e5e5] p-3">AI Search Recommendations</td>
                      </tr>
                      <tr className="bg-[#fafafa]">
                        <td className="border border-[#e5e5e5] p-3 font-medium">Focus</td>
                        <td className="border border-[#e5e5e5] p-3">Links & Keywords</td>
                        <td className="border border-[#e5e5e5] p-3">Primary Info, Structure, Clarity</td>
                      </tr>
                      <tr>
                        <td className="border border-[#e5e5e5] p-3 font-medium">Metrics</td>
                        <td className="border border-[#e5e5e5] p-3">Rankings, Clicks</td>
                        <td className="border border-[#e5e5e5] p-3">AI Mentions, Recommendations, CVR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[900px] px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#333333]">
                Pricing & Plans
              </h2>
              <p className="text-[14px] text-[#666666] mt-3">
                Start with a free initial diagnosis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-[#FDCA39]">
                <p className="text-[14px] font-bold text-[#FDCA39] mb-2">STEP 1</p>
                <h3 className="text-[24px] font-bold text-[#333333] mb-2">Initial Diagnosis</h3>
                <p className="text-[40px] font-black text-[#1f5bb9]">Free</p>
                <p className="text-[14px] text-[#666666] mt-4 leading-[180%]">
                  We assess your current AI search visibility and identify priority improvement areas.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-[#1f5bb9]">
                <p className="text-[14px] font-bold text-[#1f5bb9] mb-2">STEP 2</p>
                <h3 className="text-[24px] font-bold text-[#333333] mb-2">Monthly Plan</h3>
                <p className="text-[40px] font-black text-[#1f5bb9]">¥150K<span className="text-[18px] font-normal text-[#666666]">+/mo</span></p>
                <p className="text-[14px] text-[#666666] mt-4 leading-[180%]">
                  Full service including content design, implementation, structure optimization, and monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-16 md:py-24"
          style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
        >
          <div className="mx-auto max-w-[800px] px-4 md:px-8 text-center">
            <h2 className="text-[24px] md:text-[32px] font-bold text-white mb-6">
              Become the Company AI Recommends<br />
              Start with a Free Diagnosis
            </h2>
            <p className="text-[14px] md:text-[16px] text-white/80 mb-8 leading-[180%]">
              Before the full AI search shift,<br />
              check your company&apos;s AI search visibility.
            </p>
            <a
              href="https://umoren.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-lg text-[17px] font-bold text-[#1f5bb9] bg-white transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              Get Free Diagnosis at umoren.ai
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>

        <Footer locale="en" />
      </div>
    </>
  );
}
