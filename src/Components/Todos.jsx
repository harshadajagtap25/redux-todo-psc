import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoListsFailure,
  getTodoListsRequest,
  getTodoListsSuccess,
} from "../Redux/action";
import AddTodo from "./AddTodo";
import TodoLists from "./TodoLists";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const getTodos = () => {
    dispatch(getTodoListsRequest());
    axios
      .get("/todos")
      .then((r) => dispatch(getTodoListsSuccess(r.data)))
      .catch((e) => dispatch(getTodoListsFailure(e)));
  };

  useEffect(() => {
      getTodos();
        
  }, []);

  console.log(todos);

  return (
    <div>
      <AddTodo />
      <TodoLists todoLists={todos} />
    </div>
  );
}

export default Todos;
