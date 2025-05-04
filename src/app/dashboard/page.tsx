import GymTracker from "./widgets/gym-tracker/GymTracker";
// import SleepTracker from "./widgets/sleep-tracker/SleepTracker";

export default function DashboardPage() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* <SleepTracker /> */}
      <GymTracker />
      {/* <GymTracker />
      <GymTracker />
      <GymTracker /> */}
    </div>
  );
}
