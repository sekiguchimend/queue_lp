'use client';

import Link from 'next/link';

export default function BlogListPage() {
  return (
    <div className="p-8">
      {/* ヘッダー */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-[#333333]">ブログ管理</h1>
          <p className="text-[14px] text-[#666666] mt-1">投稿一覧</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 px-4 py-2 bg-[#1f5bb9] text-white text-[14px] font-medium rounded-lg hover:bg-[#1a4f9e] transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          新規投稿
        </Link>
      </div>

      {/* 準備中メッセージ */}
      <div className="bg-white rounded-xl shadow-sm p-12 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f5f6f8] flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2V8H20" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 13H8" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 17H8" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 9H9H8" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-[18px] font-bold text-[#333333]">準備中</h2>
        <p className="text-[14px] text-[#666666] mt-2">
          ブログ投稿一覧機能は現在開発中です。<br />
          今後のアップデートをお待ちください。
        </p>
      </div>
    </div>
  );
}

