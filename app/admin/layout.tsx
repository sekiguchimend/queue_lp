import AdminSidebar from './components/AdminSidebar';

export const metadata = {
  title: '管理画面 | Queue株式会社',
  description: 'Queue株式会社の管理画面',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <AdminSidebar />
      <main className="ml-[260px] min-h-screen">
        {children}
      </main>
    </div>
  );
}

