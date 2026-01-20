'use client';

import Link from 'next/link';

export default function NewsListPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* ヘッダー */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 lg:mb-8">
        <div>
          <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-[#333333]">ニュース管理</h1>
          <p className="text-[13px] sm:text-[14px] text-[#666666] mt-1">投稿一覧</p>
        </div>
        <Link
          href="/admin/news/new"
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1f5bb9] text-white text-[13px] sm:text-[14px] font-medium rounded-lg hover:bg-[#1a4f9e] transition-colors w-full sm:w-auto"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          新規投稿
        </Link>
      </div>

      {/* 準備中メッセージ */}
      <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 text-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-[#f5f6f8] flex items-center justify-center">
          <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4H15C16.1046 4 17 4.89543 17 6V7" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 7H21V18C21 19.1046 20.1046 20 19 20V20" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 8H13" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 12H13" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 16H10" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-[16px] sm:text-[18px] font-bold text-[#333333]">準備中</h2>
        <p className="text-[13px] sm:text-[14px] text-[#666666] mt-2">
          ニュース投稿一覧機能は現在開発中です。<br />
          今後のアップデートをお待ちください。
        </p>
      </div>
    </div>
  );
}
