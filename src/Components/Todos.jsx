import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoListsFailure,
  getTodoListsRequest,
  getTodoListsSuccess,
} from "../Redux/action";

function Todos() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const getTodos = () => {
    dispatch(getTodoListsRequest());
    axios
      .get("/todos")
      .then((r) => dispatch(getTodoListsSuccess(r.data)))
      .catch((e) => dispatch(getTodoListsFailure(e)));
  };

  useEffect(() => {
    getTodos();
  },[]);

  console.log(todos);
  return <div>Todos</div>;
}

export default Todos;
