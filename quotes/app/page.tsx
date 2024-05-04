"use client";
import { CustomBtn } from "@/components";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const handleAddCounter = () => {
    setCounter(() => counter + 1);
  };
  const handleResetCounter = () => {
    setCounter(0);
  };
  const handleSubtractCounter = () => {
    setCounter(() => counter - 1);
  };

  return (
    <main className="">
      <div className="flex h-screen items-center justify-center font-extrabold text-8xl">
        {counter}
      </div>
      {/* <button onClick={handleAddCounter}>Add</button>
      <button onClick={handleResetCounter}>reset</button>
      <button onClick={handleSubtractCounter}>subtract</button> */}
      <div className="flex items-center justify-between pt-5 pb-10 ">
        <CustomBtn title="Add" handleClick={handleAddCounter} btnStyle="" />
        <CustomBtn title="Reset" handleClick={handleResetCounter} btnStyle="" />
        <CustomBtn
          title="Subtract"
          handleClick={handleSubtractCounter}
          btnStyle=""
        />
      </div>
    </main>
  );
}
