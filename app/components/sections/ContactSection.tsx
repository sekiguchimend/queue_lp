export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#f5f6f8] py-20">
      <div className="mx-auto w-full max-w-[800px] px-8">
        {/* タイトル */}
        <div className="text-center">
          <h2 className="text-[42px] font-semibold text-[#333333]">Contact</h2>
          <div className="mx-auto mt-2 h-[3px] w-[40px] bg-[#1f5bb9]"></div>
          <p className="mt-3 text-[14px] font-bold text-[#666666]">お問い合わせ</p>
        </div>

        {/* フォーム */}
        <form className="mt-12 space-y-6">
          {/* 会社名 */}
          <div className="flex items-center gap-8">
            <div className="flex w-[180px] items-center gap-3">
              <span className="rounded px-2 py-1 text-[11px] font-bold text-white bg-[#1f5bb9]">
                必須
              </span>
              <span className="text-[14px] text-[#333333]">会社名</span>
            </div>
            <input
              type="text"
              placeholder="株式会社テキストテキスト"
              className="flex-1 h-[44px] rounded-md border border-[#5E6C84] px-4 text-[14px] text-[#333333] placeholder-[#999999] outline-none focus:border-[#1f5bb9]"
            />
          </div>

          {/* お名前 */}
          <div className="flex items-center gap-8">
            <div className="flex w-[180px] items-center gap-3">
              <span className="rounded px-2 py-1 text-[11px] font-bold text-white bg-[#1f5bb9]">
                必須
              </span>
              <span className="text-[14px] text-[#333333]">お名前</span>
            </div>
            <input
              type="text"
              placeholder="山田　太郎"
              className="flex-1 h-[44px] rounded-md border border-[#5E6C84] px-4 text-[14px] text-[#333333] placeholder-[#999999] outline-none focus:border-[#1f5bb9]"
            />
          </div>

          {/* メールアドレス */}
          <div className="flex items-center gap-8">
            <div className="flex w-[180px] items-center gap-3">
              <span className="rounded px-2 py-1 text-[11px] font-bold text-white bg-[#1f5bb9]">
                必須
              </span>
              <span className="text-[14px] text-[#333333]">メールアドレス</span>
            </div>
            <input
              type="email"
              placeholder="info@mail.co.jp"
              className="flex-1 h-[44px] rounded-md border border-[#5E6C84] px-4 text-[14px] text-[#333333] placeholder-[#999999] outline-none focus:border-[#1f5bb9]"
            />
          </div>

          {/* 電話番号 */}
          <div className="flex items-center gap-8">
            <div className="flex w-[180px] items-center gap-3">
              <span className="rounded px-2 py-1 text-[11px] font-bold text-white bg-[#5E6C84]">
                任意
              </span>
              <span className="text-[14px] text-[#333333]">電話番号</span>
            </div>
            <input
              type="tel"
              placeholder="03-1234-5678"
              className="flex-1 h-[44px] rounded-md border border-[#5E6C84] px-4 text-[14px] text-[#333333] placeholder-[#999999] outline-none focus:border-[#1f5bb9]"
            />
          </div>

          {/* お問い合わせ項目 */}
          <div className="flex items-center gap-8">
            <div className="flex w-[180px] items-center gap-3">
              <span className="rounded px-2 py-1 text-[11px] font-bold text-white bg-[#1f5bb9]">
                必須
              </span>
              <span className="text-[14px] text-[#333333]">お問い合わせ項目</span>
            </div>
            <select className="w-[200px] h-[44px] rounded-md border border-[#5E6C84] px-4 text-[14px] text-[#999999] outline-none focus:border-[#1f5bb9] bg-white">
              <option>選択してください</option>
            </select>
          </div>

          {/* お問い合わせ内容 */}
          <div className="flex items-start gap-8">
            <div className="flex w-[180px] items-center gap-3 pt-3">
              <span className="rounded px-2 py-1 text-[11px] font-bold text-white bg-[#1f5bb9]">
                必須
              </span>
              <span className="text-[14px] text-[#333333]">お問い合わせ内容</span>
            </div>
            <textarea
              placeholder="お問い合わせ内容をご入力ください。"
              className="flex-1 h-[120px] rounded-md border border-[#5E6C84] px-4 py-3 text-[14px] text-[#333333] placeholder-[#999999] outline-none focus:border-[#1f5bb9] resize-none"
            />
          </div>

          {/* 同意チェックボックス */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-[#5E6C84]"
            />
            <span className="text-[13px] text-[#333333]">個人情報保護方針に同意する</span>
          </div>

          {/* 送信ボタン */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="relative flex items-center justify-center w-[230px] h-[64px] rounded-[3px] text-[15px] font-bold text-white"
              style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
            >
              送信する
              <span className="absolute right-4 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#3144BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
