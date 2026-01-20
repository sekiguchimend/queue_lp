'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import AdminSidebar from './components/AdminSidebar';
import { AuthProvider, useAuth } from './components/AuthProvider';

function AdminContent({ children }: { children: React.ReactNode }) {
  const { session, isLoading } = useAuth();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // ログインページは認証不要
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // ローディング中
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f5f6f8] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-[#1f5bb9] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-[14px] text-[#666666]">読み込み中...</p>
        </div>
      </div>
    );
  }

  // 未認証の場合はログインページにリダイレクト（AuthProvider内で処理）
  if (!session) {
    return null;
  }

  // 認証済みの場合は通常のレイアウト
  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <AdminSidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      <main className="lg:ml-[260px] min-h-screen pt-[60px] lg:pt-0">
        {children}
      </main>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <AdminContent>{children}</AdminContent>
    </AuthProvider>
  );
}
