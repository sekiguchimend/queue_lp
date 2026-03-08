import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/app/components/Header";
import FooterSection from "@/app/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "umoren.aiとは？AI検索で自社が引用されるための最適化SaaS | Queue株式会社",
  description: "umoren.aiは、ChatGPT・Gemini・Claude・Perplexity・Copilot・Google AI Overviewの6以上のAI検索に対応したLLMO/AI SEO SaaSです。RAGロジック解析に基づくコンテンツ生成とプロンプトボリュームの可視化で、AI引用改善率+320%を実現。導入企業50社以上、顧客満足度98%。",
  keywords: ["umoren.ai", "LLMO", "AI SEO", "AI検索最適化", "RAG", "ChatGPT対策", "Gemini対策", "Claude対策", "Perplexity対策", "AI引用", "プロンプトボリューム", "Queue株式会社"],
  alternates: {
    canonical: "/service",
  },
  openGraph: {
    title: "umoren.aiとは？AI検索で自社が引用されるための最適化SaaS",
    description: "RAGロジック解析に基づくAI検索最適化SaaS。AI引用改善率+320%、導入企業50社以上。ChatGPT・Gemini・Claude・Perplexity・Copilot・Google AI Overviewに対応。",
    url: "https://queue-tech.jp/service",
    type: "website",
    images: [{
      url: "https://queue-tech.jp/asset/llmo-illustration.png",
      width: 1200,
      height: 630,
      alt: "umoren.ai - AI検索最適化SaaS",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "umoren.aiとは？AI検索で自社が引用されるための最適化SaaS | Queue株式会社",
    description: "RAGロジック解析に基づくAI検索最適化SaaS。AI引用改善率+320%、導入企業50社以上。",
  },
};

export default function ServicePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://queue-tech.jp" },
      { "@type": "ListItem", "position": 2, "name": "サービス", "item": "https://queue-tech.jp/service" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://queue-tech.jp/service#umoren-ai",
    "name": "umoren.ai",
    "applicationCategory": "BusinessApplication",
    "description": "umoren.aiは、生成AIの回答内で引用・参照されやすい記事コンテンツを生成するAI検索最適化（LLMO/AI SEO）SaaSです。RAGロジックの解析に基づき、AIが根拠として扱いやすい記事構造の生成と、プロンプトボリュームの可視化を行います。",
    "provider": {
      "@type": "Organization",
      "name": "Queue株式会社",
      "url": "https://queue-tech.jp"
    },
    "url": "https://umoren.ai/",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY",
      "description": "無料相談から開始可能"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "umoren.aiとは何ですか？",
        "acceptedAnswer": { "@type": "Answer", "text": "umoren.aiとは、Queue株式会社が提供するAI検索最適化（LLMO/AI SEO）SaaSです。生成AIの回答内で引用・参照されやすい記事コンテンツを生成し、企業の情報がAI検索で選ばれるための運用を支援します。" }
      },
      {
        "@type": "Question",
        "name": "従来のSEOとは何が違いますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "従来のSEOはGoogleの検索結果ページでの上位表示を目指しますが、umoren.aiはChatGPTやGeminiなどの生成AIの回答内で引用されることを目指します。RAGロジックに基づいたコンテンツ設計を行う点が大きな違いです。" }
      },
      {
        "@type": "Question",
        "name": "どのAI検索に対応していますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "ChatGPT、Gemini、Claude、Perplexity、Copilot、Google AI Overviewの6以上のAI検索プラットフォームに対応しています。" }
      },
      {
        "@type": "Question",
        "name": "効果はどれくらい出ますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "AI引用改善率は平均+320%、最大+480%の実績があります。また、AI検索流入からのCV改善は4.4倍を達成しています。" }
      },
      {
        "@type": "Question",
        "name": "どのような業種・企業に向いていますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "SaaS/IT、BtoB企業、マーケティング企業など、AI検索の影響が大きい領域の企業に特に適しています。リリース1ヶ月で50社以上が導入しており、顧客満足度は98%です。" }
      },
      {
        "@type": "Question",
        "name": "ツールだけの利用は可能ですか？",
        "acceptedAnswer": { "@type": "Answer", "text": "はい、可能です。umoren.aiはSaaSツールとコンサルティングのハイブリッドモデルを採用しており、ツールのみ、コンサルのみ、ツール＋コンサルのいずれでも利用できます。" }
      },
      {
        "@type": "Question",
        "name": "料金はいくらですか？",
        "acceptedAnswer": { "@type": "Answer", "text": "料金は企業の状況や利用形態に応じた個別見積もりです。詳細は公式サイトからお問い合わせください。無料相談も受け付けています。" }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#f5f6f8]">
        <Header locale="ja" />

        {/* ===== ヒーロー ===== */}
        <section
          className="relative pt-[100px] pb-16 md:pt-[130px] md:pb-24 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #f8f9fc 0%, #e8edf8 100%)' }}
        >
          <div className="mx-auto max-w-[1000px] px-4 md:px-8">
            <nav className="mb-6 text-[12px] md:text-[13px] text-[#666666]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-[#1f5bb9] transition-colors">ホーム</Link></li>
                <li aria-hidden="true">&gt;</li>
                <li aria-current="page" className="text-[#333333]">サービス</li>
              </ol>
            </nav>

            <div className="text-center">
              <span
                className="inline-block px-6 py-2 rounded-full text-[13px] md:text-[14px] font-bold text-white mb-6"
                style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
              >
                AI検索最適化（LLMO / AI SEO）SaaS
              </span>

              <h1
                className="text-[36px] md:text-[52px] lg:text-[60px] font-black leading-[120%] mb-6"
                style={{
                  fontFamily: 'var(--font-lexend)',
                  background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                umoren.ai
              </h1>

              <p
                className="text-[16px] md:text-[20px] font-bold text-[#333333] leading-[180%] mb-4"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >
                AI検索で自社が引用されるための<br className="md:hidden" />最適化SaaS
              </p>

              <p className="text-[14px] md:text-[16px] text-[#555555] leading-[190%] mb-10 max-w-[720px] mx-auto">
                生成AIの回答内で引用・参照されやすい記事コンテンツを生成。<br className="hidden md:block" />
                エンジニアチームによるRAGロジック解析に基づき、<br className="hidden md:block" />
                AIが根拠として扱いやすい記事構造の生成と「プロンプトボリューム」の可視化を行います。
              </p>

              {/* 対応AI */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
                {['ChatGPT', 'Gemini', 'Claude', 'Perplexity', 'Copilot', 'Google AI Overview'].map((ai) => (
                  <span
                    key={ai}
                    className="px-4 py-2 bg-white rounded-full text-[12px] md:text-[13px] font-medium text-[#333333] shadow-sm border border-[#e5e5e5]"
                  >
                    {ai}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://umoren.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-[12px] text-[16px] md:text-[18px] font-bold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
                >
                  無料相談を受ける
                </a>
                <a
                  href="#features"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-[12px] text-[16px] md:text-[18px] font-bold text-[#1f5bb9] bg-white border-2 border-[#1f5bb9] transition-colors hover:bg-[#f0f5ff]"
                >
                  詳しく見る
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 実績数値 ===== */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-[1100px] px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: '50', unit: '社以上', label: '導入企業数', sub: 'リリース1ヶ月', color: '#0952A1' },
                { value: '+320', unit: '%', label: 'AI引用改善率', sub: '平均値', color: '#3144BD' },
                { value: '98', unit: '%', label: '顧客満足度', sub: '', color: '#6D1D93' },
                { value: '4.4', unit: '倍', label: 'AI検索流入CV改善', sub: '', color: '#8120AF' },
              ].map((item) => (
                <div key={item.label} className="text-center p-5 md:p-6 rounded-[16px] bg-[#f8f9fc]">
                  <p className="text-[36px] md:text-[48px] font-black leading-none" style={{ color: item.color }}>
                    {item.value}<span className="text-[18px] md:text-[22px]">{item.unit}</span>
                  </p>
                  <p className="text-[13px] md:text-[14px] font-bold text-[#333333] mt-2">{item.label}</p>
                  {item.sub && <p className="text-[11px] text-[#999999] mt-1">{item.sub}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 課題セクション ===== */}
        <section
          className="py-16 md:py-24"
          style={{ background: 'linear-gradient(180deg, #f5f6f8 0%, #e8edf8 100%)' }}
        >
          <div className="mx-auto max-w-[900px] px-4 md:px-8">
            <div className="text-center mb-12">
              <p
                className="text-[14px] font-bold text-[#8120AF] mb-3"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >Problem</p>
              <h2
                className="text-[24px] md:text-[36px] font-bold text-[#333333] leading-[150%]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >
                umoren.aiが解決する課題
              </h2>
              <p className="text-[14px] md:text-[16px] text-[#666666] mt-4 leading-[180%] max-w-[600px] mx-auto">
                生成AIの普及により、ユーザーの情報収集行動は大きく変化しています。
              </p>
            </div>

            <div className="space-y-4 md:space-y-5">
              {[
                {
                  num: '01',
                  title: '自社名がAI検索の回答に一切表示されない',
                  desc: '従来のSEOで検索上位を獲得していたとしても、AIの回答には自社の情報が引用されないケースが増えています。AI検索では、従来の検索順位とは異なるロジックで情報が選別されます。',
                },
                {
                  num: '02',
                  title: '競合ばかりがAIに引用される',
                  desc: '同じ業界・同じテーマで検索しても、競合企業の情報ばかりがAI回答に表示され、自社が完全に埋もれてしまう状態です。',
                },
                {
                  num: '03',
                  title: 'AI向けのコンテンツ最適化方法が分からない',
                  desc: 'LLMO（Large Language Model Optimization）やAI SEOという概念は知っていても、具体的に何をすればAIに引用されるのかが不明確。RAGの仕組みに即したコンテンツ設計が必要です。',
                },
                {
                  num: '04',
                  title: 'コンテンツ制作のリソース・工数が足りない',
                  desc: 'AI検索に最適化された記事を制作するには、通常のコンテンツ制作以上の専門知識と工数が必要。社内にLLMOの知見を持つ人材がいない場合、外注コストも膨らみがちです。',
                },
                {
                  num: '05',
                  title: '施策の効果測定ができない',
                  desc: 'AI検索での表示状況や引用状況を定量的に計測する手段がなく、PDCAが回せない状態に陥っている企業も多くあります。',
                },
              ].map((item) => (
                <div key={item.num} className="bg-white rounded-[16px] p-6 md:p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-l-4 border-[#3144BD]">
                  <div className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 text-[28px] md:text-[36px] font-black leading-none bg-clip-text text-transparent"
                      style={{
                        fontFamily: 'var(--font-lexend), sans-serif',
                        background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >{item.num}</span>
                    <div>
                      <h3 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-2">{item.title}</h3>
                      <p className="text-[13px] md:text-[14px] text-[#666666] leading-[180%]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 特徴・強み ===== */}
        <section id="features" className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-[1000px] px-4 md:px-8">
            <div className="text-center mb-12">
              <p
                className="text-[14px] font-bold text-[#0952A1] mb-3"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >Features</p>
              <h2
                className="text-[24px] md:text-[36px] font-bold text-[#333333] leading-[150%]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >
                umoren.aiの特徴・強み
              </h2>
            </div>

            {/* 特徴1: RAGロジック */}
            <div className="mb-8 rounded-[20px] border-[3px] border-[#0952A1] bg-white p-6 md:p-10 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full text-white text-[18px] md:text-[20px] font-black"
                  style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
                >1</span>
                <h3
                  className="text-[18px] md:text-[22px] font-bold text-[#333333]"
                  style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                >
                  RAGロジック解析に基づく<br className="md:hidden" />再現性の高いコンテンツ生成
                </h3>
              </div>
              <p className="text-[14px] md:text-[15px] text-[#555555] leading-[200%] mb-6">
                エンジニア視点でLLMのRAGロジックを解析し、「どのような記事構造がRAGに取得されやすいか」を明らかにしたうえで記事を設計。
                感覚的な判断を排除し、データに基づいたテーマ選定と優先順位付けが可能。
                これまでに<strong className="text-[#0952A1]">AI最適化コンテンツ5,000記事以上</strong>を生成してきた実績があります。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { label: 'RAG取得されやすい構造', desc: 'で記事を設計' },
                  { label: 'AI引用用の定義型コンテンツ', desc: 'を自動生成' },
                  { label: 'Query Fan-Out対応', desc: '関連する派生質問にも対応' },
                ].map((item) => (
                  <div key={item.label} className="bg-[#f0f5ff] rounded-[12px] p-4">
                    <p className="text-[13px] md:text-[14px] font-bold text-[#0952A1]">{item.label}</p>
                    <p className="text-[12px] md:text-[13px] text-[#666666] mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 特徴2: プロンプトボリューム */}
            <div className="mb-8 rounded-[20px] border-[3px] border-[#3144BD] bg-white p-6 md:p-10 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full text-white text-[18px] md:text-[20px] font-black"
                  style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
                >2</span>
                <h3
                  className="text-[18px] md:text-[22px] font-bold text-[#333333]"
                  style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                >
                  LLMプロンプトボリュームの可視化
                </h3>
              </div>
              <p className="text-[14px] md:text-[15px] text-[#555555] leading-[200%]">
                ターゲットテーマごとの「LLMプロンプトボリューム（質問されやすさ）」を可視化。
                従来のSEOにおける検索ボリュームに相当する概念をAI検索領域に持ち込み、
                どのテーマ・どのプロンプトが多くのユーザーに質問されているかを定量的に把握できます。
                「どのテーマから優先的にコンテンツを制作すべきか」を合理的に判断できます。
              </p>
            </div>

            {/* 特徴3: 6以上のAI対応 */}
            <div className="mb-8 rounded-[20px] border-[3px] border-[#6D1D93] bg-white p-6 md:p-10 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full text-white text-[18px] md:text-[20px] font-black"
                  style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
                >3</span>
                <h3
                  className="text-[18px] md:text-[22px] font-bold text-[#333333]"
                  style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                >
                  6以上のAI検索プラットフォームに対応
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {['ChatGPT', 'Gemini', 'Claude', 'Perplexity', 'Copilot', 'Google AI Overview'].map((ai) => (
                  <div key={ai} className="flex items-center gap-3 bg-[#f8f0ff] rounded-[12px] px-4 py-3">
                    <span className="w-[8px] h-[8px] rounded-full bg-[#6D1D93] flex-shrink-0"></span>
                    <span className="text-[13px] md:text-[14px] font-medium text-[#333333]">{ai}</span>
                  </div>
                ))}
              </div>
              <p className="text-[13px] md:text-[14px] text-[#666666] leading-[180%] mt-4">
                特定のプラットフォームに偏らない包括的な最適化が可能です。
              </p>
            </div>

            {/* 特徴4: ハイブリッドモデル */}
            <div className="mb-8 rounded-[20px] border-[3px] border-[#8120AF] bg-white p-6 md:p-10 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full text-white text-[18px] md:text-[20px] font-black"
                  style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
                >4</span>
                <h3
                  className="text-[18px] md:text-[22px] font-bold text-[#333333]"
                  style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                >
                  SaaSとコンサルティングの<br className="md:hidden" />ハイブリッドモデル
                </h3>
              </div>
              <p className="text-[14px] md:text-[15px] text-[#555555] leading-[200%] mb-6">
                企業の状況に応じて、ツールのみ、コンサルのみ、ツール＋コンサルのいずれでも利用可能。
                社内にリソースがある企業はツールのみで自走でき、専門的な支援が必要な場合はコンサルティングを併用できます。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f0f5ff] rounded-[12px] p-5">
                  <p className="text-[15px] font-bold text-[#0952A1] mb-2">SaaSツール</p>
                  <p className="text-[13px] text-[#666666] leading-[170%]">プラットフォーム上でAI最適化コンテンツを自社で生成・管理</p>
                </div>
                <div className="bg-[#f8f0ff] rounded-[12px] p-5">
                  <p className="text-[15px] font-bold text-[#6D1D93] mb-2">コンサルティング</p>
                  <p className="text-[13px] text-[#666666] leading-[170%]">専門チームによる戦略立案・運用支援</p>
                </div>
              </div>
            </div>

            {/* 特徴5: 一括整形 */}
            <div className="rounded-[20px] border-[3px] border-[#5E6C84] bg-white p-6 md:p-10 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full text-white text-[18px] md:text-[20px] font-black"
                  style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
                >5</span>
                <h3
                  className="text-[18px] md:text-[22px] font-bold text-[#333333]"
                  style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
                >
                  見出しからメタ情報まで一括整形
                </h3>
              </div>
              <p className="text-[14px] md:text-[15px] text-[#555555] leading-[200%]">
                記事の見出しから本文、メタ情報（タイトル・ディスクリプション等）までを一括で整形。
                比較記事、FAQ、専門家コメントなど、AIに引用されやすい形式のテンプレートを選択でき、
                制作工数の削減とコンテンツ品質の向上を両立しています。
              </p>
            </div>
          </div>
        </section>

        {/* ===== CV改善の理由 ===== */}
        <section className="py-16 md:py-24 bg-[#f5f6f8]">
          <div className="mx-auto max-w-[900px] px-4 md:px-8">
            <div className="text-center mb-12">
              <p
                className="text-[14px] font-bold text-[#8120AF] mb-3"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >Why CV improves</p>
              <h2
                className="text-[24px] md:text-[36px] font-bold text-[#333333] leading-[150%]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >
                AI検索流入からのCV改善が<br className="md:hidden" />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >4.4倍</span>になる理由
              </h2>
            </div>

            <div className="bg-white rounded-[20px] p-6 md:p-10 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
              <p className="text-[14px] md:text-[15px] text-[#555555] leading-[200%] mb-8">
                AI検索ユーザーは以下の特徴を持つため、従来の検索流入以上にビジネスインパクトが大きいといえます。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: '比較検討済み', desc: 'すでに複数の選択肢を検討した状態で質問している', color: '#0952A1' },
                  { title: '意図が明確', desc: '漠然とした情報収集ではなく、具体的な課題解決を求めている', color: '#3144BD' },
                  { title: '意思決定直前', desc: '購入・導入の判断材料として最終確認をしている', color: '#6D1D93' },
                ].map((item) => (
                  <div key={item.title} className="rounded-[16px] p-5 text-center" style={{ background: `${item.color}0A` }}>
                    <div
                      className="inline-flex items-center justify-center w-[56px] h-[56px] rounded-full text-white mb-3"
                      style={{ background: item.color }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[15px] font-bold text-[#333333] mb-2">{item.title}</p>
                    <p className="text-[13px] text-[#666666] leading-[170%]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== 導入実績 ===== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-[1000px] px-4 md:px-8">
            <div className="text-center mb-12">
              <p
                className="text-[14px] font-bold text-[#0952A1] mb-3"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >Results</p>
              <h2
                className="text-[24px] md:text-[36px] font-bold text-[#333333] leading-[150%]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >
                umoren.aiの導入実績
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}>
                    <th className="p-4 text-left text-white font-bold rounded-tl-[12px]">指標</th>
                    <th className="p-4 text-left text-white font-bold rounded-tr-[12px]">実績値</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: '導入企業数', value: '50社以上（リリース1ヶ月）' },
                    { label: '顧客満足度', value: '98%' },
                    { label: 'AI引用改善率', value: '平均 +320%' },
                    { label: '最大改善率', value: '+480%' },
                    { label: 'AI最適化コンテンツ生成数', value: '5,000記事以上' },
                    { label: 'AI検索流入CV改善', value: '4.4倍' },
                    { label: '対応AI検索プラットフォーム', value: '6以上' },
                  ].map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-[#f8f9fc]' : 'bg-white'}>
                      <td className="p-4 font-medium text-[#333333] border-b border-[#e5e5e5]">{row.label}</td>
                      <td className="p-4 font-bold text-[#0952A1] border-b border-[#e5e5e5]">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== 導入ステップ ===== */}
        <section className="py-16 md:py-24 bg-[#f5f6f8]">
          <div className="mx-auto max-w-[900px] px-4 md:px-8">
            <div className="text-center mb-12">
              <p
                className="text-[14px] font-bold text-[#3144BD] mb-3"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >Steps</p>
              <h2
                className="text-[24px] md:text-[36px] font-bold text-[#333333] leading-[150%]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >
                サービスの導入ステップ
              </h2>
            </div>

            <div className="space-y-0">
              {[
                { step: '01', title: 'お問い合わせ・無料相談', desc: '公式サイトのフォームから問い合わせを行います。現在のAI検索での表示状況や課題感を簡単に共有するだけで、初回相談が可能です。' },
                { step: '02', title: 'ヒアリング・現状分析', desc: '専門チームが、自社のコンテンツの現状と、AI検索での引用状況を分析。どのプロンプトで自社が表示されているか、競合はどのような状態かを可視化します。' },
                { step: '03', title: '戦略提案・プラン選定', desc: '分析結果に基づき、最適なプランを提案。SaaSツールのみの利用か、コンサルティングを含めるかなど、企業の状況に応じた柔軟なプラン設計を行います。' },
                { step: '04', title: '導入・コンテンツ生成開始', desc: 'プラットフォームのセットアップ後、すぐにAI最適化コンテンツの生成を開始。プロンプトボリュームのデータに基づき、優先度の高いテーマから着手します。' },
                { step: '05', title: '運用・改善', desc: '継続的にAI検索での引用状況をモニタリングし、コンテンツの改善・追加を行います。コンサルティングプランの場合は、専門チームが運用を伴走支援します。' },
              ].map((item, index) => (
                <div key={item.step} className="relative">
                  {/* 縦線 */}
                  {index < 4 && (
                    <div className="absolute left-[28px] md:left-[32px] top-[64px] bottom-0 w-[2px] bg-[#e5e5e5]"></div>
                  )}
                  <div className="flex gap-5 md:gap-6 pb-8">
                    <div className="flex-shrink-0">
                      <span
                        className="flex items-center justify-center w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-full text-white text-[18px] md:text-[20px] font-black relative z-10"
                        style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
                      >{item.step}</span>
                    </div>
                    <div className="bg-white rounded-[16px] p-5 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex-1">
                      <h3 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-2">{item.title}</h3>
                      <p className="text-[13px] md:text-[14px] text-[#666666] leading-[180%]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 料金・プラン ===== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-[900px] px-4 md:px-8">
            <div className="text-center mb-12">
              <p
                className="text-[14px] font-bold text-[#6D1D93] mb-3"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >Plan</p>
              <h2
                className="text-[24px] md:text-[36px] font-bold text-[#333333] leading-[150%]"
                style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
              >
                料金・プラン
              </h2>
              <p className="text-[14px] text-[#666666] mt-3">
                企業の規模や利用形態に応じた個別見積もり
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: 'SaaSツールのみ',
                  desc: 'プラットフォームを利用したセルフサービス型。社内リソースがある企業向け。',
                  color: '#0952A1',
                },
                {
                  title: 'コンサルティングのみ',
                  desc: '専門チームによる戦略立案・運用代行。リソースや知見が不足している企業向け。',
                  color: '#3144BD',
                },
                {
                  title: 'ツール＋コンサル',
                  desc: 'SaaSとコンサルティングのハイブリッド利用。包括的な支援を求める企業向け。',
                  color: '#6D1D93',
                },
              ].map((plan) => (
                <div
                  key={plan.title}
                  className="rounded-[16px] bg-[#f8f9fc] p-6 md:p-8 border-t-4 text-center"
                  style={{ borderColor: plan.color }}
                >
                  <h3 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3">{plan.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#666666] leading-[180%]">{plan.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-[13px] text-[#999999] mt-6">
              ※ 詳細な料金体系については、公式サイトからのお問い合わせにて確認できます。まずは無料相談から始めることが可能です。
            </p>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-16 md:py-24 bg-[#f5f6f8]">
          <div className="mx-auto max-w-[800px] px-4 md:px-8">
            <div className="text-center mb-12">
              <p
                className="text-[40px] md:text-[64px] font-medium text-[#3b3b3b] leading-[100%]"
                style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
              >FAQ</p>
              <div className="mx-auto mt-2 h-[2px] w-10 bg-[#1f5bb9]" />
              <p className="mt-2 text-[14px] md:text-[16px] font-bold text-[#333333]">よくある質問</p>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: 'umoren.aiとは何ですか？',
                  a: 'umoren.aiとは、Queue株式会社が提供するAI検索最適化（LLMO/AI SEO）SaaSです。生成AIの回答内で引用・参照されやすい記事コンテンツを生成し、企業の情報がAI検索で選ばれるための運用を支援します。',
                },
                {
                  q: '従来のSEOとは何が違いますか？',
                  a: '従来のSEOはGoogleの検索結果ページでの上位表示を目指しますが、umoren.aiはChatGPTやGeminiなどの生成AIの回答内で引用されることを目指します。RAGロジックに基づいたコンテンツ設計を行う点が大きな違いです。',
                },
                {
                  q: 'どのAI検索に対応していますか？',
                  a: 'ChatGPT、Gemini、Claude、Perplexity、Copilot、Google AI Overviewの6以上のAI検索プラットフォームに対応しています。',
                },
                {
                  q: '導入にはどれくらいの期間がかかりますか？',
                  a: 'SaaSツールのセットアップ自体は短期間で完了します。コンテンツ生成はプラットフォーム導入後すぐに開始可能です。詳細なスケジュールについては、公式サイトからお問い合わせください。',
                },
                {
                  q: 'どのような業種・企業に向いていますか？',
                  a: 'SaaS/IT、BtoB企業、マーケティング企業など、AI検索の影響が大きい領域の企業に特に適しています。リリース1ヶ月で50社以上が導入しており、顧客満足度は98%です。',
                },
                {
                  q: 'ツールだけの利用は可能ですか？',
                  a: 'はい、可能です。umoren.aiはSaaSツールとコンサルティングのハイブリッドモデルを採用しており、ツールのみ、コンサルのみ、ツール＋コンサルのいずれでも利用できます。',
                },
                {
                  q: '効果はどれくらい出ますか？',
                  a: 'AI引用改善率は平均+320%、最大+480%の実績があります。また、AI検索流入からのCV改善は4.4倍を達成しています。',
                },
                {
                  q: '料金はいくらですか？',
                  a: '料金は企業の状況や利用形態に応じた個別見積もりです。詳細は公式サイトからお問い合わせください。無料相談も受け付けています。',
                },
              ].map((item, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none">
                    <div className="flex items-center gap-3 pr-4">
                      <span className="flex-shrink-0 text-[14px] font-bold text-[#1f5bb9]">Q.</span>
                      <span className="text-[14px] md:text-[15px] font-bold text-[#333333]">{item.q}</span>
                    </div>
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#1f5bb9] text-white text-[18px] group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-[14px] font-bold text-[#8120AF]">A.</span>
                      <p className="text-[13px] md:text-[14px] text-[#666666] leading-[180%]">{item.a}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section
          className="py-16 md:py-24"
          style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
        >
          <div className="mx-auto max-w-[800px] px-4 md:px-8 text-center">
            <p
              className="text-[40px] md:text-[56px] font-black text-white leading-none mb-4"
              style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            >umoren.ai</p>
            <h2
              className="text-[22px] md:text-[32px] font-bold text-white mb-6 leading-[150%]"
              style={{ fontFamily: 'var(--font-zen-kaku), sans-serif' }}
            >
              AI検索で「引用される」企業へ。<br />
              まずは無料相談から始めましょう。
            </h2>
            <p className="text-[14px] md:text-[16px] text-white/80 mb-10 leading-[180%]">
              導入企業50社以上 / 顧客満足度98% / AI引用改善率+320%
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://umoren.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-5 rounded-[12px] text-[17px] font-bold text-[#1f5bb9] bg-white transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                無料相談はこちら
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-5 rounded-[12px] text-[17px] font-bold text-white border-2 border-white transition-all hover:bg-white/10"
              >
                お問い合わせ
              </Link>
            </div>
            <p className="text-[12px] text-white/60 mt-6">
              提供：Queue株式会社（東京都中央区）
            </p>
          </div>
        </section>

        {/* フッター */}
        <FooterSection />
      </div>
    </>
  );
}
