import Link from "next/link";
import { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Queue Inc.",
  description: "Queue Inc. Privacy Policy. Information about how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/en/privacy",
    languages: {
      'ja': '/privacy',
      'en': '/en/privacy',
    },
  },
};

export default function PrivacyPageEN() {
  return (
    <>
      <div className="min-h-screen bg-[#f5f6f8]">
        <Header locale="en" variant="white" />

        <main className="mx-auto max-w-[800px] px-4 pt-[80px] pb-12 md:pt-[100px] md:pb-16">
          {/* Breadcrumb */}
          <nav className="mb-6 text-[12px] md:text-[13px] text-[#666666]" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/en" className="hover:text-[#1f5bb9] transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li aria-current="page" className="text-[#333333]">Privacy Policy</li>
            </ol>
          </nav>

          {/* Title */}
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-[28px] md:text-[36px] font-bold text-[#333333]">
              Privacy Policy
            </h1>
            <div className="mx-auto mt-3 h-[3px] w-[60px] bg-[#1f5bb9]"></div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-10 space-y-8">
            <p className="text-[14px] md:text-[15px] text-[#333333] leading-relaxed">
              Queue Inc. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) recognizes the protection of personal information as an important responsibility and handles and protects personal information appropriately based on the following policy.
            </p>

            <section>
              <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">1</span>
                Definition of Personal Information
              </h2>
              <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
                In this policy, &quot;personal information&quot; refers to information about a living individual that can identify a specific individual by name, date of birth, address, phone number, email address, or other descriptions contained in the information, or information containing personal identification codes.
              </p>
            </section>

            <section>
              <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">2</span>
                Collection of Personal Information
              </h2>
              <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
                We collect personal information through lawful and fair means, within the necessary scope. When collecting information, we clearly state the purpose of use and obtain consent from the individual.
              </p>
            </section>

            <section>
              <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">3</span>
                Purpose of Use
              </h2>
              <div className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
                <p className="mb-2">We use collected personal information for the following purposes:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Responding to inquiries</li>
                  <li>Providing and operating services</li>
                  <li>Providing information about our services</li>
                  <li>Contract performance and management</li>
                  <li>Improving services and developing new services</li>
                  <li>Other purposes incidental to the above</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">4</span>
                Disclosure to Third Parties
              </h2>
              <div className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
                <p className="mb-2">We will not provide personal information to third parties without consent, except in the following cases:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>When required by law</li>
                  <li>When necessary to protect human life, body, or property</li>
                  <li>When necessary to improve public health or promote child welfare</li>
                  <li>When cooperating with government agencies in legal matters</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">5</span>
                Security Management
              </h2>
              <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
                We take necessary and appropriate measures to prevent leakage, loss, or damage of personal information and to ensure its safe management. We also provide education on personal information protection to employees and ensure proper handling.
              </p>
            </section>

            <section>
              <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">6</span>
                Disclosure, Correction, and Deletion
              </h2>
              <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
                When we receive a request from an individual for disclosure, correction, deletion, or suspension of use of personal information, we will respond within a reasonable period after confirming the identity of the individual.
              </p>
            </section>

            <section>
              <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">7</span>
                Use of Cookies
              </h2>
              <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
                Our website may use cookies to improve service convenience and analyze access status. If you do not wish to use cookies, you can disable them in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">8</span>
                Changes to This Policy
              </h2>
              <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
                We may change this policy in response to changes in laws or social conditions. The revised policy will take effect when posted on our website.
              </p>
            </section>

            <section>
              <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">9</span>
                Contact
              </h2>
              <div className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
                <p className="mb-3">For inquiries about personal information, please contact us at:</p>
                <div className="bg-[#f5f6f8] rounded-lg p-4">
                  <p className="font-bold text-[#333333]">Queue Inc.</p>
                  <p className="mt-1">Contact</p>
                  <p className="mt-2">
                    <Link href="/en#contact" className="text-[#1f5bb9] underline hover:no-underline">
                      Contact Form
                    </Link>
                  </p>
                </div>
              </div>
            </section>

            <div className="pt-6 border-t border-[#e5e5e5] text-right">
              <p className="text-[13px] md:text-[14px] text-[#555555]">
                Effective: April 1, 2024
              </p>
              <p className="text-[14px] md:text-[15px] font-bold text-[#333333] mt-2">
                Queue Inc.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/en"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#1f5bb9] hover:underline"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12L6 8L10 4" stroke="#1f5bb9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </Link>
          </div>
        </main>

        <Footer locale="en" />
      </div>
    </>
  );
}
