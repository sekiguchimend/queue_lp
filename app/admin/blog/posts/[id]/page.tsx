'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BlogHub, BlogSubHub, BlogPost, BlogPostFormData, PostType } from '@/app/lib/blog-types';
import TinyMCEEditor from '@/app/components/TinyMCEEditor';

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [hubs, setHubs] = useState<BlogHub[]>([]);
  const [subHubs, setSubHubs] = useState<BlogSubHub[]>([]);
  const [filteredSubHubs, setFilteredSubHubs] = useState<BlogSubHub[]>([]);
  const [uploadingThumbnail, setUploadingThumbnail] = useState(false);
  const [uploadingThumbnailEn, setUploadingThumbnailEn] = useState(false);
  const [translating, setTranslating] = useState(false);
  const [translationMessage, setTranslationMessage] = useState<string | null>(null);
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
  }, [id]);

  useEffect(() => {
    if (formData.hub_id) {
      setFilteredSubHubs(subHubs.filter((sh) => sh.hub_id === formData.hub_id));
    } else {
      setFilteredSubHubs([]);
    }
  }, [formData.hub_id, subHubs]);

  const fetchData = async () => {
    try {
      const [postRes, hubsRes, subHubsRes] = await Promise.all([
        fetch(`/api/admin/posts/${id}`),
        fetch('/api/admin/hubs'),
        fetch('/api/admin/sub-hubs'),
      ]);

      if (!postRes.ok) {
        setError('投稿が見つかりません');
        setLoading(false);
        return;
      }

      const postData = await postRes.json();
      const hubsData = await hubsRes.json();
      const subHubsData = await subHubsRes.json();

      setPost(postData.data);
      setHubs(hubsData.data || []);
      setSubHubs(subHubsData.data || []);

      const p = postData.data;
      setFormData({
        type: p.type,
        hub_id: p.hub_id,
        sub_hub_id: p.sub_hub_id,
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt || '',
        content: p.content || '',
        status: p.status,
        published_at: p.published_at ? p.published_at.slice(0, 16) : null,
        meta_title: p.meta_title || '',
        meta_description: p.meta_description || '',
        og_image_url: p.og_image_url || '',
        canonical_url: p.canonical_url || '',
        thumbnail_url: p.thumbnail_url || '',
        thumbnail_alt: p.thumbnail_alt || '',
        thumbnail_description: p.thumbnail_description || '',
        is_pickup: p.is_pickup,
        title_en: p.title_en,
        excerpt_en: p.excerpt_en,
        content_en: p.content_en,
        meta_title_en: p.meta_title_en,
        meta_description_en: p.meta_description_en,
        thumbnail_url_en: p.thumbnail_url_en,
        thumbnail_alt_en: p.thumbnail_alt_en,
        thumbnail_description_en: p.thumbnail_description_en,
      });
    } catch (err) {
      setError('データの取得に失敗しました');
    } finally {
      setLoading(false);
    }
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

  const handleTranslate = async () => {
    setTranslating(true);
    setTranslationMessage(null);
    setError(null);

    try {
      const res = await fetch('/api/admin/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId: id }),
      });

      const data = await res.json();

      if (res.ok) {
        // Update form data with translations
        setFormData(prev => ({
          ...prev,
          title_en: data.translations.title_en,
          excerpt_en: data.translations.excerpt_en,
          content_en: data.translations.content_en,
          meta_title_en: data.translations.meta_title_en,
          meta_description_en: data.translations.meta_description_en,
          thumbnail_alt_en: data.translations.thumbnail_alt_en,
          thumbnail_description_en: data.translations.thumbnail_description_en,
        }));
        setTranslationMessage('翻訳が完了しました！');
      } else {
        setError(data.error || '翻訳に失敗しました');
      }
    } catch (err) {
      setError('翻訳に失敗しました');
    } finally {
      setTranslating(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const res = await fetch(`/api/admin/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/admin/blog');
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
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6 h-48"></div>
              <div className="bg-white rounded-xl shadow-sm p-6 h-96"></div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 h-64"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="text-center py-12">
          <p className="text-[#666666]">{error || '投稿が見つかりません'}</p>
          <Link href="/admin/blog" className="mt-4 text-[#1f5bb9] hover:underline inline-block">
            ダッシュボードに戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <Link href="/admin/blog" className="text-[13px] text-[#666666] hover:text-[#1f5bb9] mb-2 inline-block">
          ← ダッシュボードに戻る
        </Link>
        <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-[#333333]">投稿を編集</h1>
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
                <label className="block text-[14px] font-medium text-[#333333] mb-2">ステータス</label>
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
                <label className="block text-[14px] font-medium text-[#333333] mb-2">公開日時</label>
                <input
                  type="datetime-local"
                  value={formData.published_at || ''}
                  onChange={(e) => setFormData({ ...formData, published_at: e.target.value || null })}
                  className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                />
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
                disabled={saving}
                className="w-full px-6 py-3 bg-[#1f5bb9] text-white text-[14px] font-medium rounded-lg hover:bg-[#1a4f9e] transition-colors disabled:opacity-50"
              >
                {saving ? '保存中...' : '変更を保存'}
              </button>
              <button
                type="button"
                onClick={handleTranslate}
                disabled={translating || saving}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#10b981] to-[#059669] text-white text-[14px] font-medium rounded-lg hover:from-[#059669] hover:to-[#047857] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {translating ? (
                  <>
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    翻訳中...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    日本語→英語に翻訳 (AI)
                  </>
                )}
              </button>
              {translationMessage && (
                <p className="text-[12px] text-[#10b981] text-center">{translationMessage}</p>
              )}
              <Link
                href="/admin/blog"
                className="block w-full px-6 py-3 border border-[#e5e5e5] text-[#666666] text-[14px] font-medium rounded-lg hover:bg-[#f5f6f8] transition-colors text-center"
              >
                キャンセル
              </Link>
              <a
                href={`/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 border border-[#1f5bb9] text-[#1f5bb9] text-[14px] font-medium rounded-lg hover:bg-[#1f5bb9]/5 transition-colors text-center"
              >
                プレビュー
              </a>
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

            {/* Basic Info - Japanese */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-[16px] font-bold text-[#333333]">基本情報 (日本語)</h2>

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">
                  タイトル <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
                <label className="block text-[14px] font-medium text-[#333333] mb-2">概要</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                  placeholder="記事の短い説明..."
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">本文</label>
                <TinyMCEEditor
                  value={formData.content}
                  onChange={(content) => setFormData({ ...formData, content })}
                  height={600}
                />
              </div>
            </div>

            {/* English Translations */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-[16px] font-bold text-[#333333]">英語翻訳</h2>
                <span className="text-[12px] text-[#999999] bg-[#f5f6f8] px-2 py-1 rounded">
                  公開時に自動翻訳 / 右のボタンで手動翻訳
                </span>
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">Title (English)</label>
                <input
                  type="text"
                  value={formData.title_en || ''}
                  onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                  placeholder="Article title in English"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">Excerpt (English)</label>
                <textarea
                  value={formData.excerpt_en || ''}
                  onChange={(e) => setFormData({ ...formData, excerpt_en: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                  placeholder="Short description in English..."
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">Content (English)</label>
                <TinyMCEEditor
                  value={formData.content_en || ''}
                  onChange={(content) => setFormData({ ...formData, content_en: content })}
                  height={600}
                />
              </div>
            </div>

            {/* Thumbnail */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-[16px] font-bold text-[#333333]">サムネイル</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] font-medium text-[#333333] mb-2">サムネイル画像をアップロード (日本語)</label>
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
                  <label className="block text-[14px] font-medium text-[#333333] mb-2">Thumbnail Image Upload (English)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      setUploadingThumbnailEn(true);
                      try {
                        const uploadFormData = new FormData();
                        uploadFormData.append('file', file);

                        const res = await fetch('/api/admin/upload', {
                          method: 'POST',
                          body: uploadFormData,
                        });

                        if (res.ok) {
                          const data = await res.json();
                          setFormData(prev => ({ ...prev, thumbnail_url_en: data.url }));
                        } else {
                          const error = await res.json();
                          alert(error.error || 'Upload failed');
                        }
                      } catch (err) {
                        alert('Upload failed');
                      } finally {
                        setUploadingThumbnailEn(false);
                      }
                    }}
                    disabled={uploadingThumbnailEn}
                    className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9] disabled:opacity-50"
                  />
                  {uploadingThumbnailEn && (
                    <p className="text-[12px] text-[#666666] mt-1">Uploading...</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] font-medium text-[#333333] mb-2">または、サムネイルURL (日本語)</label>
                  <input
                    type="url"
                    value={formData.thumbnail_url}
                    onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                    placeholder="https://..."
                  />
                  {formData.thumbnail_url && (
                    <img
                      src={formData.thumbnail_url}
                      alt="Preview"
                      className="mt-2 max-w-full h-auto rounded-lg border border-[#e5e5e5]"
                      style={{ maxHeight: '150px' }}
                    />
                  )}
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-[#333333] mb-2">Or, Thumbnail URL (English)</label>
                  <input
                    type="url"
                    value={formData.thumbnail_url_en || ''}
                    onChange={(e) => setFormData({ ...formData, thumbnail_url_en: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                    placeholder="https://..."
                  />
                  {formData.thumbnail_url_en && (
                    <img
                      src={formData.thumbnail_url_en}
                      alt="Preview"
                      className="mt-2 max-w-full h-auto rounded-lg border border-[#e5e5e5]"
                      style={{ maxHeight: '150px' }}
                    />
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] font-medium text-[#333333] mb-2">サムネイルAlt (日本語)</label>
                  <input
                    type="text"
                    value={formData.thumbnail_alt}
                    onChange={(e) => setFormData({ ...formData, thumbnail_alt: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                    placeholder="画像の説明"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-[#333333] mb-2">Thumbnail Alt (English)</label>
                  <input
                    type="text"
                    value={formData.thumbnail_alt_en || ''}
                    onChange={(e) => setFormData({ ...formData, thumbnail_alt_en: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                    placeholder="Image description"
                  />
                </div>
              </div>
            </div>

            {/* SEO */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-[16px] font-bold text-[#333333]">SEO設定</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] font-medium text-[#333333] mb-2">
                    メタタイトル (日本語)
                    <span className="text-[12px] text-[#999999] ml-2">{formData.meta_title.length}/60</span>
                  </label>
                  <input
                    type="text"
                    value={formData.meta_title}
                    onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-[#333333] mb-2">
                    Meta Title (English)
                    <span className="text-[12px] text-[#999999] ml-2">{(formData.meta_title_en || '').length}/60</span>
                  </label>
                  <input
                    type="text"
                    value={formData.meta_title_en || ''}
                    onChange={(e) => setFormData({ ...formData, meta_title_en: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] font-medium text-[#333333] mb-2">
                    メタディスクリプション (日本語)
                    <span className="text-[12px] text-[#999999] ml-2">{formData.meta_description.length}/160</span>
                  </label>
                  <textarea
                    value={formData.meta_description}
                    onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-[#333333] mb-2">
                    Meta Description (English)
                    <span className="text-[12px] text-[#999999] ml-2">{(formData.meta_description_en || '').length}/160</span>
                  </label>
                  <textarea
                    value={formData.meta_description_en || ''}
                    onChange={(e) => setFormData({ ...formData, meta_description_en: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1f5bb9]/20 focus:border-[#1f5bb9]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#333333] mb-2">OG画像URL</label>
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
