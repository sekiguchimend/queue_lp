'use client';

export default function RepliedContactsPage() {
  return (
    <div className="p-8">
      {/* ヘッダー */}
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-[#333333]">お問い合わせ管理</h1>
        <p className="text-[14px] text-[#666666] mt-1">返信済み一覧</p>
      </div>

      {/* 準備中メッセージ */}
      <div className="bg-white rounded-xl shadow-sm p-12 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f5f6f8] flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 4L12 14.01L9 11.01" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-[18px] font-bold text-[#333333]">準備中</h2>
        <p className="text-[14px] text-[#666666] mt-2">
          返信済み一覧機能は現在開発中です。<br />
          今後のアップデートをお待ちください。
        </p>
      </div>
    </div>
  );
}

