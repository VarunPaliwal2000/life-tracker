export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">Sidebar</aside>
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
        {children}
      </main>
    </div>
  );
}