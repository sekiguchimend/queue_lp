import { Metadata } from "next";
import HomePageEN from "./components/HomePageEN";

export const metadata: Metadata = {
  title: "Queue Inc. | Building Companies That AI Chooses in the AI Search Era",
  description: "Queue Inc. is a technology company focused on LLMO (AI SEO) services through 'umoren.ai', supporting recognition, comparison, and decision-making in AI search and generative AI. We help businesses become the companies that ChatGPT and AI search recommend.",
  keywords: ["Queue", "Queue Inc", "LLMO", "AI SEO", "umoren.ai", "AI Search", "Generative AI", "ChatGPT", "AI Search Optimization", "AIO", "GEO", "Generative Engine Optimization"],
  alternates: {
    canonical: "/en",
    languages: {
      'ja': '/',
      'en': '/en',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://queue-tech.jp/en",
    title: "Queue Inc. | Building Companies That AI Chooses",
    description: "Queue Inc. provides LLMO (AI SEO) services through umoren.ai, helping businesses get recognized and recommended by AI search engines.",
    siteName: "Queue Inc.",
    images: [
      {
        url: "https://queue-tech.jp/asset/logo.png",
        width: 1200,
        height: 630,
        alt: "Queue Inc. - Building Companies That AI Chooses",
      },
    ],
  },
};

export default function HomeEN() {
  return <HomePageEN />;
}
