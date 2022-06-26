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
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const getTodos = () => {
    dispatch(getTodoListsRequest());
    axios
      .get('/todos')
      .then((r) => dispatch(getTodoListsSuccess(r.data)))
      .catch((e) => dispatch(getTodoListsFailure(e)));
  };

  useEffect(() => {
    if(todos?.length===0){
        getTodos();
    }
  },[]);

  console.log(todos);

  return <div>
    <h3>Todos</h3>
    <AddTodo/>
    <TodoLists todoLists={todos} />
  </div>;
}

export default Todos;
