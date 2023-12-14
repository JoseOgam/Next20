import React, { useState } from "react";

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
      <div>
        <h1>{counter} </h1>
        <button onClick={add}>add</button>
        <button onClick={reset}>reset</button>
        <button onClick={subtract}>subtract</button>
      </div>
    </div>
  );
};

export default App;
