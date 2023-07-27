import { useEffect } from "react";
import { useState } from "react";
import DateDisplay from "./DateDisplay";

const DateContainer = () => {
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    console.log("rendered");
  }, [date]);
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center mt-10">
      <input
        type="date"
        className=" !appearance-none text-xl p-4 rounded-[14px] border-solid border-teal-400 border-2 "
        onChange={(e) => setDate(e.target.value)}
      />
      <DateDisplay date={date} />
    </div>
  );
};

export default DateContainer;
