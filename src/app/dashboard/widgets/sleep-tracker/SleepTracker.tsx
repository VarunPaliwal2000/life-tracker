"use client";
import { Card } from "@/components/UI/Card";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useSleepStore } from "@/hooks/useSleepStore";
import { useEffect } from "react";

export default function SleepTracker() {
  const { sessions, setSessions } = useSleepStore();
  const { log } = useAnalytics();

  useEffect(() => {
    async function fetchSessions() {
      const res = await fetch("/api/widgets/sleep-tracker");
      const data = await res.json();
      setSessions(data);
      log("load_sleep_sessions", { count: data.length });
    }
    fetchSessions();
  }, []);

  return (
    <Card title="Sleep Tracker">
      {sessions.length === 0 ? (
        <p>No sleep data yet.</p>
      ) : (
        <ul>
          {sessions.map((s: any) => (
            <li key={s.id}>
              {s.startTime} → {s.endTime} ({s.quality})
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
