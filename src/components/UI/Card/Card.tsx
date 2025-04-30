"use client";

import { motion } from "framer-motion";

import {
  Calendar,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from "phosphor-react";
import { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { CustomInput } from "../CustomInput/CustomInput";
import { LogTable } from "../LogTable/LogTable";
import "./Card.scss";
export function Card({
  title,
  workoutData,
  workoutColumns,
}: {
  title: string;
  workoutData: any;
  workoutColumns: any;
}) {
  const [input, setinput] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6"
    >
      <div className="flex">
        <div className="flex flex-col justify-between">
          <div id="header" className="flex justify-between gap-8">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <CustomInput
              placeholder={"09/12"}
              leftIcon={<CaretLeft size={24} />}
              rightIcon={<CaretRight size={24} />}
              value={input}
              onChange={setinput}
            />
          </div>
          <div id="footer" className="flex justify-between">
            <button>Lets Log</button>
            <CaretDoubleRight size={32} />
          </div>
        </div>
        {workoutColumns && workoutData && (
          <LogTable columns={workoutColumns} data={workoutData} />
        )}
      </div>
    </motion.div>
  );
}
