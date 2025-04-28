export function Card({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="rounded-2xl shadow p-4 bg-white dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}