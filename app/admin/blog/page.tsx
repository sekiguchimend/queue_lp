'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BlogPost, BlogHub, BlogSubHub } from '@/app/lib/blog-types';

interface Stats {
  totalPosts: number;
  totalHubs: number;
  totalSubHubs: number;
  draftPosts: number;
  publishedPosts: number;
}

export default function BlogDashboardPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [hubs, setHubs] = useState<BlogHub[]>([]);
  const [subHubs, setSubHubs] = useState<BlogSubHub[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<Stats>({
    totalPosts: 0,
    totalHubs: 0,
    totalSubHubs: 0,
    draftPosts: 0,
    publishedPosts: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [postsRes, hubsRes, subHubsRes] = await Promise.all([
        fetch('/api/admin/posts'),
        fetch('/api/admin/hubs'),
        fetch('/api/admin/sub-hubs'),
      ]);

      const postsData = await postsRes.json();
      const hubsData = await hubsRes.json();
      const subHubsData = await subHubsRes.json();

      setPosts(postsData.data || []);
      setHubs(hubsData.data || []);
      setSubHubs(subHubsData.data || []);

      const postsList = postsData.data || [];
      setStats({
        totalPosts: postsList.length,
        totalHubs: (hubsData.data || []).length,
        totalSubHubs: (subHubsData.data || []).length,
        draftPosts: postsList.filter((p: BlogPost) => p.status === 'draft').length,
        publishedPosts: postsList.filter((p: BlogPost) => p.status === 'published').length,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('ja-JP');
  };

  if (loading) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded-xl"></div>
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
          <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-[#333333]">ブログ管理</h1>
          <p className="text-[13px] sm:text-[14px] text-[#666666] mt-1">ダッシュボード</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/admin/blog/posts/new"
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1f5bb9] text-white text-[13px] sm:text-[14px] font-medium rounded-lg hover:bg-[#1a4f9e] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            新規投稿
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="text-[13px] text-[#666666]">総投稿数</div>
          <div className="text-[28px] font-bold text-[#333333] mt-1">{stats.totalPosts}</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="text-[13px] text-[#666666]">公開済み</div>
          <div className="text-[28px] font-bold text-green-600 mt-1">{stats.publishedPosts}</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="text-[13px] text-[#666666]">下書き</div>
          <div className="text-[28px] font-bold text-orange-500 mt-1">{stats.draftPosts}</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="text-[13px] text-[#666666]">ハブ</div>
          <div className="text-[28px] font-bold text-[#1f5bb9] mt-1">{stats.totalHubs}</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="text-[13px] text-[#666666]">サブハブ</div>
          <div className="text-[28px] font-bold text-purple-600 mt-1">{stats.totalSubHubs}</div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Link
          href="/admin/blog/hubs"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#1f5bb9]/10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#1f5bb9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-[#333333]">ハブ管理</h3>
              <p className="text-[13px] text-[#666666]">カテゴリーを管理する</p>
            </div>
          </div>
        </Link>
        <Link
          href="/admin/blog/sub-hubs"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-[#333333]">サブハブ管理</h3>
              <p className="text-[13px] text-[#666666]">サブカテゴリーを管理する</p>
            </div>
          </div>
        </Link>
        <Link
          href="/admin/blog/posts/new"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-[#333333]">新規投稿作成</h3>
              <p className="text-[13px] text-[#666666]">新しいブログ記事を書く</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-[#e5e5e5] flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-[#333333]">最近の投稿</h2>
          <Link href="/admin/blog" className="text-[13px] text-[#1f5bb9] hover:underline">
            すべて表示
          </Link>
        </div>
        <div className="divide-y divide-[#e5e5e5]">
          {posts.slice(0, 5).map((post) => (
            <div key={post.id} className="p-6 flex items-center justify-between hover:bg-[#f5f6f8] transition-colors">
              <div className="flex-1 min-w-0">
                <Link
                  href={`/admin/blog/posts/${post.id}`}
                  className="text-[14px] font-medium text-[#333333] hover:text-[#1f5bb9] truncate block"
                >
                  {post.title}
                </Link>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-[12px] px-2 py-0.5 rounded ${
                    post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {post.status === 'published' ? '公開' : '下書き'}
                  </span>
                  <span className="text-[12px] text-[#666666]">{formatDate(post.created_at)}</span>
                </div>
              </div>
              <Link
                href={`/admin/blog/posts/${post.id}`}
                className="text-[13px] text-[#1f5bb9] hover:underline ml-4"
              >
                編集
              </Link>
            </div>
          ))}
          {posts.length === 0 && (
            <div className="p-8 text-center">
              <p className="text-[#666666]">まだ投稿がありません</p>
              <Link
                href="/admin/blog/posts/new"
                className="inline-block mt-4 text-[#1f5bb9] hover:underline"
              >
                最初の投稿を作成する
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
