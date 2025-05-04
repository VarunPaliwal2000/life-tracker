import { z } from 'zod';

// ✅ Define the schema based on the fields in WorkoutLog
export const WorkoutLogSchema = z.object({
  musclegroup: z.enum(["Chest", "Legs"]),  // Using enum for restricted values
  date: z.string().optional(),             // Make it optional as per the type
  navigation: z.string().optional(),       // Optional field
  PR: z.string().optional(),               // Optional field
  lastPR: z.string().optional(),           // Optional field
});

// ✅ Infer TypeScript type from the schema for type safety
export type WorkoutLogInput = z.infer<typeof WorkoutLogSchema>;
