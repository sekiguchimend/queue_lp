'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BlogHub } from '@/app/lib/blog-types';

export default function HubsListPage() {
  const [hubs, setHubs] = useState<BlogHub[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetchHubs();
  }, []);

  const fetchHubs = async () => {
    try {
      const res = await fetch('/api/admin/hubs');
      const data = await res.json();
      setHubs(data.data || []);
    } catch (error) {
      console.error('Error fetching hubs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('このハブを削除してもよろしいですか？関連するサブハブと投稿も影響を受けます。')) {
      return;
    }

    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/hubs/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setHubs(hubs.filter((h) => h.id !== id));
      } else {
        alert('削除に失敗しました');
      }
    } catch (error) {
      console.error('Error deleting hub:', error);
      alert('削除に失敗しました');
    } finally {
      setDeleting(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP');
  };

  if (loading) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="bg-white rounded-xl shadow-sm">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-6 border-b border-gray-100">
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 lg:mb-8">
        <div>
          <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-[#333333]">ハブ管理</h1>
          <p className="text-[13px] sm:text-[14px] text-[#666666] mt-1">ブログのカテゴリーを管理</p>
        </div>
        <Link
          href="/admin/blog/hubs/new"
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1f5bb9] text-white text-[13px] sm:text-[14px] font-medium rounded-lg hover:bg-[#1a4f9e] transition-colors w-full sm:w-auto"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          新規ハブ
        </Link>
      </div>

      {/* Hubs List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#f5f6f8]">
            <tr>
              <th className="text-left text-[13px] font-medium text-[#666666] px-6 py-4">タイトル</th>
              <th className="text-left text-[13px] font-medium text-[#666666] px-6 py-4">スラッグ</th>
              <th className="text-left text-[13px] font-medium text-[#666666] px-6 py-4">ステータス</th>
              <th className="text-left text-[13px] font-medium text-[#666666] px-6 py-4">作成日</th>
              <th className="text-right text-[13px] font-medium text-[#666666] px-6 py-4">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e5e5e5]">
            {hubs.map((hub) => (
              <tr key={hub.id} className="hover:bg-[#f5f6f8] transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <Link
                      href={`/admin/blog/hubs/${hub.id}`}
                      className="text-[14px] font-medium text-[#333333] hover:text-[#1f5bb9]"
                    >
                      {hub.title}
                    </Link>
                    {hub.title_en && (
                      <p className="text-[12px] text-[#999999]">{hub.title_en}</p>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <code className="text-[13px] text-[#666666] bg-[#f5f6f8] px-2 py-1 rounded">
                    /blog/{hub.slug}
                  </code>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[12px] px-2 py-1 rounded ${
                    hub.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {hub.status === 'published' ? '公開' : '下書き'}
                  </span>
                </td>
                <td className="px-6 py-4 text-[13px] text-[#666666]">
                  {formatDate(hub.created_at)}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/blog/hubs/${hub.id}`}
                      className="text-[13px] text-[#1f5bb9] hover:underline"
                    >
                      編集
                    </Link>
                    <button
                      onClick={() => handleDelete(hub.id)}
                      disabled={deleting === hub.id}
                      className="text-[13px] text-red-500 hover:underline disabled:opacity-50"
                    >
                      {deleting === hub.id ? '削除中...' : '削除'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {hubs.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <p className="text-[#666666]">まだハブがありません</p>
                  <Link
                    href="/admin/blog/hubs/new"
                    className="inline-block mt-4 text-[#1f5bb9] hover:underline"
                  >
                    最初のハブを作成する
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
