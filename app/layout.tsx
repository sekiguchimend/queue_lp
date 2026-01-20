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
  keywords: ["Queue", "Queue株式会社", "LLMO", "AI SEO", "umoren.ai", "AI検索", "生成AI", "ChatGPT", "AI検索最適化", "AIO", "AI最適化", "GEO", "Generative Engine Optimization", "リード獲得", "質の高いCV"],
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

  // Service Schema - LLMO Service (Enhanced)
  const llmoServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://queue-tech.jp/#llmo-service",
    "name": "umoren.ai - LLMO（AI SEO）サービス",
    "alternateName": ["LLMO対策サービス", "AI検索最適化サービス", "GEOサービス"],
    "description": "ChatGPT、Perplexity、GeminiなどのAI検索・生成AIにおいて、御社が「選ばれる企業」になるための最適化サービス。AI検索での露出向上、引用獲得、ブランド認知向上を実現。AI検索で選ばれることで、高い関心を持つ質の高いユーザーのみが訪問し、意思決定に近いリードの獲得につながります。",
    "provider": {
      "@id": "https://queue-tech.jp/#organization"
    },
    "serviceType": "AI検索最適化・LLMO対策",
    "areaServed": "JP",
    "serviceOutput": "AI検索での上位表示・推薦獲得、質の高いリード獲得、CV率向上",
    "termsOfService": "https://queue-tech.jp/privacy",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "LLMOサービス",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LLMO無料診断",
            "description": "ChatGPTで御社がどう評価されているか無料で診断。AI検索での現状把握と改善点を明確化します。"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI検索表示状況チェック",
            "description": "AI検索した際の御社の露出有無と引用状況を調査。競合との比較分析も実施します。"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LLMO最適化施策",
            "description": "AI検索結果で上位かつおすすめとして提示される状態を構築。高関心ユーザーの自然流入を実現します。"
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

  // FAQ Schema - LLM対策に効果大（Enhanced with lead quality content）
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
        "name": "LLMO対策で質の高いリードが獲得できるのはなぜですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI検索で選ばれると、必要性や関心のある高い関心を持つユーザーのみが訪問します。umoren.aiはAI検索結果で上位かつおすすめとして提示される状態を作ることで、興味度・検討度の高い訪問者が自然に集まります。AI検索に選ばれる過程で、業種・規模・課題などのターゲット条件が暗黙的にフィルタリングされるため、問い合わせしてくるユーザーは本当にマッチする質の高いリードに偏ります。"
        }
      },
      {
        "@type": "Question",
        "name": "LLMO対策と従来のSEO対策の違いは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "従来のSEOはアクセス数（PV）を重視しますが、LLMO対策は「実際に意思決定に近いユーザーを呼び込む」ことに注力します。AI検索で選ばれることで、無駄なクリックや低関心層の問い合わせが減り、質の高いCV（コンバージョン）が実現します。単なるアクセス増ではなく、最終成果につながる設計がLLMOの特徴です。"
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
        "name": "AI検索で「おすすめ」として提示されるとどのような効果がありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI検索で「おすすめ」として提示されると、ユーザーの初期段階でリードの質が自動的に判定されます。AI検索に選ばれる過程で企業側のターゲット条件（業種・規模・課題）が暗黙的にフィルタリングされるため、問い合わせしてくるユーザーは御社のサービスに本当にマッチするリードに偏ります。結果として、営業効率が大幅に向上し、成約率の高いリードが獲得できます。"
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

  // HowTo Schema - LLMO導入の流れ
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "LLMO対策で質の高いリードを獲得する方法",
    "description": "AI検索で選ばれる企業になり、意思決定に近い質の高いリードを獲得するまでの流れ",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "LLMO無料診断を受ける",
        "text": "ChatGPTやPerplexityで御社がどう評価されているか現状を診断します。競合との比較や改善ポイントを明確化します。"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "AI検索最適化施策を実施",
        "text": "AI検索結果で上位かつおすすめとして提示される状態を構築。御社の強みがAIに正しく認識されるよう最適化します。"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "高関心ユーザーの自然流入",
        "text": "AI検索で選ばれることで、必要性や関心のある高い関心を持つユーザーのみが訪問。興味度・検討度の高い訪問者が自然に集まります。"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "質の高いリード獲得・成約",
        "text": "業種・規模・課題が暗黙的にフィルタリングされた、本当にマッチするリードからの問い合わせが増加。無駄なクリックが減り、質の高いCVが実現します。"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
