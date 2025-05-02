"use client";

import { motion } from "framer-motion";

import { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { CalendarToggleWithInput } from "../CalendatToggleWithInput/CalendarToggleWithInput";
import { LogTable } from "../LogTable/LogTable";
import "./Card.scss";
export function Card({
  title,
  workoutData,
  workoutColumns,
  latestWorkoutSynopsis,
  latestWorkoutColumns,
}: {
  title: string;
  workoutData: any;
  workoutColumns: any;
  latestWorkoutSynopsis: any;
  latestWorkoutColumns: any;
}) {
  const [calendarInput, setCalendarInput] = useState<Date | Date[]>(new Date());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6"
    >
      <div className="flex justify-between gap-8">
        <div className="flex flex-col justify-between">
          <div id="header" className="flex flex-col justify-between gap-8">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <CalendarToggleWithInput
              input={calendarInput || "9/12"}
              setInput={setCalendarInput}
            />
            {workoutColumns && workoutData && (
              <LogTable
                columns={latestWorkoutColumns}
                data={latestWorkoutSynopsis}
              />
            )}
          </div>
          <div id="footer" className="flex justify-between">
            <button>Lets Log</button>
            <button>Navigate</button>
            {/* <CaretDoubleRight size={32} /> */}
          </div>
        </div>
        {workoutColumns && workoutData && (
          <LogTable columns={workoutColumns} data={workoutData} />
        )}
      </div>
    </motion.div>
  );
}
