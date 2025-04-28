import { NextResponse } from "next/server";
import { getSleepSessions } from "@/services/sleepTrackerService";

export async function GET() {
  const sessions = await getSleepSessions("demo-user");
  return NextResponse.json(sessions);
}