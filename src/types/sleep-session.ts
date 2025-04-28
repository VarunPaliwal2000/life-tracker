export type SleepSession = {
  id: string;
  userId: string;
  startTime: string;
  endTime: string;
  quality: "poor" | "fair" | "good";
};