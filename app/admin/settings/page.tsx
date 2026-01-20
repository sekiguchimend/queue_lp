'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [siteInfo, setSiteInfo] = useState({
    siteName: 'Queue株式会社',
    siteDescription: 'AI検索時代に、"AIに選ばれる企業"をつくる。LLMO（AI SEO）事業「umoren.ai」を主軸に、AI検索・生成AIにおける認知・比較・意思決定領域を支援するテクノロジーカンパニーです。',
    siteUrl: 'https://queue-lp-rouge.vercel.app',
    companyName: 'Queue株式会社',
    companyAddress: '〒104-0061 東京都中央区銀座8丁目17-5 THE HUB 銀座 OCT',
    companyPhone: '03-5324-2678',
    companyEmail: 'info@queue-tech.jp',
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSiteInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage('');

    // 仮の保存処理（実際にはSupabaseなどに保存）
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSaveMessage('設定を保存しました');
    setIsSaving(false);

    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <div className="p-8">
      {/* ヘッダー */}
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-[#333333]">設定</h1>
        <p className="text-[14px] text-[#666666] mt-1">サイト情報</p>
      </div>

      {/* 設定フォーム */}
      <form onSubmit={handleSubmit} className="max-w-[800px]">
        {/* サイト情報 */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="p-6 border-b border-[#e5e5e5]">
            <h2 className="text-[18px] font-bold text-[#333333]">サイト基本情報</h2>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-[13px] font-medium text-[#333333] mb-2">
                サイト名
              </label>
              <input
                type="text"
                name="siteName"
                value={siteInfo.siteName}
                onChange={handleChange}
                className="w-full h-[44px] rounded-lg border border-[#e5e5e5] px-4 text-[14px] text-[#333333] outline-none focus:border-[#1f5bb9] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#333333] mb-2">
                サイト説明
              </label>
              <textarea
                name="siteDescription"
                value={siteInfo.siteDescription}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-lg border border-[#e5e5e5] px-4 py-3 text-[14px] text-[#333333] outline-none focus:border-[#1f5bb9] transition-colors resize-none"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#333333] mb-2">
                サイトURL
              </label>
              <input
                type="url"
                name="siteUrl"
                value={siteInfo.siteUrl}
                onChange={handleChange}
                className="w-full h-[44px] rounded-lg border border-[#e5e5e5] px-4 text-[14px] text-[#333333] outline-none focus:border-[#1f5bb9] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* 会社情報 */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="p-6 border-b border-[#e5e5e5]">
            <h2 className="text-[18px] font-bold text-[#333333]">会社情報</h2>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-[13px] font-medium text-[#333333] mb-2">
                会社名
              </label>
              <input
                type="text"
                name="companyName"
                value={siteInfo.companyName}
                onChange={handleChange}
                className="w-full h-[44px] rounded-lg border border-[#e5e5e5] px-4 text-[14px] text-[#333333] outline-none focus:border-[#1f5bb9] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#333333] mb-2">
                所在地
              </label>
              <input
                type="text"
                name="companyAddress"
                value={siteInfo.companyAddress}
                onChange={handleChange}
                className="w-full h-[44px] rounded-lg border border-[#e5e5e5] px-4 text-[14px] text-[#333333] outline-none focus:border-[#1f5bb9] transition-colors"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-medium text-[#333333] mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  name="companyPhone"
                  value={siteInfo.companyPhone}
                  onChange={handleChange}
                  className="w-full h-[44px] rounded-lg border border-[#e5e5e5] px-4 text-[14px] text-[#333333] outline-none focus:border-[#1f5bb9] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#333333] mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  name="companyEmail"
                  value={siteInfo.companyEmail}
                  onChange={handleChange}
                  className="w-full h-[44px] rounded-lg border border-[#e5e5e5] px-4 text-[14px] text-[#333333] outline-none focus:border-[#1f5bb9] transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 保存ボタン */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-3 bg-[#1f5bb9] text-white text-[14px] font-medium rounded-lg hover:bg-[#1a4f9e] transition-colors disabled:opacity-50"
          >
            {isSaving ? '保存中...' : '設定を保存'}
          </button>
          {saveMessage && (
            <span className="text-[14px] text-green-600 font-medium">{saveMessage}</span>
          )}
        </div>
      </form>
    </div>
  );
}

