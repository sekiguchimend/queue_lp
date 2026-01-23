'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BlogHub, BlogSubHub, BlogSubHubFormData } from '@/app/lib/blog-types';

export default function EditSubHubPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [subHub, setSubHub] = useState<BlogSubHub | null>(null);
  const [hubs, setHubs] = useState<BlogHub[]>([]);
  const [formData, setFormData] = useState<BlogSubHubFormData>({
    hub_id: '',
    slug: '',
    title: '',
    description: '',
    status: 'draft',
  });

  useEffect(() => {
    Promise.all([fetchSubHub(), fetchHubs()]);
  }, [id]);

  const fetchSubHub = async () => {
    try {
      const res = await fetch(`/api/admin/sub-hubs/${id}`);
      if (res.ok) {
        const data = await res.json();
        setSubHub(data.data);
        setFormData({
          hub_id: data.data.hub_id,
          slug: data.data.slug,
          title: data.data.title,
          description: data.data.description || '',
          title_en: data.data.title_en,
          description_en: data.data.description_en,
          status: data.data.status,
        });
      } else {
        setError('サブハブが見つかりません');
      }
    } catch (err) {
      setError('データの取得に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  const fetchHubs = async () => {
    try {
      const res = await fetch('/api/admin/hubs');
      const data = await res.json();
      setHubs(data.data || []);
    } catch (error) {
      console.error('Error fetching hubs:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const res = await fetch(`/api/admin/sub-hubs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/admin/blog/sub-hubs');
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

  const selectedHub = hubs.find((h) => h.id === formData.hub_id);

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

  if (!subHub) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="text-center py-12">
          <p className="text-[#666666]">{error || 'サブハブが見つかりません'}</p>
          <Link href="/admin/blog/sub-hubs" className="mt-4 text-[#1f5bb9] hover:underline inline-block">
            サブハブ一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <Link href="/admin/blog/sub-hubs" className="text-[13px] text-[#666666] hover:text-[#1f5bb9] mb-2 inline-block">
          ← サブハブ一覧に戻る
        </Link>
        <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-[#333333]">サブハブを編集</h1>
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
              親ハブ <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.hub_id}
              onChange={(e) => setFormData({ ...formData, hub_id: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
              required
            >
              <option value="">ハブを選択...</option>
              {hubs.map((hub) => (
                <option key={hub.id} value={hub.id}>
                  {hub.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#333333] mb-2">
              タイトル (日本語) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
              placeholder="例: ChatGPT"
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
              placeholder="例: ChatGPT"
            />
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#333333] mb-2">
              スラッグ <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center">
              <span className="text-[14px] text-[#666666] mr-2">
                /blog/{selectedHub?.slug || '[hub]'}/
              </span>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="flex-1 px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                placeholder="例: chatgpt"
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
              placeholder="このサブハブの説明を入力..."
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
              href="/admin/blog/sub-hubs"
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
