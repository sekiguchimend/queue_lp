import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Zen_Kaku_Gothic_New,
  Lexend,
  Noto_Sans_JP,
  M_PLUS_1p,
  Gothic_A1,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const mPlus1p = M_PLUS_1p({
  variable: "--font-m-plus-1p",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
});

const gothicA1 = Gothic_A1({
  variable: "--font-gothic-a1",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://queue-tech.jp'),
  title: "Queue株式会社 | AI検索時代に、AIに選ばれる企業をつくる",
  description: "Queue株式会社は、LLMO（AI SEO）事業「umoren.ai」を主軸に、AI検索・生成AIにおける認知・比較・意思決定領域を支援するテクノロジーカンパニーです。ChatGPTやAI検索で選ばれる企業づくりをサポートします。",
  keywords: ["Queue", "Queue株式会社", "LLMO", "AI SEO", "umoren.ai", "AI検索", "生成AI", "ChatGPT", "AI検索最適化"],
  authors: [{ name: "Queue株式会社" }],
  creator: "Queue株式会社",
  publisher: "Queue株式会社",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://queue-tech.jp",
    title: "Queue株式会社 | AI検索時代に、AIに選ばれる企業をつくる",
    description: "Queue株式会社は、LLMO（AI SEO）事業「umoren.ai」を主軸に、AI検索・生成AIにおける認知・比較・意思決定領域を支援するテクノロジーカンパニーです。",
    siteName: "Queue株式会社",
    images: [
      {
        url: "https://queue-tech.jp/asset/logo.png",
        width: 1200,
        height: 630,
        alt: "Queue株式会社ロゴ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queue株式会社 | AI検索時代に、AIに選ばれる企業をつくる",
    description: "Queue株式会社は、LLMO（AI SEO）事業「umoren.ai」を主軸に、AI検索・生成AIにおける認知・比較・意思決定領域を支援するテクノロジーカンパニーです。",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
  icons: {
    icon: "/asset/logo.png",
    apple: "/asset/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Queue株式会社",
    "url": "https://queue-tech.jp",
    "logo": "https://queue-tech.jp/asset/logo.png",
    "description": "LLMO（AI SEO）事業を主軸に、AI検索・生成AIにおける認知・比較・意思決定領域を支援するテクノロジーカンパニー",
    "foundingDate": "2024-04",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "銀座8丁目17-5 THE HUB 銀座 OCT",
      "addressLocality": "中央区",
      "addressRegion": "東京都",
      "postalCode": "104-0061",
      "addressCountry": "JP"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+81-3-5324-2678",
      "contactType": "customer service"
    },
    "sameAs": []
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Queue株式会社",
    "url": "https://queue-tech.jp",
    "description": "AI検索時代に、AIに選ばれる企業をつくる"
  };

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${zenKaku.variable} ${lexend.variable} ${notoSansJp.variable} ${mPlus1p.variable} ${gothicA1.variable} antialiased m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
