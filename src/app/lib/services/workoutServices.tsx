import clientPromise from "../mongodb";
import { WorkoutLogInput } from "../validation/validation";

export async function createWorkout(data: WorkoutLogInput) {
  const client = await clientPromise;
  const db = client.db();
  const workouts = db.collection("workouts");
  await workouts.insertOne({ ...data, createdAt: new Date() });
}

export async function getAllWorkouts() {
  const client = await clientPromise;
  const db = client.db();
  const workouts = db.collection("workouts");
  return await workouts.find().sort({ createdAt: -1 }).toArray();
}
