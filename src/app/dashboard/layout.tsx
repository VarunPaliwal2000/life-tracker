import "./layout.scss";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-layout-header">Tell me about your life</div>
      <main className="flex-1 p-6 text-black dark:text-white">{children}</main>
    </div>
  );
}
