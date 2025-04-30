import { IconProps } from "phosphor-react";

export function MuscleGroupAvatar({
  icon: Icon,
  size = "w-6 h-6",
  bgColor = "bg-purple-600",
  iconSize = 24,
}: {
  icon: React.ComponentType<IconProps>;
  size?: string;
  bgColor?: string;
  iconSize?: number;
}) {
  return (
    <div
      className={`rounded-full ${bgColor} ${size} flex items-center justify-center`}
    >
      <Icon size={iconSize} className="text-white" />
    </div>
  );
}
