"use client";
import { Card } from "@/components/UI/Card/Card";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useSleepStore } from "@/hooks/useSleepStore";
import { useEffect } from "react";
import { useGymTrackerColumns } from "./useGymTrackerColumns";

export default function GymTracker() {
  //   const { sessions, setSessions } = useSleepStore();
  const { setSessions } = useSleepStore();
  const { log } = useAnalytics();
  const {
    workoutData,
    workoutColumns,
    latestWorkoutSynopsis,
    latestWorkoutColumns,
  } = useGymTrackerColumns();
  console.log(workoutData, workoutColumns, " workoutData, workoutColumns");
  useEffect(() => {
    async function fetchSessions() {
      const res = await fetch("/api/widgets/sleep-tracker");
      const data = await res.json();
      setSessions(data);
      log("load_sleep_sessions", { count: data.length });
    }
    fetchSessions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card
      title="Gym Tracker"
      workoutData={workoutData}
      workoutColumns={workoutColumns}
      latestWorkoutSynopsis ={ latestWorkoutSynopsis}
      latestWorkoutColumns={latestWorkoutColumns}
    />
  );
}
