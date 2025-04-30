import { MuscleGroupAvatar } from "@/components/UI/MuscleGroupAvatar/MuscleGroupAvatar";
import { ColumnDef } from "@tanstack/react-table";
import {
  CaretRight,
  FireSimple,
  IconProps,
  TreeStructure,
} from "phosphor-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type MuscleGroup = "Chest" | "Legs";

type WorkoutLog = {
  date: string;
  musclegroup: MuscleGroup;
  navigation: string;
};

type IconType = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;

export const useGymTrackerColumns = () => {
  const navigateToRowDetails = (row: WorkoutLog) => {
    console.log("Navigating to details for:", row);
  };

  const workoutData: WorkoutLog[] = [
    { date: "2025-04-29", musclegroup: "Chest", navigation: "key" },
    { date: "2025-04-29", musclegroup: "Legs", navigation: "key" },
    { date: "2025-04-29", musclegroup: "Chest", navigation: "key" },
    { date: "2025-04-29", musclegroup: "Legs", navigation: "key" },
  ];

  const muscleGroupIconMap: Record<MuscleGroup, IconType> = {
    Chest: FireSimple,
    Legs: TreeStructure,
  };

  const muscleGroupColorMap: Record<MuscleGroup, string> = {
    Chest: "bg-red-500",
    Legs: "bg-green-600",
  };

  const workoutColumns: ColumnDef<WorkoutLog>[] = [
    { accessorKey: "date", header: "Date" },
    {
      accessorKey: "musclegroup",
      header: "Muscle group",
      cell: ({ row }) => {
        const muscle = row.original.musclegroup;
        const IconComponent = muscleGroupIconMap[muscle];
        const bgColor = muscleGroupColorMap[muscle];

        return (
          <div className="flex items-center gap-2">
            <MuscleGroupAvatar icon={IconComponent} bgColor={bgColor} />
          </div>
        );
      },
    },
    {
      accessorKey: "navigation",
      header: "",
      cell: ({ row }) => {
        return (
          <CaretRight
            size={20}
            className="cursor-pointer"
            onClick={() => navigateToRowDetails(row.original)}
          />
        );
      },
    },
  ];

  return { workoutData, workoutColumns };
};
