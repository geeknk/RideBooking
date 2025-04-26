import { AdminSidebar } from '@/components/admin/sidebar';
import { AdminHeader } from '@/components/admin/header';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="flex h-[100vh]">
        <AdminSidebar />
        <div className="flex-1 flex flex-col overflow-hidden pl-72">
          <AdminHeader />
          <main className="flex-1 overflow-y-auto bg-background p-6">
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}