'use client';

import { useState } from 'react';
import { submitContact, ContactFormData } from '@/app/lib/supabase';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    
    const data: ContactFormData = {
      company: formData.get('company') as string,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: (formData.get('phone') as string) || undefined,
      inquiry_type: formData.get('inquiryType') as string,
      message: formData.get('message') as string,
      privacy_agreed: formData.get('privacyAgreement') === 'on',
    };

    try {
      await submitContact(data);
      setSubmitStatus('success');
      // フォームをリセット
      e.currentTarget.reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : '送信に失敗しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#f5f6f8] py-12 md:py-20">
      <div className="mx-auto w-full max-w-[800px] px-4 md:px-8">
        {/* タイトル */}
        <header className="text-center">
          <h2 className="text-[32px] md:text-[42px] font-semibold text-[#333333]">Contact</h2>
          <div className="mx-auto mt-2 h-[3px] w-[40px] bg-[#1f5bb9]"></div>
          <p className="mt-2 md:mt-3 text-[12px] md:text-[14px] font-bold text-[#666666]">お問い合わせ</p>
        </header>

        {/* 送信成功メッセージ */}
        {submitStatus === 'success' && (
          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
            <p className="text-green-800 font-medium">お問い合わせを受け付けました。</p>
            <p className="text-green-600 text-sm mt-1">担当者より折り返しご連絡いたします。</p>
          </div>
        )}

        {/* エラーメッセージ */}
        {submitStatus === 'error' && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
            <p className="text-red-800 font-medium">送信に失敗しました。</p>
            <p className="text-red-600 text-sm mt-1">{errorMessage || 'しばらく経ってから再度お試しください。'}</p>
          </div>
        )}

        {/* フォーム */}
        <form onSubmit={handleSubmit} className="mt-8 md:mt-12 space-y-6 md:space-y-6">
          {/* 会社名 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8">
            <div className="flex w-full md:w-[180px] shrink-0 items-center gap-2 md:gap-3">
              <span className="rounded px-2 py-1 text-[10px] md:text-[11px] font-bold text-white bg-[#1f5bb9]">
                必須
              </span>
              <label htmlFor="company" className="text-[12px] md:text-[14px] font-medium text-[#333333]">会社名</label>
            </div>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="株式会社テキストテキスト"
              className="w-full h-[44px] rounded-[8px] border border-[#5E6C84] px-4 text-[14px] text-[#333333] placeholder-[#999999] outline-none focus:border-[#1f5bb9]"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* お名前 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8">
            <div className="flex w-full md:w-[180px] shrink-0 items-center gap-2 md:gap-3">
              <span className="rounded px-2 py-1 text-[10px] md:text-[11px] font-bold text-white bg-[#1f5bb9]">
                必須
              </span>
              <label htmlFor="name" className="text-[12px] md:text-[14px] font-medium text-[#333333]">お名前</label>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="山田　太郎"
              className="w-full h-[44px] rounded-[8px] border border-[#5E6C84] px-4 text-[14px] text-[#333333] placeholder-[#999999] outline-none focus:border-[#1f5bb9]"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* メールアドレス */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8">
            <div className="flex w-full md:w-[180px] shrink-0 items-center gap-2 md:gap-3">
              <span className="rounded px-2 py-1 text-[10px] md:text-[11px] font-bold text-white bg-[#1f5bb9]">
                必須
              </span>
              <label htmlFor="email" className="text-[12px] md:text-[14px] font-medium text-[#333333]">メールアドレス</label>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="info@mail.co.jp"
              className="w-full h-[44px] rounded-[8px] border border-[#5E6C84] px-4 text-[14px] text-[#333333] placeholder-[#999999] outline-none focus:border-[#1f5bb9]"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* 電話番号 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8">
            <div className="flex w-full md:w-[180px] shrink-0 items-center gap-2 md:gap-3">
              <span className="rounded px-2 py-1 text-[10px] md:text-[11px] font-bold text-white bg-[#5E6C84]">
                任意
              </span>
              <label htmlFor="phone" className="text-[12px] md:text-[14px] font-medium text-[#333333]">電話番号</label>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="03-1234-5678"
              className="w-full h-[44px] rounded-[8px] border border-[#5E6C84] px-4 text-[14px] text-[#333333] placeholder-[#999999] outline-none focus:border-[#1f5bb9]"
              disabled={isSubmitting}
            />
          </div>

          {/* お問い合わせ項目 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8">
            <div className="flex w-full md:w-[180px] shrink-0 items-center gap-2 md:gap-3">
              <span className="rounded px-2 py-1 text-[10px] md:text-[11px] font-bold text-white bg-[#1f5bb9]">
                必須
              </span>
              <label htmlFor="inquiry-type" className="text-[12px] md:text-[14px] font-medium text-[#333333]">お問い合わせ項目</label>
            </div>
            <select
              id="inquiry-type"
              name="inquiryType"
              className="w-full md:w-[280px] h-[44px] rounded-[8px] border border-[#5E6C84] px-4 text-[14px] text-[#333333] outline-none focus:border-[#1f5bb9] bg-white appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath fill='none' stroke='%235E6C84' stroke-width='2' stroke-linecap='round' d='M2 3l3 4 3-4'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
              }}
              required
              disabled={isSubmitting}
            >
              <option value="">選択してください</option>
              <option value="ai-development">AI開発について</option>
              <option value="llmo">LLMOサービスについて</option>
              <option value="consultation">導入相談・お見積り</option>
              <option value="partnership">協業・パートナーシップ</option>
              <option value="recruit">採用について</option>
              <option value="media">取材・メディア掲載</option>
              <option value="other">その他</option>
            </select>
          </div>

          {/* お問い合わせ内容 */}
          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-8">
            <div className="flex w-full md:w-[180px] shrink-0 items-center gap-2 md:gap-3 md:pt-3">
              <span className="rounded px-2 py-1 text-[10px] md:text-[11px] font-bold text-white bg-[#1f5bb9]">
                必須
              </span>
              <label htmlFor="message" className="text-[12px] md:text-[14px] font-medium text-[#333333]">お問い合わせ内容</label>
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="お問い合わせ内容をご入力ください。"
              className="w-full h-[120px] rounded-[8px] border border-[#5E6C84] px-4 py-3 text-[14px] text-[#333333] placeholder-[#999999] outline-none focus:border-[#1f5bb9] resize-none"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* 同意チェックボックス */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-8 pt-2 md:pt-4">
            <div className="hidden md:block w-[180px] shrink-0"></div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="privacy-agreement"
                name="privacyAgreement"
                className="h-4 w-4 rounded border-[#5E6C84]"
                required
                disabled={isSubmitting}
              />
              <label htmlFor="privacy-agreement" className="text-[11px] md:text-[13px] text-[#333333]">
                <a href="/privacy" target="_blank" className="text-[#1f5bb9] underline hover:no-underline">個人情報保護方針</a>に同意する
              </label>
            </div>
          </div>

          {/* 送信ボタン */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-8 pt-2 md:pt-4">
            <div className="hidden md:block w-[180px] shrink-0"></div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative flex items-center justify-center w-[230px] h-[52px] md:h-[64px] rounded-[3px] text-[14px] md:text-[15px] font-bold text-white transition-opacity disabled:opacity-50"
              style={{ background: 'linear-gradient(90deg, #0952A1 0%, #3144BD 49.52%, #6D1D93 100%)' }}
            >
              {isSubmitting ? '送信中...' : '送信する'}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-full bg-white">
                {isSubmitting ? (
                  <svg className="animate-spin h-3 w-3 text-[#3144BD]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#3144BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
