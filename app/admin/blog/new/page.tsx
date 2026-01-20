'use client';

export default function NewBlogPostPage() {
  return (
    <div className="p-8">
      {/* ヘッダー */}
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-[#333333]">ブログ管理</h1>
        <p className="text-[14px] text-[#666666] mt-1">新規投稿作成</p>
      </div>

      {/* 準備中メッセージ */}
      <div className="bg-white rounded-xl shadow-sm p-12 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f5f6f8] flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-[18px] font-bold text-[#333333]">準備中</h2>
        <p className="text-[14px] text-[#666666] mt-2">
          新規投稿作成機能は現在開発中です。<br />
          今後のアップデートをお待ちください。
        </p>
      </div>
    </div>
  );
}

