"use client";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useSleepStore } from "@/hooks/useSleepStore";
import { useEffect } from "react";

export default function SleepTracker() {
  // const { sessions, setSessions } = useSleepStore();
  const { setSessions } = useSleepStore();
  const { log } = useAnalytics();

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
    <div title="Sleep Tracker">
      {/* {sessions.length === 0 ? (
        <p>No sleep data yet.</p>
      ) : (
        <ul>
          {sessions.map((s: any) => (
            <li key={s.id}>
              {s.startTime} → {s.endTime} ({s.quality})
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}
