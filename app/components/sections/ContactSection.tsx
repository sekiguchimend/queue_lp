import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#f5f6f8] py-20">
      <div className="mx-auto w-full max-w-[900px] px-10 text-center">
        <p className="text-[26px] font-semibold text-[#3b3b3b]">Contact</p>
        <p className="mt-2 text-[12px] text-[#6b6b6b]">お問い合わせ</p>

        <form className="mt-10 space-y-5 text-left text-sm text-[#3b3b3b]">
          {[
            { label: "会社名", required: true, placeholder: "株式会社テキストテキスト" },
            { label: "お名前", required: true, placeholder: "山田　太郎" },
            { label: "メールアドレス", required: true, placeholder: "info@mail.co.jp" },
            { label: "電話番号", required: false, placeholder: "03-1234-5678" },
          ].map((field) => (
            <div key={field.label} className="grid grid-cols-[120px_1fr] items-center gap-6">
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-[4px] px-2 py-[2px] text-[10px] font-semibold ${
                    field.required ? "bg-[#1f5bb9] text-white" : "bg-[#6c7386] text-white"
                  }`}
                >
                  {field.required ? "必須" : "任意"}
                </span>
                <span>{field.label}</span>
              </div>
              <input
                className="h-[36px] w-full rounded-[6px] border border-[#c4c9d5] px-3 text-sm outline-none"
                placeholder={field.placeholder}
              />
            </div>
          ))}

          <div className="grid grid-cols-[120px_1fr] items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="rounded-[4px] bg-[#1f5bb9] px-2 py-[2px] text-[10px] font-semibold text-white">
                必須
              </span>
              <span>お問い合わせ項目</span>
            </div>
            <select className="h-[36px] w-full rounded-[6px] border border-[#c4c9d5] px-3 text-sm outline-none">
              <option>選択してください</option>
            </select>
          </div>

          <div className="grid grid-cols-[120px_1fr] items-start gap-6">
            <div className="flex items-center gap-2 pt-2">
              <span className="rounded-[4px] bg-[#1f5bb9] px-2 py-[2px] text-[10px] font-semibold text-white">
                必須
              </span>
              <span>お問い合わせ内容</span>
            </div>
            <textarea
              className="h-[120px] w-full rounded-[6px] border border-[#c4c9d5] px-3 py-2 text-sm outline-none"
              placeholder="お問い合わせ内容をご入力ください。"
            />
          </div>

          <div className="flex items-center justify-center gap-2 text-[12px] text-[#6b6b6b]">
            <input type="checkbox" className="h-4 w-4 rounded border-[#c4c9d5]" />
            <span>個人情報保護方針に同意する</span>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="flex items-center gap-3 rounded-[10px] bg-gradient-to-r from-[#1f5bb9] to-[#6a3ec8] px-10 py-3 text-sm font-semibold text-white shadow-[0_8px_16px_rgba(32,78,170,0.3)]"
            >
              送信する
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#1f5bb9]">
                →
              </span>
            </button>
          </div>
        </form>

        <div className="mt-16 flex justify-center">
          <Image
            src="/asset/Group 1225.png"
            alt="QUEUE"
            width={70}
            height={28}
            className="h-auto w-[70px]"
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-8 text-[12px] text-[#6b6b6b]">
          <a href="#company">会社概要</a>
          <a href="#contact">お問い合わせ</a>
        </div>

        <p className="mt-4 text-[10px] text-[#8b8b8b]">© Queue Inc</p>
      </div>
    </section>
  );
}
