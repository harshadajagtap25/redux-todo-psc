import React from "react";
import { Link } from "react-router-dom";

function TodoLists({ todoLists }) {
  return (
    <div>
      {todoLists.map((item) => (
        <div key={item.id}>
          <Link to={`/todo/${item.id}`}>
            <div>{item.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TodoLists;
