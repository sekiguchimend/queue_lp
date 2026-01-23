import Link from "next/link";
import { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Security Policy | Queue Inc.",
  description: "Queue Inc. Security Policy. Information security measures for AI development and LLMO services.",
  alternates: {
    canonical: "/en/security",
    languages: {
      'ja': '/security',
      'en': '/en/security',
    },
  },
};

export default function SecurityPageEN() {
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
              <li aria-current="page" className="text-[#333333]">Security Policy</li>
            </ol>
          </nav>

          {/* Title */}
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-[28px] md:text-[36px] font-bold text-[#333333]">
              Security Policy
            </h1>
            <div className="mx-auto mt-3 h-[3px] w-[60px] bg-[#1f5bb9]"></div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
            <section className="mb-10">
              <p className="text-[14px] md:text-[15px] leading-[200%] text-[#333333]">
                Queue Inc. (&quot;we&quot;) positions the protection of information assets entrusted to us by customers as our top priority in our LLMO (AI SEO) service &quot;umoren.ai&quot; and AI development business. All employees comply with the following security policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="flex items-center gap-3 text-[18px] md:text-[20px] font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#1f5bb9]">
                <span className="flex items-center justify-center w-8 h-8 bg-[#1f5bb9] text-white text-[14px] font-bold rounded">1</span>
                Basic Policy
              </h2>
              <div className="text-[14px] md:text-[15px] leading-[200%] text-[#333333] space-y-3">
                <p>We recognize information security as an important management issue and build and operate an information security management system based on the following basic policy:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ensure confidentiality, integrity, and availability of information assets</li>
                  <li>Comply with laws, regulations, and contractual security requirements</li>
                  <li>Prevent security incidents and respond quickly when they occur</li>
                  <li>Improve security levels through continuous improvement</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="flex items-center gap-3 text-[18px] md:text-[20px] font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#1f5bb9]">
                <span className="flex items-center justify-center w-8 h-8 bg-[#1f5bb9] text-white text-[14px] font-bold rounded">2</span>
                Information Management in AI Development & LLMO
              </h2>
              <div className="text-[14px] md:text-[15px] leading-[200%] text-[#333333] space-y-4">
                <div>
                  <h3 className="font-bold text-[#1f5bb9] mb-2">2.1 Data Handling</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Data entrusted by customers is not used for purposes other than those specified in the contract</li>
                    <li>Explicit consent is obtained before using data for AI learning</li>
                    <li>Data is properly returned or deleted according to the contract after project completion</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#1f5bb9] mb-2">2.2 AI Ethics</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ensure AI development and operation does not promote bias or discrimination</li>
                    <li>Strive to ensure transparency in AI decision-making processes</li>
                    <li>Work to prevent misuse of AI technology</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="flex items-center gap-3 text-[18px] md:text-[20px] font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#1f5bb9]">
                <span className="flex items-center justify-center w-8 h-8 bg-[#1f5bb9] text-white text-[14px] font-bold rounded">3</span>
                Technical Security Measures
              </h2>
              <div className="text-[14px] md:text-[15px] leading-[200%] text-[#333333] space-y-4">
                <div>
                  <h3 className="font-bold text-[#1f5bb9] mb-2">3.1 Access Management</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>System access is limited to those who need it for their work (principle of least privilege)</li>
                    <li>Multi-factor authentication prevents unauthorized access</li>
                    <li>Access logs are recorded and monitored for suspicious access</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#1f5bb9] mb-2">3.2 Data Protection</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Communications are encrypted with SSL/TLS</li>
                    <li>Confidential data is encrypted when stored</li>
                    <li>Regular backups ensure data availability</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#1f5bb9] mb-2">3.3 Vulnerability Management</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>System vulnerabilities are regularly diagnosed and assessed</li>
                    <li>Security patches are applied in a timely manner</li>
                    <li>Security information on third-party products is continuously collected</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="flex items-center gap-3 text-[18px] md:text-[20px] font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#1f5bb9]">
                <span className="flex items-center justify-center w-8 h-8 bg-[#1f5bb9] text-white text-[14px] font-bold rounded">4</span>
                Incident Response
              </h2>
              <div className="text-[14px] md:text-[15px] leading-[200%] text-[#333333] space-y-3">
                <p>In the event of a security incident, we will promptly:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identify the scope of impact and minimize damage</li>
                  <li>Investigate the cause and develop measures to prevent recurrence</li>
                  <li>Provide appropriate reports and notifications to relevant parties</li>
                  <li>Report to relevant authorities as necessary</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="flex items-center gap-3 text-[18px] md:text-[20px] font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#1f5bb9]">
                <span className="flex items-center justify-center w-8 h-8 bg-[#1f5bb9] text-white text-[14px] font-bold rounded">5</span>
                Contact
              </h2>
              <div className="text-[14px] md:text-[15px] leading-[200%] text-[#333333]">
                <p className="mb-4">For inquiries about this policy, please contact:</p>
                <div className="bg-[#f8f9fc] rounded-lg p-4 md:p-6">
                  <p className="font-bold text-[#333333] mb-2">Queue Inc.</p>
                  <p>THE HUB Ginza OCT 406, 8-17-5 Ginza</p>
                  <p>Chuo-ku, Tokyo 104-0061, Japan</p>
                  <p className="mt-2">
                    Email:{" "}
                    <a href="mailto:queue@queue-tech.jp" className="text-[#1f5bb9] hover:underline">
                      queue@queue-tech.jp
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="border-t pt-6">
              <p className="text-[13px] md:text-[14px] text-[#666666] text-right">
                Effective: January 1, 2025
              </p>
            </section>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-[13px] md:text-[14px]">
            <Link href="/en/privacy" className="text-[#1f5bb9] hover:underline">
              Privacy Policy →
            </Link>
            <Link href="/en/company" className="text-[#1f5bb9] hover:underline">
              Company →
            </Link>
          </div>
        </main>

        <Footer locale="en" />
      </div>
    </>
  );
}
