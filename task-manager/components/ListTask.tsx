import { useAppSelector } from "@/services/hooks";
import React from "react";

const ListTask = () => {
  const tasks = useAppSelector((state: any) => state.tasks.tasks);
  console.log(tasks);
  return (
    <div className=" flex-col justify-center items-center font-bold">
      {tasks.map((item: any) => (
        <div key={item.id}>
          <h1>{item.title} </h1>
          <p>{item.body} </p>
        </div>
      ))}
    </div>
  );
};

export default ListTask;
