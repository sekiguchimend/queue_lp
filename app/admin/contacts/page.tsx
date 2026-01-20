'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/app/lib/supabase';

interface Contact {
  id: string;
  company: string;
  name: string;
  email: string;
  phone?: string;
  inquiry_type: string;
  message: string;
  created_at: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContacts(data || []);
    } catch (error) {
      console.error('Error fetching contacts:', error);
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

  const exportToCSV = () => {
    const headers = ['日時', '会社名', 'お名前', 'メールアドレス', '電話番号', 'お問い合わせ項目', 'お問い合わせ内容'];
    const rows = contacts.map(contact => [
      formatDate(contact.created_at),
      contact.company,
      contact.name,
      contact.email,
      contact.phone || '',
      getInquiryTypeLabel(contact.inquiry_type),
      contact.message.replace(/\n/g, ' '),
    ]);

    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `contacts_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* ヘッダー */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 lg:mb-8">
        <div>
          <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-[#333333]">お問い合わせ管理</h1>
          <p className="text-[13px] sm:text-[14px] text-[#666666] mt-1">新着一覧</p>
        </div>
        <button
          onClick={exportToCSV}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1f5bb9] text-white text-[13px] sm:text-[14px] font-medium rounded-lg hover:bg-[#1a4f9e] transition-colors w-full sm:w-auto"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          CSVエクスポート
        </button>
      </div>

      {/* テーブル */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="p-6 sm:p-8 text-center text-[#666666]">読み込み中...</div>
          ) : contacts.length === 0 ? (
            <div className="p-6 sm:p-8 text-center text-[#666666]">お問い合わせはまだありません</div>
          ) : (
            <>
              {/* デスクトップ用テーブル */}
              <table className="w-full hidden md:table">
                <thead>
                  <tr className="border-b border-[#e5e5e5] bg-[#f9fafb]">
                    <th className="text-left px-4 lg:px-6 py-3 lg:py-4 text-[12px] lg:text-[13px] font-medium text-[#666666]">日時</th>
                    <th className="text-left px-4 lg:px-6 py-3 lg:py-4 text-[12px] lg:text-[13px] font-medium text-[#666666]">会社名</th>
                    <th className="text-left px-4 lg:px-6 py-3 lg:py-4 text-[12px] lg:text-[13px] font-medium text-[#666666]">お名前</th>
                    <th className="text-left px-4 lg:px-6 py-3 lg:py-4 text-[12px] lg:text-[13px] font-medium text-[#666666]">項目</th>
                    <th className="text-left px-4 lg:px-6 py-3 lg:py-4 text-[12px] lg:text-[13px] font-medium text-[#666666]">メール</th>
                    <th className="text-left px-4 lg:px-6 py-3 lg:py-4 text-[12px] lg:text-[13px] font-medium text-[#666666]">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact.id} className="border-b border-[#e5e5e5] hover:bg-[#f9fafb] transition-colors">
                      <td className="px-4 lg:px-6 py-3 lg:py-4 text-[13px] lg:text-[14px] text-[#333333] whitespace-nowrap">
                        {formatDate(contact.created_at)}
                      </td>
                      <td className="px-4 lg:px-6 py-3 lg:py-4 text-[13px] lg:text-[14px] text-[#333333] font-medium">
                        {contact.company}
                      </td>
                      <td className="px-4 lg:px-6 py-3 lg:py-4 text-[13px] lg:text-[14px] text-[#333333]">
                        {contact.name}
                      </td>
                      <td className="px-4 lg:px-6 py-3 lg:py-4">
                        <span className="inline-block px-2 lg:px-3 py-1 text-[11px] lg:text-[12px] font-medium text-[#1f5bb9] bg-[#e8f0fe] rounded-full whitespace-nowrap">
                          {getInquiryTypeLabel(contact.inquiry_type)}
                        </span>
                      </td>
                      <td className="px-4 lg:px-6 py-3 lg:py-4 text-[13px] lg:text-[14px] text-[#666666]">
                        {contact.email}
                      </td>
                      <td className="px-4 lg:px-6 py-3 lg:py-4">
                        <button
                          onClick={() => setSelectedContact(contact)}
                          className="text-[13px] lg:text-[14px] text-[#1f5bb9] hover:underline font-medium"
                        >
                          詳細
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* モバイル用カードリスト */}
              <div className="md:hidden divide-y divide-[#e5e5e5]">
                {contacts.map((contact) => (
                  <div 
                    key={contact.id} 
                    className="p-4 space-y-3 active:bg-[#f9fafb] cursor-pointer"
                    onClick={() => setSelectedContact(contact)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="text-[14px] font-medium text-[#333333] truncate">{contact.company}</p>
                        <p className="text-[13px] text-[#666666]">{contact.name}</p>
                      </div>
                      <span className="inline-block px-2 py-1 text-[11px] font-medium text-[#1f5bb9] bg-[#e8f0fe] rounded-full whitespace-nowrap flex-shrink-0">
                        {getInquiryTypeLabel(contact.inquiry_type)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[12px] text-[#666666]">
                      <span>{formatDate(contact.created_at)}</span>
                      <span className="text-[#1f5bb9] font-medium">詳細を見る →</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* 詳細モーダル */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
          <div className="bg-white rounded-t-xl sm:rounded-xl w-full sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 sm:p-6 border-b border-[#e5e5e5] flex items-center justify-between">
              <h2 className="text-[16px] sm:text-[18px] font-bold text-[#333333]">お問い合わせ詳細</h2>
              <button
                onClick={() => setSelectedContact(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f5f6f8] text-[#666666] hover:text-[#333333]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-4">
              <div>
                <p className="text-[11px] sm:text-[12px] text-[#666666] font-medium">日時</p>
                <p className="text-[13px] sm:text-[14px] text-[#333333] mt-1">{formatDate(selectedContact.created_at)}</p>
              </div>
              <div>
                <p className="text-[11px] sm:text-[12px] text-[#666666] font-medium">会社名</p>
                <p className="text-[13px] sm:text-[14px] text-[#333333] mt-1">{selectedContact.company}</p>
              </div>
              <div>
                <p className="text-[11px] sm:text-[12px] text-[#666666] font-medium">お名前</p>
                <p className="text-[13px] sm:text-[14px] text-[#333333] mt-1">{selectedContact.name}</p>
              </div>
              <div>
                <p className="text-[11px] sm:text-[12px] text-[#666666] font-medium">メールアドレス</p>
                <p className="text-[13px] sm:text-[14px] text-[#333333] mt-1">
                  <a href={`mailto:${selectedContact.email}`} className="text-[#1f5bb9] hover:underline break-all">
                    {selectedContact.email}
                  </a>
                </p>
              </div>
              {selectedContact.phone && (
                <div>
                  <p className="text-[11px] sm:text-[12px] text-[#666666] font-medium">電話番号</p>
                  <p className="text-[13px] sm:text-[14px] text-[#333333] mt-1">
                    <a href={`tel:${selectedContact.phone}`} className="text-[#1f5bb9] hover:underline">
                      {selectedContact.phone}
                    </a>
                  </p>
                </div>
              )}
              <div>
                <p className="text-[11px] sm:text-[12px] text-[#666666] font-medium">お問い合わせ項目</p>
                <p className="text-[13px] sm:text-[14px] text-[#333333] mt-1">
                  <span className="inline-block px-3 py-1 text-[11px] sm:text-[12px] font-medium text-[#1f5bb9] bg-[#e8f0fe] rounded-full">
                    {getInquiryTypeLabel(selectedContact.inquiry_type)}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-[11px] sm:text-[12px] text-[#666666] font-medium">お問い合わせ内容</p>
                <p className="text-[13px] sm:text-[14px] text-[#333333] mt-1 whitespace-pre-wrap bg-[#f5f6f8] rounded-lg p-3 sm:p-4">
                  {selectedContact.message}
                </p>
              </div>
            </div>
            <div className="sticky bottom-0 bg-white p-4 sm:p-6 border-t border-[#e5e5e5] flex flex-col-reverse sm:flex-row justify-end gap-3">
              <button
                onClick={() => setSelectedContact(null)}
                className="w-full sm:w-auto px-4 py-2.5 text-[13px] sm:text-[14px] font-medium text-[#666666] hover:text-[#333333] border border-[#e5e5e5] rounded-lg transition-colors"
              >
                閉じる
              </button>
              <a
                href={`mailto:${selectedContact.email}`}
                className="w-full sm:w-auto px-4 py-2.5 bg-[#1f5bb9] text-white text-[13px] sm:text-[14px] font-medium rounded-lg hover:bg-[#1a4f9e] transition-colors text-center"
              >
                メールで返信
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
