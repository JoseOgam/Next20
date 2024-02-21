import React from "react";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import "./App.css";
const App = () => {
  return (
    <div>
      <div className="App">
        <AddTodo />
        <ListTodo />
      </div>
    </div>
  );
};

export default App;
