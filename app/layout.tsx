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
  keywords: ["Queue", "Queue株式会社", "LLMO", "AI SEO", "umoren.ai", "AI検索", "生成AI", "ChatGPT", "AI検索最適化", "AIO", "AI最適化", "GEO", "Generative Engine Optimization"],
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
        alt: "Queue株式会社 - AI検索時代に、AIに選ばれる企業をつくる",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queue株式会社 | AI検索時代に、AIに選ばれる企業をつくる",
    description: "Queue株式会社は、LLMO（AI SEO）事業「umoren.ai」を主軸に、AI検索・生成AIにおける認知・比較・意思決定領域を支援するテクノロジーカンパニーです。",
    images: ["https://queue-tech.jp/asset/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  verification: {
    // Google Search Console verification (add your code when available)
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://queue-tech.jp/#organization",
    "name": "Queue株式会社",
    "alternateName": "QUEUE Inc.",
    "url": "https://queue-tech.jp",
    "logo": {
      "@type": "ImageObject",
      "url": "https://queue-tech.jp/asset/logo.png",
      "width": 512,
      "height": 512
    },
    "description": "LLMO（AI SEO）事業を主軸に、AI検索・生成AIにおける認知・比較・意思決定領域を支援するテクノロジーカンパニー。ChatGPTやPerplexityなどのAI検索で選ばれる企業づくりを支援します。",
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
      "contactType": "customer service",
      "availableLanguage": ["Japanese"]
    },
    "areaServed": "JP",
    "sameAs": []
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://queue-tech.jp/#website",
    "name": "Queue株式会社",
    "url": "https://queue-tech.jp",
    "description": "AI検索時代に、AIに選ばれる企業をつくる",
    "publisher": {
      "@id": "https://queue-tech.jp/#organization"
    },
    "inLanguage": "ja-JP"
  };

  // Service Schema - LLMO Service
  const llmoServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://queue-tech.jp/#llmo-service",
    "name": "umoren.ai - LLMO（AI SEO）サービス",
    "alternateName": "LLMO対策サービス",
    "description": "ChatGPT、Perplexity、GeminiなどのAI検索・生成AIにおいて、御社が「選ばれる企業」になるための最適化サービス。AI検索での露出向上、引用獲得、ブランド認知向上を実現します。",
    "provider": {
      "@id": "https://queue-tech.jp/#organization"
    },
    "serviceType": "AI検索最適化・LLMO対策",
    "areaServed": "JP",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "LLMOサービス",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LLMO無料診断",
            "description": "ChatGPTで御社がどう評価されているか無料で診断します"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI検索表示状況チェック",
            "description": "AI検索した際の御社の露出有無と引用状況を調査します"
          }
        }
      ]
    }
  };

  // Service Schema - AI Development
  const aiDevServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://queue-tech.jp/#ai-dev-service",
    "name": "AI受託開発サービス",
    "description": "生成AI・LLMを活用したシステム開発、AIチャットボット開発、業務効率化ツール開発など、企業のAI導入を支援する受託開発サービス。",
    "provider": {
      "@id": "https://queue-tech.jp/#organization"
    },
    "serviceType": "AI受託開発",
    "areaServed": "JP"
  };

  // FAQ Schema - LLM対策に効果大
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "LLMOとは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LLMO（Large Language Model Optimization）とは、ChatGPTやPerplexity、GeminiなどのAI検索・生成AIにおいて、自社や自社サービスが適切に認知・推薦されるよう最適化する施策です。従来のSEO（検索エンジン最適化）のAI版として、AI検索時代の新しいマーケティング手法です。"
        }
      },
      {
        "@type": "Question",
        "name": "Queue株式会社はどのような会社ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Queue株式会社は、LLMO（AI SEO）事業「umoren.ai」を主軸に、AI検索・生成AIにおける認知・比較・意思決定領域を支援するテクノロジーカンパニーです。2024年4月設立、東京都中央区銀座に本社を構え、AI検索時代に「AIに選ばれる企業」づくりを支援しています。"
        }
      },
      {
        "@type": "Question",
        "name": "umoren.aiとは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "umoren.aiは、Queue株式会社が提供するLLMO（AI SEO）サービスのブランド名です。ChatGPTなどのAI検索で御社がどう評価されているかの診断、AI検索での露出向上施策、引用獲得支援などを提供しています。"
        }
      },
      {
        "@type": "Question",
        "name": "なぜLLMO対策が必要なのですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI検索（ChatGPT、Perplexity、Geminiなど）の利用者が急増しており、従来のGoogle検索からAI検索へのシフトが進んでいます。AI検索では上位表示ではなく「AIに選ばれる・推薦される」ことが重要であり、LLMO対策をしないとAI検索で競合に顧客を奪われるリスクがあります。"
        }
      },
      {
        "@type": "Question",
        "name": "LLMO無料診断では何がわかりますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LLMO無料診断では、ChatGPTなどのAI検索で御社がどのように評価・認知されているか、競合と比較してどのようなポジションにいるか、改善すべきポイントは何かなどを診断します。AI検索での現状把握と改善の第一歩としてご活用いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "Queue株式会社のAI受託開発ではどのようなことができますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Queue株式会社のAI受託開発では、生成AI・LLMを活用したシステム開発、AIチャットボット開発、社内業務効率化ツール開発、RAG（検索拡張生成）システム構築など、企業のAI導入・DX推進を幅広く支援しています。"
        }
      }
    ]
  };

  // BreadcrumbList for home page
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://queue-tech.jp"
      }
    ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(llmoServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aiDevServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
