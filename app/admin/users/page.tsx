'use client';

export default function UsersPage() {
  return (
    <div className="p-8">
      {/* ヘッダー */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-[#333333]">ユーザー管理</h1>
          <p className="text-[14px] text-[#666666] mt-1">管理者アカウント</p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-[#1f5bb9] text-white text-[14px] font-medium rounded-lg hover:bg-[#1a4f9e] transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          新規追加
        </button>
      </div>

      {/* 準備中メッセージ */}
      <div className="bg-white rounded-xl shadow-sm p-12 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f5f6f8] flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-[18px] font-bold text-[#333333]">準備中</h2>
        <p className="text-[14px] text-[#666666] mt-2">
          管理者アカウント機能は現在開発中です。<br />
          今後のアップデートをお待ちください。
        </p>
      </div>
    </div>
  );
}

