export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#f5f6f8] py-12 md:py-20">
      <div className="mx-auto w-full max-w-[800px] px-4 md:px-8">
        {/* タイトル */}
        <div className="text-center">
          <h2 className="text-[32px] md:text-[42px] font-semibold text-[#333333]">Contact</h2>
          <div className="mx-auto mt-2 h-[3px] w-[40px] bg-[#1f5bb9]"></div>
          <p className="mt-2 md:mt-3 text-[12px] md:text-[14px] font-bold text-[#666666]">お問い合わせ</p>
        </div>

        {/* フォーム */}
        <form className="mt-8 md:mt-12 space-y-4 md:space-y-6">
          {/* 会社名 */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
            <div className="flex w-full md:w-[180px] items-center gap-2 md:gap-3">
              <span className="rounded px-2 py-1 text-[10px] md:text-[11px] font-bold text-white bg-[#1f5bb9]">
                必須
              </span>
              <span className="text-[12px] md:text-[14px] text-[#333333]">会社名</span>
            </div>
            <input
              type="text"
              placeholder="株式会社テキストテキスト"
              className="flex-1 h-[40px] md:h-[44px] rounded-md border border-[#5E6C84] px-3 md:px-4 text-[12px] md:text-[14px] text-[#333333] placeholder-[#999999] outline-none focus:border-[#1f5bb9]"
            />
          </div>

          {/* お名前 */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
            <div className="flex w-full md:w-[180px] items-center gap-2 md:gap-3">
              <span className="rounded px-2 py-1 text-[10px] md:text-[11px] font-bold text-white bg-[#1f5bb9]">
                必須
              </span>
              <span className="text-[12px] md:text-[14px] text-[#333333]">お名前</span>
            </div>
            <input
              type="text"
              placeholder="山田　太郎"
              className="flex-1 h-[40px] md:h-[44px] rounded-md border border-[#5E6C84] px-3 md:px-4 text-[12px] md:text-[14px] text-[#333333] placeholder-[#999999] outline-none focus:border-[#1f5bb9]"
            />
          </div>

          {/* メールアドレス */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
            <div className="flex w-full md:w-[180px] items-center gap-2 md:gap-3">
              <span className="rounded px-2 py-1 text-[10px] md:text-[11px] font-bold text-white bg-[#1f5bb9]">
                必須
              </span>
              <span className="text-[12px] md:text-[14px] text-[#333333]">メールアドレス</span>
            </div>
            <input
              type="email"
              placeholder="info@mail.co.jp"
              className="flex-1 h-[40px] md:h-[44px] rounded-md border border-[#5E6C84] px-3 md:px-4 text-[12px] md:text-[14px] text-[#333333] placeholder-[#999999] outline-none focus:border-[#1f5bb9]"
            />
          </div>

          {/* 電話番号 */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
            <div className="flex w-full md:w-[180px] items-center gap-2 md:gap-3">
              <span className="rounded px-2 py-1 text-[10px] md:text-[11px] font-bold text-white bg-[#5E6C84]">
                任意
              </span>
              <span className="text-[12px] md:text-[14px] text-[#333333]">電話番号</span>
            </div>
            <input
              type="tel"
              placeholder="03-1234-5678"
              className="flex-1 h-[40px] md:h-[44px] rounded-md border border-[#5E6C84] px-3 md:px-4 text-[12px] md:text-[14px] text-[#333333] placeholder-[#999999] outline-none focus:border-[#1f5bb9]"
            />
          </div>

          {/* お問い合わせ項目 */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
            <div className="flex w-full md:w-[180px] items-center gap-2 md:gap-3">
              <span className="rounded px-2 py-1 text-[10px] md:text-[11px] font-bold text-white bg-[#1f5bb9]">
                必須
              </span>
              <span className="text-[12px] md:text-[14px] text-[#333333]">お問い合わせ項目</span>
            </div>
            <select
              className="w-full md:w-[200px] h-[40px] md:h-[44px] rounded-md border border-[#5E6C84] px-3 md:px-4 text-[12px] md:text-[14px] text-[#999999] outline-none focus:border-[#1f5bb9] bg-white appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath fill='none' stroke='%235E6C84' stroke-width='2' stroke-linecap='round' d='M2 3l3 4 3-4'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
              }}
            >
              <option>選択してください</option>
            </select>
          </div>

          {/* お問い合わせ内容 */}
          <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
            <div className="flex w-full md:w-[180px] items-center gap-2 md:gap-3 md:pt-3">
              <span className="rounded px-2 py-1 text-[10px] md:text-[11px] font-bold text-white bg-[#1f5bb9]">
                必須
              </span>
              <span className="text-[12px] md:text-[14px] text-[#333333]">お問い合わせ内容</span>
            </div>
            <textarea
              placeholder="お問い合わせ内容をご入力ください。"
              className="flex-1 h-[100px] md:h-[120px] rounded-md border border-[#5E6C84] px-3 md:px-4 py-2 md:py-3 text-[12px] md:text-[14px] text-[#333333] placeholder-[#999999] outline-none focus:border-[#1f5bb9] resize-none"
            />
          </div>

          {/* 同意チェックボックス */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 pt-2 md:pt-4">
            <div className="hidden md:block w-[180px]"></div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-[#5E6C84]"
              />
              <span className="text-[11px] md:text-[13px] text-[#333333]">個人情報保護方針に同意する</span>
            </div>
          </div>

          {/* 送信ボタン */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 pt-2 md:pt-4">
            <div className="hidden md:block w-[180px]"></div>
            <button
              type="submit"
              className="relative flex items-center justify-center w-full md:w-[230px] h-[52px] md:h-[64px] rounded-[3px] text-[14px] md:text-[15px] font-bold text-white"
              style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
            >
              送信する
              <span className="absolute right-4 top-1/2 -translate-y-1/2 flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-full bg-white">
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
