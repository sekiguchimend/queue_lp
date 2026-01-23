import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  locale?: "ja" | "en";
}

export default function Footer({ locale = "ja" }: FooterProps) {
  const prefix = locale === "ja" ? "" : "/en";
  
  const links = locale === "ja" ? [
    { href: "/service", label: "サービス" },
    { href: "/blog", label: "ブログ" },
    { href: "/faq", label: "FAQ" },
    { href: "/company", label: "会社概要" },
    { href: "/#contact", label: "お問い合わせ" },
    { href: "/privacy", label: "個人情報保護方針" },
    { href: "/security", label: "セキュリティ" },
  ] : [
    { href: "/en/service", label: "Services" },
    { href: "/en/blog", label: "Blog" },
    { href: "/en/faq", label: "FAQ" },
    { href: "/en/company", label: "Company" },
    { href: "/en#contact", label: "Contact" },
    { href: "/en/privacy", label: "Privacy Policy" },
    { href: "/en/security", label: "Security" },
  ];

  const homeLink = locale === "ja" ? "/" : "/en";

  return (
    <footer className="relative pb-8 md:pb-12 pt-10 md:pt-16" style={{ background: 'linear-gradient(180deg, #F4F7FB 0%, #E9EEF9 40%, #BEC8E2 100%)' }}>
      <div className="mx-auto w-full max-w-[800px] px-4 md:px-8 text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <Link href={homeLink} aria-label={locale === "ja" ? "ホームへ戻る" : "Go to home"}>
            <Image
              src="/asset/logo.png"
              alt="QUEUE"
              width={80}
              height={64}
              className="h-auto w-[60px] md:w-[80px]"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[12px] md:text-[13px] font-bold text-[#666666]" aria-label={locale === "ja" ? "フッターナビゲーション" : "Footer navigation"}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#1f5bb9] transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language Links */}
        <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-[#999999]">
          <Link href="/" className={`hover:text-[#1f5bb9] transition-colors ${locale === "ja" ? "text-[#1f5bb9] font-bold" : ""}`}>
            日本語
          </Link>
          <span>|</span>
          <Link href="/en" className={`hover:text-[#1f5bb9] transition-colors ${locale === "en" ? "text-[#1f5bb9] font-bold" : ""}`}>
            English
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-4 md:mt-6 text-[10px] md:text-[12px] text-[#999999]">© Queue Inc</p>
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#"
        className="absolute right-4 md:right-6 bottom-4 md:bottom-6 flex h-[36px] w-[36px] md:h-[44px] md:w-[44px] items-center justify-center rounded-full bg-white text-[#7a869f] shadow-md hover:shadow-lg transition-shadow"
        aria-label={locale === "ja" ? "ページ上部へ" : "Back to top"}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[12px] md:w-[16px] h-auto">
          <path d="M8 3V13M8 3L3 8M8 3L13 8" stroke="#7a869f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </footer>
  );
}
