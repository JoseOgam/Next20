import React from "react";

const AddTask = () => {
  return (
    <div className="flex-1 pt-36">
      <form className=" flex flex-col justify-center items-center gap-3">
        <input type="text" placeholder="task title" className=" title_input" />
        <textarea placeholder="task desc..." className="text_area" />
      </form>
    </div>
  );
};

export default AddTask;
