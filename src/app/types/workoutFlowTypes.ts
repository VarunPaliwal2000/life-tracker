export type MuscleGroup = "Chest" | "Legs";

export type WorkoutLog = {
  musclegroup: MuscleGroup;
  date?: string;
  navigation?: string;
  PR?: string;
  lastPR?: string;
};
