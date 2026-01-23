'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BlogHub, BlogSubHub, BlogPostFormData, PostType, slugify } from '@/app/lib/blog-types';
import TinyMCEEditor from '@/app/components/TinyMCEEditor';

export default function NewPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hubs, setHubs] = useState<BlogHub[]>([]);
  const [subHubs, setSubHubs] = useState<BlogSubHub[]>([]);
  const [filteredSubHubs, setFilteredSubHubs] = useState<BlogSubHub[]>([]);
  const [uploadingThumbnail, setUploadingThumbnail] = useState(false);
  const [formData, setFormData] = useState<BlogPostFormData>({
    type: 'standalone',
    hub_id: null,
    sub_hub_id: null,
    slug: '',
    title: '',
    excerpt: '',
    content: '',
    status: 'draft',
    published_at: null,
    meta_title: '',
    meta_description: '',
    og_image_url: '',
    canonical_url: '',
    thumbnail_url: '',
    thumbnail_alt: '',
    thumbnail_description: '',
    is_pickup: false,
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (formData.hub_id) {
      setFilteredSubHubs(subHubs.filter((sh) => sh.hub_id === formData.hub_id));
    } else {
      setFilteredSubHubs([]);
    }
  }, [formData.hub_id, subHubs]);

  const fetchData = async () => {
    try {
      const [hubsRes, subHubsRes] = await Promise.all([
        fetch('/api/admin/hubs'),
        fetch('/api/admin/sub-hubs'),
      ]);
      const hubsData = await hubsRes.json();
      const subHubsData = await subHubsRes.json();
      setHubs(hubsData.data || []);
      setSubHubs(subHubsData.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: formData.slug || slugify(title),
    });
  };

  const handleTypeChange = (type: PostType) => {
    const updates: Partial<BlogPostFormData> = { type };
    if (type === 'standalone') {
      updates.hub_id = null;
      updates.sub_hub_id = null;
    } else if (type === 'hub_post') {
      updates.sub_hub_id = null;
    }
    setFormData({ ...formData, ...updates });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/admin/blog');
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
        <Link href="/admin/blog" className="text-[13px] text-[#666666] hover:text-[#1f5bb9] mb-2 inline-block">
          ← ダッシュボードに戻る
        </Link>
        <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-[#333333]">新規投稿作成</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-7xl">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-[14px] mb-6">
            {error}
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - moved to top on mobile, left on desktop */}
          <div className="lg:order-2 space-y-6">
            {/* Publish Settings */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-[16px] font-bold text-[#333333]">公開設定</h2>

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

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">
                  公開日時
                </label>
                <input
                  type="datetime-local"
                  value={formData.published_at || ''}
                  onChange={(e) => setFormData({ ...formData, published_at: e.target.value || null })}
                  className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                />
                <p className="text-[12px] text-[#999999] mt-1">空の場合、公開時に自動設定されます</p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="is_pickup"
                  checked={formData.is_pickup}
                  onChange={(e) => setFormData({ ...formData, is_pickup: e.target.checked })}
                  className="w-4 h-4 text-[#1f5bb9] border-[#e5e5e5] rounded focus:ring-[#1f5bb9]"
                />
                <label htmlFor="is_pickup" className="text-[14px] text-[#333333]">
                  ピックアップ記事にする
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-[#1f5bb9] text-white text-[14px] font-medium rounded-lg hover:bg-[#1a4f9e] transition-colors disabled:opacity-50"
              >
                {loading ? '作成中...' : '投稿を作成'}
              </button>
              <Link
                href="/admin/blog"
                className="block w-full px-6 py-3 border border-[#e5e5e5] text-[#666666] text-[14px] font-medium rounded-lg hover:bg-[#f5f6f8] transition-colors text-center"
              >
                キャンセル
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 lg:order-1 space-y-6">
            {/* Post Type */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-[16px] font-bold text-[#333333] mb-4">投稿タイプ</h2>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: 'standalone', label: 'スタンドアロン', desc: 'カテゴリーなしの単独記事' },
                  { value: 'hub_post', label: 'ハブ投稿', desc: 'ハブに紐付いた記事' },
                  { value: 'sub_hub_post', label: 'サブハブ投稿', desc: 'サブハブに紐付いた記事' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex-1 min-w-[150px] p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      formData.type === option.value
                        ? 'border-[#1f5bb9] bg-[#1f5bb9]/5'
                        : 'border-[#e5e5e5] hover:border-[#1f5bb9]/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="type"
                      value={option.value}
                      checked={formData.type === option.value}
                      onChange={() => handleTypeChange(option.value as PostType)}
                      className="sr-only"
                    />
                    <div className="text-[14px] font-medium text-[#333333]">{option.label}</div>
                    <div className="text-[12px] text-[#666666] mt-1">{option.desc}</div>
                  </label>
                ))}
              </div>

              {/* Hub/SubHub Selection */}
              {formData.type !== 'standalone' && (
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] font-medium text-[#333333] mb-2">
                      ハブ <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.hub_id || ''}
                      onChange={(e) => setFormData({ ...formData, hub_id: e.target.value || null, sub_hub_id: null })}
                      className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                      required={formData.type !== 'standalone'}
                    >
                      <option value="">ハブを選択...</option>
                      {hubs.map((hub) => (
                        <option key={hub.id} value={hub.id}>
                          {hub.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formData.type === 'sub_hub_post' && (
                    <div>
                      <label className="block text-[14px] font-medium text-[#333333] mb-2">
                        サブハブ <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.sub_hub_id || ''}
                        onChange={(e) => setFormData({ ...formData, sub_hub_id: e.target.value || null })}
                        className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                        required={formData.type === 'sub_hub_post'}
                        disabled={!formData.hub_id}
                      >
                        <option value="">サブハブを選択...</option>
                        {filteredSubHubs.map((subHub) => (
                          <option key={subHub.id} value={subHub.id}>
                            {subHub.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Basic Info */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-[16px] font-bold text-[#333333]">基本情報</h2>

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">
                  タイトル <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                  placeholder="記事のタイトル"
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
                    placeholder="article-slug"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">
                  概要
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                  placeholder="記事の短い説明..."
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">
                  本文
                </label>
                <TinyMCEEditor
                  value={formData.content}
                  onChange={(content) => setFormData({ ...formData, content })}
                  height={600}
                />
              </div>
            </div>

            {/* Thumbnail */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-[16px] font-bold text-[#333333]">サムネイル</h2>

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">
                  サムネイル画像をアップロード
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    setUploadingThumbnail(true);
                    try {
                      const uploadFormData = new FormData();
                      uploadFormData.append('file', file);

                      const res = await fetch('/api/admin/upload', {
                        method: 'POST',
                        body: uploadFormData,
                      });

                      if (res.ok) {
                        const data = await res.json();
                        setFormData(prev => ({ ...prev, thumbnail_url: data.url }));
                      } else {
                        const error = await res.json();
                        alert(error.error || 'アップロードに失敗しました');
                      }
                    } catch (err) {
                      alert('アップロードに失敗しました');
                    } finally {
                      setUploadingThumbnail(false);
                    }
                  }}
                  disabled={uploadingThumbnail}
                  className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9] disabled:opacity-50"
                />
                {uploadingThumbnail && (
                  <p className="text-[12px] text-[#666666] mt-1">アップロード中...</p>
                )}
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">
                  または、サムネイルURL
                </label>
                <input
                  type="url"
                  value={formData.thumbnail_url}
                  onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {formData.thumbnail_url && (
                <div>
                  <img
                    src={formData.thumbnail_url}
                    alt="Preview"
                    className="max-w-full h-auto rounded-lg border border-[#e5e5e5]"
                    style={{ maxHeight: '200px' }}
                  />
                </div>
              )}

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">
                  サムネイルAlt
                </label>
                <input
                  type="text"
                  value={formData.thumbnail_alt}
                  onChange={(e) => setFormData({ ...formData, thumbnail_alt: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                  placeholder="画像の説明"
                />
              </div>
            </div>

            {/* SEO */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-[16px] font-bold text-[#333333]">SEO設定</h2>

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">
                  メタタイトル
                  <span className="text-[12px] text-[#999999] ml-2">
                    {formData.meta_title.length}/60文字
                  </span>
                </label>
                <input
                  type="text"
                  value={formData.meta_title}
                  onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                  placeholder="検索結果に表示されるタイトル"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">
                  メタディスクリプション
                  <span className="text-[12px] text-[#999999] ml-2">
                    {formData.meta_description.length}/160文字
                  </span>
                </label>
                <textarea
                  value={formData.meta_description}
                  onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                  placeholder="検索結果に表示される説明"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">
                  OG画像URL
                </label>
                <input
                  type="url"
                  value={formData.og_image_url}
                  onChange={(e) => setFormData({ ...formData, og_image_url: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                  placeholder="SNSシェア時に表示される画像"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
