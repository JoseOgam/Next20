"use client";
import React, { useState } from "react";
import { CustomButton } from "@/components";
import { addTasks } from "@/services/slice";
import { useAppDispatch } from "@/services/hooks";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useAppDispatch();

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };
  const handleBodyChange = (e: any) => {
    setBody(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addTasks({ title: title, body: body }));
    setTitle("");
    setBody("");
  };
  return (
    <div className="flex-1 pt-36">
      <form className=" flex flex-col justify-center items-center gap-3">
        <input
          value={title}
          type="text"
          placeholder="task title"
          className=" title_input"
          onChange={handleTitleChange}
        />
        <textarea
          value={body}
          placeholder="task desc..."
          className="text_area"
          onChange={handleBodyChange}
        />
        <CustomButton
          title="Add Task"
          containerStyles="bg-blue-500 hover:bg-blue-400 text-white font-bold 
          py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          handleClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default AddTask;
