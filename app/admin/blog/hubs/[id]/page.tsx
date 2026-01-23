'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BlogHub, BlogHubFormData, slugify } from '@/app/lib/blog-types';

export default function EditHubPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hub, setHub] = useState<BlogHub | null>(null);
  const [formData, setFormData] = useState<BlogHubFormData>({
    slug: '',
    title: '',
    description: '',
    status: 'draft',
  });

  useEffect(() => {
    fetchHub();
  }, [id]);

  const fetchHub = async () => {
    try {
      const res = await fetch(`/api/admin/hubs/${id}`);
      if (res.ok) {
        const data = await res.json();
        setHub(data.data);
        setFormData({
          slug: data.data.slug,
          title: data.data.title,
          description: data.data.description || '',
          title_en: data.data.title_en,
          description_en: data.data.description_en,
          status: data.data.status,
        });
      } else {
        setError('ハブが見つかりません');
      }
    } catch (err) {
      setError('データの取得に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const res = await fetch(`/api/admin/hubs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/admin/blog/hubs');
      } else {
        const data = await res.json();
        setError(data.error || '更新に失敗しました');
      }
    } catch (err) {
      setError('更新に失敗しました');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!hub) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="text-center py-12">
          <p className="text-[#666666]">{error || 'ハブが見つかりません'}</p>
          <Link href="/admin/blog/hubs" className="mt-4 text-[#1f5bb9] hover:underline inline-block">
            ハブ一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <Link href="/admin/blog/hubs" className="text-[13px] text-[#666666] hover:text-[#1f5bb9] mb-2 inline-block">
          ← ハブ一覧に戻る
        </Link>
        <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-[#333333]">ハブを編集</h1>
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
              タイトル (日本語) <span className="text-red-500">*</span>
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
              タイトル (英語)
            </label>
            <input
              type="text"
              value={formData.title_en || ''}
              onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
              placeholder="例: LLM Visibility"
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
              説明 (日本語)
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
              説明 (英語)
            </label>
            <textarea
              value={formData.description_en || ''}
              onChange={(e) => setFormData({ ...formData, description_en: e.target.value })}
              rows={4}
              className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
              placeholder="Description in English..."
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
              disabled={saving}
              className="px-6 py-2.5 bg-[#1f5bb9] text-white text-[14px] font-medium rounded-lg hover:bg-[#1a4f9e] transition-colors disabled:opacity-50"
            >
              {saving ? '保存中...' : '変更を保存'}
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
