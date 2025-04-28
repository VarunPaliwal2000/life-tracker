import SleepTracker from "./widgets/sleep-tracker/SleepTracker";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <SleepTracker />
    </div>
  );
}