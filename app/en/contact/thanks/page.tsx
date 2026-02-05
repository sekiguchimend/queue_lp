import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Queue Inc.",
  description: "Thank you for your inquiry. We will review your message and get back to you soon.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ContactThanksPageEN() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 lg:px-8 bg-white border-b border-[#e5e5e5]">
        <Link href="/en" className="flex items-center" aria-label="Go to home">
          <Image
            src="/asset/logo.png"
            alt="QUEUE"
            width={90}
            height={72}
            className="h-auto w-[50px] md:w-[70px]"
            priority
          />
        </Link>
        <nav className="flex items-center gap-4 md:gap-10 text-[12px] md:text-[15px] font-bold text-[#333333]" aria-label="Main navigation">
          <Link href="/en/company" className="transition-colors hover:text-[#2563eb]">
            Company
          </Link>
          <Link href="/en#contact" className="transition-colors hover:text-[#2563eb]">
            Contact
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-[600px]">
          {/* Success Icon */}
          <div className="relative mb-8 flex justify-center">
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
              />
              <div 
                className="relative bg-white rounded-full p-6 shadow-xl"
                style={{ 
                  boxShadow: '0 10px 40px rgba(31, 91, 185, 0.2)',
                }}
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <h1 
            className="text-[24px] sm:text-[28px] md:text-[36px] font-bold mb-4"
            style={{
              background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Thank You for<br className="sm:hidden" /> Your Inquiry
          </h1>
          
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md mb-8">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#333333] leading-relaxed">
              We have received your message.<br />
              Our team will review it and get back to you<br className="hidden sm:block" />
              within <span className="font-bold text-[#1f5bb9]">2 business days</span>.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/en"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-lg text-[15px] font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </Link>
            <a
              href="https://umoren.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-lg text-[15px] font-bold text-[#1f5bb9] bg-white border-2 border-[#1f5bb9] transition-colors hover:bg-[#f0f5ff]"
            >
              Visit umoren.ai
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-[#e5e5e5] bg-white">
        <p className="text-[12px] text-[#999999]">© Queue Inc</p>
      </footer>
    </div>
  );
}
