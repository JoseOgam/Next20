import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../services/redux/slice";

const AddTodo = () => {
  const [task, setTask] = useState([]);
  const dispatch = useDispatch();

  const handleOnchangeInput = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      dispatch(addTodo({ task: task }));
      setTask("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="InputForm">
        <form onSubmit={handleSubmit} className="FormElemets">
          <input
            value={task}
            onChange={handleOnchangeInput}
            placeholder="add Task..."
          />
          <button>Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
