import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
  return (
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
        {/* タイトル */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-[28px] md:text-[36px] font-bold text-[#333333]">
            個人情報保護方針
          </h1>
          <div className="mx-auto mt-3 h-[3px] w-[60px] bg-[#1f5bb9]"></div>
          <p className="mt-4 text-[12px] md:text-[14px] text-[#666666]">
            Privacy Policy
          </p>
        </div>

        {/* 本文 */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-10 space-y-8">
          <p className="text-[14px] md:text-[15px] text-[#333333] leading-relaxed">
            Queue株式会社（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と認識し、以下の方針に基づき個人情報の適切な取り扱いと保護に努めます。
          </p>

          {/* 第1条 */}
          <section>
            <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">1</span>
              個人情報の定義
            </h2>
            <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
              本方針において「個人情報」とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別できるもの、または個人識別符号が含まれるものをいいます。
            </p>
          </section>

          {/* 第2条 */}
          <section>
            <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">2</span>
              個人情報の収集
            </h2>
            <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
              当社は、適法かつ公正な手段により、必要な範囲で個人情報を収集します。収集にあたっては、利用目的を明示し、ご本人の同意を得た上で行います。
            </p>
          </section>

          {/* 第3条 */}
          <section>
            <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">3</span>
              個人情報の利用目的
            </h2>
            <div className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
              <p className="mb-2">当社は、収集した個人情報を以下の目的で利用します。</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>お問い合わせへの対応</li>
                <li>サービスの提供・運営</li>
                <li>サービスに関するご案内・情報提供</li>
                <li>契約の履行・管理</li>
                <li>サービスの改善・新サービスの開発</li>
                <li>その他、上記に付随する業務</li>
              </ul>
            </div>
          </section>

          {/* 第4条 */}
          <section>
            <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">4</span>
              個人情報の第三者提供
            </h2>
            <div className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
              <p className="mb-2">当社は、以下の場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要な場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために必要な場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに協力する場合</li>
              </ul>
            </div>
          </section>

          {/* 第5条 */}
          <section>
            <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">5</span>
              個人情報の安全管理
            </h2>
            <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
              当社は、個人情報の漏えい、滅失またはき損の防止その他の個人情報の安全管理のために、必要かつ適切な措置を講じます。また、従業員に対して個人情報保護に関する教育・啓発を行い、個人情報の適切な取り扱いを徹底します。
            </p>
          </section>

          {/* 第6条 */}
          <section>
            <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">6</span>
              個人情報の開示・訂正・削除
            </h2>
            <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
              ご本人から個人情報の開示、訂正、削除、利用停止等のご請求があった場合は、ご本人であることを確認した上で、合理的な期間内に対応いたします。
            </p>
          </section>

          {/* 第7条 */}
          <section>
            <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">7</span>
              Cookieの使用について
            </h2>
            <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
              当社のウェブサイトでは、サービスの利便性向上やアクセス状況の分析のためにCookieを使用することがあります。Cookieの使用を希望されない場合は、ブラウザの設定により無効にすることができます。
            </p>
          </section>

          {/* 第8条 */}
          <section>
            <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">8</span>
              本方針の変更
            </h2>
            <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
              当社は、法令の改正や社会情勢の変化等に応じて、本方針を変更することがあります。変更後の方針は、当社ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>
          </section>

          {/* 第9条 */}
          <section>
            <h2 className="text-[16px] md:text-[18px] font-bold text-[#333333] mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1f5bb9] text-white text-[12px] font-bold">9</span>
              お問い合わせ窓口
            </h2>
            <div className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-9">
              <p className="mb-3">個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。</p>
              <div className="bg-[#f5f6f8] rounded-lg p-4">
                <p className="font-bold text-[#333333]">Queue株式会社</p>
                <p className="mt-1">お問い合わせ窓口</p>
                <p className="mt-2">
                  <Link href="/#contact" className="text-[#1f5bb9] underline hover:no-underline">
                    お問い合わせフォームはこちら
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* 制定日 */}
          <div className="pt-6 border-t border-[#e5e5e5] text-right">
            <p className="text-[13px] md:text-[14px] text-[#555555]">
              制定日：2026年1月19日
            </p>
            <p className="text-[14px] md:text-[15px] font-bold text-[#333333] mt-2">
              Queue株式会社
            </p>
          </div>
        </div>

        {/* 戻るリンク */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] font-bold text-[#1f5bb9] hover:underline"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="#1f5bb9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            トップページへ戻る
          </Link>
        </div>
      </main>

      {/* フッター */}
      <footer className="relative pb-8 md:pb-12 pt-10 md:pt-16" style={{ background: 'linear-gradient(180deg, #F4F7FB 0%, #E9EEF9 40%, #BEC8E2 100%)' }}>
        <div className="mx-auto w-full max-w-[800px] px-4 md:px-8 text-center">
          {/* ロゴ */}
          <div className="flex justify-center">
            <Link href="/" aria-label="ホームへ戻る">
              <Image
                src="/asset/logo.png"
                alt="QUEUE"
                width={80}
                height={64}
                className="h-auto w-[60px] md:w-[80px]"
              />
            </Link>
          </div>

          {/* ナビゲーションリンク */}
          <nav className="mt-6 md:mt-8 flex items-center justify-center gap-6 md:gap-10 text-[12px] md:text-[13px] font-bold text-[#666666]" aria-label="フッターナビゲーション">
            <Link href="/company" className="hover:text-[#1f5bb9] transition-colors">会社概要</Link>
            <Link href="/#contact" className="hover:text-[#1f5bb9] transition-colors">お問い合わせ</Link>
            <Link href="/privacy" className="hover:text-[#1f5bb9] transition-colors">個人情報保護方針</Link>
          </nav>

          {/* コピーライト */}
          <p className="mt-4 md:mt-6 text-[10px] md:text-[12px] text-[#999999]">© Queue Inc</p>
        </div>

        {/* 上に戻るボタン */}
        <a
          href="#"
          className="absolute right-4 md:right-6 bottom-4 md:bottom-6 flex h-[36px] w-[36px] md:h-[44px] md:w-[44px] items-center justify-center rounded-full bg-white text-[#7a869f] shadow-md hover:shadow-lg transition-shadow"
          aria-label="ページ上部へ"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[12px] md:w-[16px] h-auto">
            <path d="M8 3V13M8 3L3 8M8 3L13 8" stroke="#7a869f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </footer>
    </div>
  );
}

