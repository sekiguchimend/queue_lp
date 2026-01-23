"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface HeaderProps {
  locale?: "ja" | "en";
  variant?: "transparent" | "white";
}

export default function Header({ locale = "ja", variant = "white" }: HeaderProps) {
  const pathname = usePathname();
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  // Determine the base path and alternate language path
  const isEnglish = pathname.startsWith("/en");
  const basePath = isEnglish ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const alternatePath = isEnglish ? basePath : `/en${pathname === "/" ? "" : pathname}`;
  
  // Navigation links based on locale
  const navLinks = locale === "ja" ? {
    service: { href: "/service", label: "サービス" },
    company: { href: "/company", label: "会社概要" },
    blog: { href: "/blog", label: "ブログ" },
    contact: { href: "/#contact", label: "お問い合わせ" },
  } : {
    service: { href: "/en/service", label: "Services" },
    company: { href: "/en/company", label: "Company" },
    blog: { href: "/en/blog", label: "Blog" },
    contact: { href: "/en#contact", label: "Contact" },
  };

  const homeLink = locale === "ja" ? "/" : "/en";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 lg:px-8 transition-colors ${
        variant === "transparent"
          ? "bg-transparent"
          : "bg-white shadow-sm"
      }`}
      style={
        variant === "transparent"
          ? { background: 'linear-gradient(90deg, rgba(244, 247, 251, 0) 0%, #F4F7FB 75.48%)' }
          : undefined
      }
    >
      <Link href={homeLink} className="flex items-center" aria-label={locale === "ja" ? "ホームへ戻る" : "Go to home"}>
        <Image
          src="/asset/logo.png"
          alt="QUEUE"
          width={90}
          height={72}
          className="h-auto w-[50px] md:w-[70px]"
          priority
        />
      </Link>
      
      <nav className="flex items-center gap-3 md:gap-6 text-[12px] md:text-[14px] font-bold text-[#333333]" aria-label={locale === "ja" ? "メインナビゲーション" : "Main navigation"}>
        <Link href={navLinks.service.href} className="hidden sm:block transition-colors hover:text-[#2563eb]">
          {navLinks.service.label}
        </Link>
        <Link href={navLinks.blog.href} className="hidden sm:block transition-colors hover:text-[#2563eb]">
          {navLinks.blog.label}
        </Link>
        <Link href={navLinks.company.href} className="transition-colors hover:text-[#2563eb]">
          {navLinks.company.label}
        </Link>
        <Link href={navLinks.contact.href} className="transition-colors hover:text-[#2563eb]">
          {navLinks.contact.label}
        </Link>
        
        {/* Language Switcher */}
        <div className="relative ml-2">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#e5e5e5] hover:border-[#1f5bb9] transition-colors text-[12px] md:text-[13px]"
            aria-label="Switch language"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#666666]">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22C9.5 19.5 8 16 8 12C8 8 9.5 4.5 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span className="font-medium">{isEnglish ? "EN" : "JP"}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-[#666666] transition-transform ${isLangOpen ? "rotate-180" : ""}`}>
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {isLangOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)} />
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-[#e5e5e5] overflow-hidden z-20">
                <Link
                  href={basePath || "/"}
                  onClick={() => setIsLangOpen(false)}
                  className={`block px-4 py-2.5 text-[13px] transition-colors hover:bg-[#f5f6f8] ${!isEnglish ? "text-[#1f5bb9] font-bold bg-[#f8f9fc]" : "text-[#333333]"}`}
                >
                  🇯🇵 日本語
                </Link>
                <Link
                  href={`/en${basePath === "/" ? "" : basePath}`}
                  onClick={() => setIsLangOpen(false)}
                  className={`block px-4 py-2.5 text-[13px] transition-colors hover:bg-[#f5f6f8] ${isEnglish ? "text-[#1f5bb9] font-bold bg-[#f8f9fc]" : "text-[#333333]"}`}
                >
                  🇺🇸 English
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
