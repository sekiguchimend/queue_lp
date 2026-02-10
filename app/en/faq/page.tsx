import Link from "next/link";
import { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "FAQ | LLMO & AI SEO Services | Queue Inc.",
  description: "Frequently asked questions about Queue Inc. and umoren.ai LLMO/AI SEO services. Learn about LLMO, pricing, effectiveness, and more.",
  alternates: {
    canonical: "/en/faq",
    languages: {
      'ja': '/faq',
      'en': '/en/faq',
    },
  },
};

export default function FaqPageEN() {
  const faqCategories = [
    {
      category: "LLMO Basics",
      questions: [
        {
          q: "What is LLMO (AI SEO)?",
          a: "LLMO (Large Language Model Optimization) is the process of optimizing your content to be recommended and cited by AI search engines like ChatGPT, Claude, Gemini, Perplexity, and Grok. While traditional SEO targets Google search rankings, LLMO focuses on AI search visibility and recommendations."
        },
        {
          q: "What's the difference between LLMO, AIO, and GEO?",
          a: "LLMO (Large Language Model Optimization), AIO (AI Optimization), and GEO (Generative Engine Optimization) all refer to essentially the same practice of optimizing for AI search engines. Different companies and experts use different terms, but umoren.ai provides all of these services under the umbrella of 'LLMO'."
        },
        {
          q: "Why is LLMO important now?",
          a: "AI search usage is rapidly growing, and AI-driven traffic has been reported to have a CVR (conversion rate) approximately 4.4 times higher than traditional SEO traffic. Users coming from AI answers are typically further along in their research and comparison phase, making them more likely to convert. Establishing your position before competitors start LLMO is crucial."
        },
      ]
    },
    {
      category: "umoren.ai Services",
      questions: [
        {
          q: "What is umoren.ai?",
          a: "umoren.ai is Queue Inc.'s specialized LLMO (AI SEO) service. It covers all major AI search platforms including ChatGPT, Gemini, Perplexity, Claude, Grok, and Google AI Overviews. We focus not just on being 'cited' but on being 'recommended' to drive actual inquiries and business results."
        },
        {
          q: "Which AI search platforms do you cover?",
          a: "We analyze and optimize for ChatGPT, Claude, Gemini, Perplexity, Grok, Google AI Overviews, and other major LLMs. Since AI search behavior varies by model and product, we examine visibility across multiple platforms."
        },
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          q: "How much do LLMO services cost?",
          a: "Our initial diagnosis is free. Monthly plans start at ¥200,000 (approximately $1,300), varying based on scope and objectives. We provide custom quotes based on your goals (AI search mentions, citations, competitive positioning) and the number of target pages."
        },
        {
          q: "What does the free diagnosis include?",
          a: "The free diagnosis covers: current AI search visibility status, comparison with competitors, evaluation factors (why certain answers are chosen), gaps in primary information, and opportunities for improvement in structured data and page structure. We then prioritize recommendations for the fastest path to results."
        },
      ]
    },
    {
      category: "Implementation & Results",
      questions: [
        {
          q: "What specific measures do you implement?",
          a: "Our main activities include: (1) Current status diagnosis & competitive analysis, (2) Designing and creating AI-friendly primary information (facts, evidence, definitions, specs, FAQs), (3) Structured data implementation, (4) Page structure & internal linking optimization, (5) Improving expressions and information placement for citations, (6) Continuous monitoring and improvement."
        },
        {
          q: "How long until I see results?",
          a: "This varies based on your current situation and competitive environment. We implement high-priority measures first, then continuously monitor changes in AI search mentions, citations, and display trends. We balance short-term improvements with long-term 'consistently chosen' status."
        },
        {
          q: "What's the difference between being 'cited' and 'recommended'?",
          a: "Being cited means your information is used as a data point, which rarely leads to clicks or inquiries. Being recommended means AI specifically names your company as 'the one for this need,' putting you in the consideration set and driving inquiries and document requests. umoren.ai focuses on achieving 'recommended' status."
        },
      ]
    },
    {
      category: "About Queue Inc.",
      questions: [
        {
          q: "What kind of company is Queue Inc.?",
          a: "Queue Inc. is a technology company focused on LLMO (AI SEO) through our 'umoren.ai' service, supporting recognition, comparison, and decision-making in AI search and generative AI. Founded in April 2024, we're headquartered in Ginza, Tokyo."
        },
        {
          q: "What other services do you offer?",
          a: "In addition to LLMO, we provide AI development services including business automation AI, AI chatbot development, AI search system construction, and generative AI consulting to support corporate AI adoption."
        },
      ]
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#f5f6f8]">
        <Header locale="en" variant="white" />

        <main className="pt-[80px] pb-16 md:pt-[100px] md:pb-24">
          <div className="mx-auto max-w-[900px] px-4 md:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6 text-[12px] md:text-[13px] text-[#666666]" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/en" className="hover:text-[#1f5bb9] transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">&gt;</li>
                <li aria-current="page" className="text-[#333333]">FAQ</li>
              </ol>
            </nav>

            {/* Title */}
            <div className="text-center mb-12">
              <h1 className="text-[28px] md:text-[40px] font-bold text-[#333333]">
                Frequently Asked Questions
              </h1>
              <div className="mx-auto mt-3 h-[3px] w-[60px] bg-[#1f5bb9]"></div>
              <p className="mt-4 text-[14px] md:text-[16px] text-[#666666]">
                About LLMO, AI SEO & umoren.ai
              </p>
            </div>

            {/* Category Navigation */}
            <div className="bg-white rounded-xl p-6 mb-10 shadow-sm">
              <h2 className="text-[16px] font-bold text-[#333333] mb-4">Browse by Category</h2>
              <div className="flex flex-wrap gap-2">
                {faqCategories.map((category, idx) => (
                  <a
                    key={idx}
                    href={`#category-${idx}`}
                    className="px-4 py-2 bg-[#f8f9fc] rounded-full text-[13px] font-medium text-[#1f5bb9] hover:bg-[#e8f0ff] transition-colors"
                  >
                    {category.category}
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ List */}
            {faqCategories.map((category, categoryIdx) => (
              <section key={categoryIdx} id={`category-${categoryIdx}`} className="mb-12">
                <h2 className="text-[20px] md:text-[24px] font-bold text-[#333333] mb-6 pb-3 border-b-2 border-[#1f5bb9]">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, idx) => (
                    <details 
                      key={idx} 
                      className="group bg-white rounded-xl overflow-hidden shadow-sm"
                    >
                      <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none hover:bg-[#fafafa] transition-colors">
                        <span className="flex items-start gap-3 pr-4">
                          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">
                            Q
                          </span>
                          <span className="text-[14px] md:text-[15px] font-bold text-[#333333]">{item.q}</span>
                        </span>
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#f0f5ff] text-[#1f5bb9] text-[18px] group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <div className="flex items-start gap-3 pl-0 md:pl-9">
                          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#FDCA39] text-white text-[12px] font-bold md:hidden">
                            A
                          </span>
                          <p className="text-[14px] text-[#666666] leading-[200%]">{item.a}</p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#f0f5ff] to-[#f5f0ff] rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-[20px] md:text-[24px] font-bold text-[#333333] mb-4">
                Have More Questions?
              </h2>
              <p className="text-[14px] text-[#666666] mb-6 leading-[180%]">
                Feel free to reach out through our free diagnosis<br className="hidden md:block" />
                or contact form for any LLMO/AI SEO questions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://umoren.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-lg text-[15px] font-bold text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
                >
                  Free AI Diagnosis
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <Link
                  href="/en#contact"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-lg text-[15px] font-bold text-[#1f5bb9] bg-white border-2 border-[#1f5bb9] transition-colors hover:bg-[#f0f5ff]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer locale="en" />
      </div>
    </>
  );
}
