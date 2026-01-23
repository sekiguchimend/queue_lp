'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BlogHubFormData, slugify } from '@/app/lib/blog-types';

export default function NewHubPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<BlogHubFormData>({
    slug: '',
    title: '',
    description: '',
    status: 'draft',
  });

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: formData.slug || slugify(title),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/admin/hubs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/admin/blog/hubs');
      } else {
        const data = await res.json();
        setError(data.error || '作成に失敗しました');
      }
    } catch (err) {
      setError('作成に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <Link href="/admin/blog/hubs" className="text-[13px] text-[#666666] hover:text-[#1f5bb9] mb-2 inline-block">
          ← ハブ一覧に戻る
        </Link>
        <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-[#333333]">新規ハブ作成</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-[14px]">
              {error}
            </div>
          )}

          <div>
            <label className="block text-[14px] font-medium text-[#333333] mb-2">
              タイトル <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
              placeholder="例: LLM可視化"
              required
            />
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#333333] mb-2">
              スラッグ <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center">
              <span className="text-[14px] text-[#666666] mr-2">/blog/</span>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="flex-1 px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                placeholder="例: llm-visibility"
                required
              />
            </div>
            <p className="text-[12px] text-[#999999] mt-1">URLに使用される文字列（英数字とハイフンのみ）</p>
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#333333] mb-2">
              説明
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
              placeholder="このハブの説明を入力..."
            />
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#333333] mb-2">
              ステータス
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' })}
              className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
            >
              <option value="draft">下書き</option>
              <option value="published">公開</option>
            </select>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-[#e5e5e5]">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 bg-[#1f5bb9] text-white text-[14px] font-medium rounded-lg hover:bg-[#1a4f9e] transition-colors disabled:opacity-50"
            >
              {loading ? '作成中...' : 'ハブを作成'}
            </button>
            <Link
              href="/admin/blog/hubs"
              className="px-6 py-2.5 border border-[#e5e5e5] text-[#666666] text-[14px] font-medium rounded-lg hover:bg-[#f5f6f8] transition-colors"
            >
              キャンセル
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
