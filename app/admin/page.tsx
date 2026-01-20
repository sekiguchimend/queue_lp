'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/app/lib/supabase';

interface DashboardStats {
  totalContacts: number;
  newContacts: number;
  repliedContacts: number;
  todayContacts: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalContacts: 0,
    newContacts: 0,
    repliedContacts: 0,
    todayContacts: 0,
  });
  const [recentContacts, setRecentContacts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // 全お問い合わせ数を取得
      const { count: totalCount } = await supabase
        .from('contacts')
        .select('*', { count: 'exact', head: true });

      // 今日のお問い合わせ数を取得
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const { count: todayCount } = await supabase
        .from('contacts')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', today.toISOString());

      // 最新のお問い合わせを取得
      const { data: recent } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      setStats({
        totalContacts: totalCount || 0,
        newContacts: totalCount || 0,
        repliedContacts: 0,
        todayContacts: todayCount || 0,
      });
      setRecentContacts(recent || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getInquiryTypeLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      'ai-development': 'AI開発について',
      'llmo': 'LLMOサービスについて',
      'consultation': '導入相談・お見積り',
      'partnership': '協業・パートナーシップ',
      'recruit': '採用について',
      'media': '取材・メディア掲載',
      'other': 'その他',
    };
    return labels[type] || type;
  };

  return (
    <div className="p-8">
      {/* ヘッダー */}
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-[#333333]">Dashboard</h1>
        <p className="text-[14px] text-[#666666] mt-1">管理画面のダッシュボード</p>
      </div>

      {/* 統計カード */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* 総お問い合わせ数 */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] text-[#666666] font-medium">総お問い合わせ数</p>
              <p className="text-[32px] font-bold text-[#333333] mt-1">
                {isLoading ? '-' : stats.totalContacts}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#e8f0fe] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#1f5bb9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="#1f5bb9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* 本日のお問い合わせ */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] text-[#666666] font-medium">本日のお問い合わせ</p>
              <p className="text-[32px] font-bold text-[#333333] mt-1">
                {isLoading ? '-' : stats.todayContacts}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#fef3e8] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 2V6" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 2V6" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 10H21" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* 新着（未対応） */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] text-[#666666] font-medium">新着（未対応）</p>
              <p className="text-[32px] font-bold text-[#333333] mt-1">
                {isLoading ? '-' : stats.newContacts}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#fef2f2] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16H12.01" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* 対応済み */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] text-[#666666] font-medium">対応済み</p>
              <p className="text-[32px] font-bold text-[#333333] mt-1">
                {isLoading ? '-' : stats.repliedContacts}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#f0fdf4] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 4L12 14.01L9 11.01" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 最新のお問い合わせ */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-[#e5e5e5]">
          <h2 className="text-[18px] font-bold text-[#333333]">最新のお問い合わせ</h2>
        </div>
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="p-8 text-center text-[#666666]">読み込み中...</div>
          ) : recentContacts.length === 0 ? (
            <div className="p-8 text-center text-[#666666]">お問い合わせはまだありません</div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="text-left px-6 py-4 text-[13px] font-medium text-[#666666]">日時</th>
                  <th className="text-left px-6 py-4 text-[13px] font-medium text-[#666666]">会社名</th>
                  <th className="text-left px-6 py-4 text-[13px] font-medium text-[#666666]">お名前</th>
                  <th className="text-left px-6 py-4 text-[13px] font-medium text-[#666666]">項目</th>
                  <th className="text-left px-6 py-4 text-[13px] font-medium text-[#666666]">メール</th>
                </tr>
              </thead>
              <tbody>
                {recentContacts.map((contact) => (
                  <tr key={contact.id} className="border-b border-[#e5e5e5] hover:bg-[#f9fafb] transition-colors">
                    <td className="px-6 py-4 text-[14px] text-[#333333]">
                      {formatDate(contact.created_at)}
                    </td>
                    <td className="px-6 py-4 text-[14px] text-[#333333] font-medium">
                      {contact.company}
                    </td>
                    <td className="px-6 py-4 text-[14px] text-[#333333]">
                      {contact.name}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 text-[12px] font-medium text-[#1f5bb9] bg-[#e8f0fe] rounded-full">
                        {getInquiryTypeLabel(contact.inquiry_type)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[14px] text-[#666666]">
                      {contact.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {recentContacts.length > 0 && (
          <div className="p-4 border-t border-[#e5e5e5]">
            <a
              href="/admin/contacts"
              className="text-[14px] text-[#1f5bb9] hover:underline font-medium"
            >
              すべてのお問い合わせを見る →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

