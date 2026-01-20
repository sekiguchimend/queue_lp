import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "セキュリティポリシー | Queue株式会社",
  description: "Queue株式会社のセキュリティポリシー。AI開発・LLMO事業における情報セキュリティの取り組み、データ保護、アクセス管理、インシデント対応等について定めています。",
  alternates: {
    canonical: "/security",
  },
  openGraph: {
    title: "セキュリティポリシー | Queue株式会社",
    description: "Queue株式会社のセキュリティポリシー。AI開発・LLMO事業における情報セキュリティの取り組みについて。",
    url: "https://queue-tech.jp/security",
    type: "website",
    images: [{
      url: "https://queue-tech.jp/asset/logo.png",
      width: 1200,
      height: 630,
      alt: "Queue株式会社ロゴ",
    }],
  },
  twitter: {
    card: "summary",
    title: "セキュリティポリシー | Queue株式会社",
    description: "Queue株式会社のセキュリティポリシー。AI開発・LLMO事業における情報セキュリティの取り組み。",
  },
};

export default function SecurityPage() {
  // BreadcrumbList structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://queue-tech.jp"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "セキュリティポリシー",
        "item": "https://queue-tech.jp/security"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-[#f5f6f8]">
        {/* ヘッダー */}
        <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 lg:px-8 bg-white">
          <Link href="/" className="flex items-center" aria-label="ホームへ戻る">
            <Image
              src="/asset/logo.png"
              alt="QUEUE"
              width={90}
              height={72}
              className="h-auto w-[50px] md:w-[70px]"
              priority
            />
          </Link>
          <nav className="flex items-center gap-4 md:gap-10 text-[12px] md:text-[15px] font-bold text-[#333333]" aria-label="メインナビゲーション">
            <Link href="/company" className="transition-colors hover:text-[#2563eb]">
              会社概要
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-[#2563eb]">
              お問い合わせ
            </Link>
          </nav>
        </header>

        {/* メインコンテンツ */}
        <main className="mx-auto max-w-[800px] px-4 pt-[80px] pb-12 md:pt-[100px] md:pb-16">
          {/* パンくずリスト */}
          <nav className="mb-6 text-[12px] md:text-[13px] text-[#666666]" aria-label="パンくずリスト">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#1f5bb9] transition-colors">ホーム</Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li aria-current="page" className="text-[#333333]">セキュリティポリシー</li>
            </ol>
          </nav>

          {/* タイトル */}
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-[28px] md:text-[36px] font-bold text-[#333333]">
              セキュリティポリシー
            </h1>
            <div className="mx-auto mt-3 h-[3px] w-[60px] bg-[#1f5bb9]"></div>
            <p className="mt-4 text-[12px] md:text-[14px] text-[#666666]">
              Security Policy
            </p>
          </div>

          {/* コンテンツ */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
            {/* 前文 */}
            <section className="mb-10">
              <p className="text-[14px] md:text-[15px] leading-[200%] text-[#333333]">
                Queue株式会社（以下「当社」）は、LLMO（AI SEO）事業「umoren.ai」およびAI開発事業において、お客様からお預かりする情報資産の保護を最重要課題と位置づけ、以下のセキュリティポリシーを定め、全社員がこれを遵守します。
              </p>
            </section>

            {/* セクション1 */}
            <section className="mb-10">
              <h2 className="flex items-center gap-3 text-[18px] md:text-[20px] font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#1f5bb9]">
                <span className="flex items-center justify-center w-8 h-8 bg-[#1f5bb9] text-white text-[14px] font-bold rounded">1</span>
                基本方針
              </h2>
              <div className="text-[14px] md:text-[15px] leading-[200%] text-[#333333] space-y-3">
                <p>当社は、情報セキュリティを経営上の重要課題として認識し、以下の基本方針に基づき情報セキュリティ管理体制を構築・運用します。</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>情報資産の機密性、完全性、可用性を確保します</li>
                  <li>法令、規制、契約上のセキュリティ要件を遵守します</li>
                  <li>セキュリティインシデントの予防に努め、発生時には迅速に対応します</li>
                  <li>継続的な改善を通じてセキュリティレベルの向上を図ります</li>
                </ul>
              </div>
            </section>

            {/* セクション2 */}
            <section className="mb-10">
              <h2 className="flex items-center gap-3 text-[18px] md:text-[20px] font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#1f5bb9]">
                <span className="flex items-center justify-center w-8 h-8 bg-[#1f5bb9] text-white text-[14px] font-bold rounded">2</span>
                AI開発・LLMO事業における情報管理
              </h2>
              <div className="text-[14px] md:text-[15px] leading-[200%] text-[#333333] space-y-4">
                <div>
                  <h3 className="font-bold text-[#1f5bb9] mb-2">2.1 データの取り扱い</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>お客様からお預かりしたデータは、契約で定められた目的以外には使用しません</li>
                    <li>AI学習データとして使用する場合は、事前に明示的な同意を得ます</li>
                    <li>プロジェクト終了後のデータは、契約に基づき適切に返却または削除します</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#1f5bb9] mb-2">2.2 AI倫理への配慮</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>AIの開発・運用において、偏見や差別を助長しないよう配慮します</li>
                    <li>AIの判断プロセスの透明性確保に努めます</li>
                    <li>AI技術の悪用防止に取り組みます</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション3 */}
            <section className="mb-10">
              <h2 className="flex items-center gap-3 text-[18px] md:text-[20px] font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#1f5bb9]">
                <span className="flex items-center justify-center w-8 h-8 bg-[#1f5bb9] text-white text-[14px] font-bold rounded">3</span>
                技術的セキュリティ対策
              </h2>
              <div className="text-[14px] md:text-[15px] leading-[200%] text-[#333333] space-y-4">
                <div>
                  <h3 className="font-bold text-[#1f5bb9] mb-2">3.1 アクセス管理</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>システムへのアクセスは、業務上必要な者に限定します（最小権限の原則）</li>
                    <li>多要素認証を導入し、不正アクセスを防止します</li>
                    <li>アクセスログを記録・監視し、不審なアクセスを検知します</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#1f5bb9] mb-2">3.2 データ保護</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>通信はSSL/TLSにより暗号化します</li>
                    <li>機密データは暗号化して保存します</li>
                    <li>定期的なバックアップを実施し、データの可用性を確保します</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#1f5bb9] mb-2">3.3 脆弱性管理</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>システムの脆弱性を定期的に診断・評価します</li>
                    <li>セキュリティパッチを適時適用します</li>
                    <li>サードパーティ製品のセキュリティ情報を継続的に収集します</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション4 */}
            <section className="mb-10">
              <h2 className="flex items-center gap-3 text-[18px] md:text-[20px] font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#1f5bb9]">
                <span className="flex items-center justify-center w-8 h-8 bg-[#1f5bb9] text-white text-[14px] font-bold rounded">4</span>
                組織的セキュリティ対策
              </h2>
              <div className="text-[14px] md:text-[15px] leading-[200%] text-[#333333] space-y-4">
                <div>
                  <h3 className="font-bold text-[#1f5bb9] mb-2">4.1 教育・啓発</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>全従業員に対し、定期的なセキュリティ教育を実施します</li>
                    <li>最新のセキュリティ脅威に関する情報を共有します</li>
                    <li>セキュリティ意識の向上を継続的に推進します</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#1f5bb9] mb-2">4.2 委託先管理</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>業務委託先の選定にあたり、セキュリティ体制を評価します</li>
                    <li>委託契約において、セキュリティ要件を明確に規定します</li>
                    <li>委託先のセキュリティ遵守状況を定期的に確認します</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション5 */}
            <section className="mb-10">
              <h2 className="flex items-center gap-3 text-[18px] md:text-[20px] font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#1f5bb9]">
                <span className="flex items-center justify-center w-8 h-8 bg-[#1f5bb9] text-white text-[14px] font-bold rounded">5</span>
                インシデント対応
              </h2>
              <div className="text-[14px] md:text-[15px] leading-[200%] text-[#333333] space-y-3">
                <p>セキュリティインシデント発生時には、以下の対応を迅速に実施します。</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>影響範囲の特定と被害の最小化</li>
                  <li>原因の究明と再発防止策の策定</li>
                  <li>関係者への適切な報告・通知</li>
                  <li>必要に応じた関係機関への届出</li>
                </ul>
              </div>
            </section>

            {/* セクション6 */}
            <section className="mb-10">
              <h2 className="flex items-center gap-3 text-[18px] md:text-[20px] font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#1f5bb9]">
                <span className="flex items-center justify-center w-8 h-8 bg-[#1f5bb9] text-white text-[14px] font-bold rounded">6</span>
                物理的セキュリティ
              </h2>
              <div className="text-[14px] md:text-[15px] leading-[200%] text-[#333333] space-y-3">
                <ul className="list-disc pl-6 space-y-2">
                  <li>オフィスへの入退室を適切に管理します</li>
                  <li>機密情報を扱う区域へのアクセスを制限します</li>
                  <li>機器・媒体の持ち出し・廃棄を適切に管理します</li>
                </ul>
              </div>
            </section>

            {/* セクション7 */}
            <section className="mb-10">
              <h2 className="flex items-center gap-3 text-[18px] md:text-[20px] font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#1f5bb9]">
                <span className="flex items-center justify-center w-8 h-8 bg-[#1f5bb9] text-white text-[14px] font-bold rounded">7</span>
                継続的改善
              </h2>
              <div className="text-[14px] md:text-[15px] leading-[200%] text-[#333333] space-y-3">
                <p>当社は、以下を通じてセキュリティ体制の継続的な改善を図ります。</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>定期的な内部監査の実施</li>
                  <li>セキュリティポリシーの見直し・更新</li>
                  <li>新たな脅威・技術動向への対応</li>
                  <li>インシデントからの学習と改善</li>
                </ul>
              </div>
            </section>

            {/* セクション8 */}
            <section className="mb-10">
              <h2 className="flex items-center gap-3 text-[18px] md:text-[20px] font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#1f5bb9]">
                <span className="flex items-center justify-center w-8 h-8 bg-[#1f5bb9] text-white text-[14px] font-bold rounded">8</span>
                お問い合わせ
              </h2>
              <div className="text-[14px] md:text-[15px] leading-[200%] text-[#333333]">
                <p className="mb-4">本ポリシーに関するお問い合わせは、以下までご連絡ください。</p>
                <div className="bg-[#f8f9fc] rounded-lg p-4 md:p-6">
                  <p className="font-bold text-[#333333] mb-2">Queue株式会社</p>
                  <p>〒104-0061</p>
                  <p>東京都中央区銀座8-17-5 THE HUB 銀座OCT 406</p>
                  <p className="mt-2">
                    メール：
                    <a href="mailto:queue@queue-tech.jp" className="text-[#1f5bb9] hover:underline">
                      queue@queue-tech.jp
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* 制定日 */}
            <section className="border-t pt-6">
              <p className="text-[13px] md:text-[14px] text-[#666666] text-right">
                制定日：2025年1月1日
              </p>
            </section>
          </div>

          {/* 関連リンク */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-[13px] md:text-[14px]">
            <Link href="/privacy" className="text-[#1f5bb9] hover:underline">
              個人情報保護方針 →
            </Link>
            <Link href="/company" className="text-[#1f5bb9] hover:underline">
              会社概要 →
            </Link>
          </div>
        </main>

        {/* フッター */}
        <footer className="py-6 text-center border-t border-[#e5e5e5] bg-white">
          <p className="text-[12px] text-[#999999]">© Queue Inc</p>
        </footer>
      </div>
    </>
  );
}

