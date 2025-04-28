export async function getSleepSessions(userId: string) {
  return [
    {
      id: "1",
      userId,
      startTime: "2025-04-24T22:30",
      endTime: "2025-04-25T06:30",
      quality: "good",
    },
  ];
}