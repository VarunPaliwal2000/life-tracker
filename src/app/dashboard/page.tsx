"use client";

import { useState } from "react";
import GymTracker from "./widgets/gym-tracker/GymTracker";
import GymTrackerPopup from "./widgets/gym-tracker/gymTrackerPopUp";
// import SleepTracker from "./widgets/sleep-tracker/SleepTracker";

export default function DashboardPage() {
  const [gymTrackerPopUpIsOpen, setgymTrackerPopUpIsOpen] =
    useState<boolean>(false);
  return (
    <div className="flex flex-wrap gap-4">
      <GymTracker setPopUpIsOpen={setgymTrackerPopUpIsOpen} />
      <GymTrackerPopup
        isOpen={gymTrackerPopUpIsOpen}
        setIsOpen={setgymTrackerPopUpIsOpen}
      />
    </div>
  );
}
