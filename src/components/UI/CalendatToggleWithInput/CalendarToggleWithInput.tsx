"use client";

import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from "react";
import Calendar from "react-calendar";
import { CustomInput } from "../CustomInput/CustomInput";

export const CalendarToggleWithInput = ({ input, setInput }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    console.log("i am clicked");
    setIsOpen(!isOpen);
  };

  const onrightIconClick = () => {
    const nextDay = new Date(input);
    nextDay.setDate(nextDay.getDate() + 1);
    setInput(nextDay);
  };

  const onleftIconClick = () => {
    const nextDay = new Date(input);
    nextDay.setDate(nextDay.getDate() - 1);
    setInput(nextDay);
  };

  const onChange = (e: any) => {
    setInput(e);
    setIsOpen(!isOpen);
  };

  console.log(isOpen);
  return (
    <div style={{ cursor: "pointer" }}>
      <CustomInput
        placeholder={"09/12"}
        leftIcon={<CaretLeft size={24} />}
        rightIcon={<CaretRight size={24} />}
        value={input}
        onChange={setInput}
        onclick={onClick}
        leftIconClick={onleftIconClick}
        rightIconClick={onrightIconClick}
      />
      {isOpen && (
        <div className="p-4 bg-white rounded-xl shadow w-fit absolute z-10 mt-2">
          <Calendar
            onChange={onChange}
            value={input}
            className="REACT-CALENDAR calendar"
          />
        </div>
      )}
    </div>
  );
};
