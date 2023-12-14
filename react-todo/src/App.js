import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import "./App.css";
const App = () => {
  const [counter, setCounter] = useState(0);
  const add = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };
  const subtract = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <div className="App">
        <h1>{counter} </h1>
        <div className="BtnDiv">
          <button onClick={add}>add</button>
          <button onClick={reset}>reset</button>
          <button onClick={subtract}>subtract</button>
        </div>
        <AddTodo />
        <ListTodo />
      </div>
    </div>
  );
};

export default App;
