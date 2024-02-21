import React, { useState } from "react";
import { useSelector } from "react-redux";

const ListTodo = () => {
  const [query, setQuery] = useState("");
  const { todo, status } = useSelector((state) => state.todo);
  console.log(todo);
  const filteredItems = todo.filter((item) =>
    item.task.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <main>
      <div>
        <input
          placeholder="search task..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        {filteredItems ? (
          <div>
            {filteredItems.map((item) => (
              <div>
                <h2>{item.task} </h2>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2>No Task Registered</h2>
          </div>
        )}
      </div>
    </main>
  );
};

export default ListTodo;
