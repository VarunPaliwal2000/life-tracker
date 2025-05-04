"use server";

import clientPromise from "../mongodb";
import { WorkoutLogSchema } from "../validation/validation";

export async function addWorkout(formData: FormData) {
  const name = formData.get("name");
  const date = formData.get("date");

  const parsed = WorkoutLogSchema.safeParse({ name, date });

  if (!parsed.success) {
    throw new Error("Invalid input: " + JSON.stringify(parsed.error.format()));
  }

  const client = await clientPromise;
  const db = client.db();
  await db.collection("workouts").insertOne({
    ...parsed.data,
    createdAt: new Date(),
  });
}
