import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  toggleTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
} from "../Redux/action";

function SingleTodo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentTodo, setCurrentTodo] = useState({});
  const navigate = useNavigate();

  const handleToggle = (id, newStatus) => {
    dispatch(toggleTodoRequest());
    axios
      .patch(`/todos/${id}`, { status: newStatus })
      .then((r) => dispatch(toggleTodoSuccess(r.data)))
      .catch((e) => dispatch(toggleTodoFailure(e)));
  };

  const removeTodo = (id) => {
    dispatch(deleteTodoRequest());
    axios
      .delete(`/todos/${id}`)
      .then((r) => {
        dispatch(deleteTodoSuccess(id));
        navigate("/");
      })
      .catch((e) => dispatch(deleteTodoFailure(e)));
  };

  const editTodo =(id)=>{

  }
  useEffect(() => {
    let currentTodo = todos.find((item) => item.id === Number(id));
    currentTodo && setCurrentTodo(currentTodo);
  }, [todos, id]);

  return (
    <div>
      <h3>SingleTodo</h3>
      <div>
        {currentTodo?.title} {currentTodo?.status ? "True" : "False"}
      </div>
      <button onClick={() => handleToggle(currentTodo.id, !currentTodo.status)}>
        Toggle
      </button>
      <button onClick={() => removeTodo(currentTodo.id)}>Delete</button>
      <Link to={`/todo/${currentTodo.id}/edit`} >
      <button onClick={() => editTodo(currentTodo.id)}>Edit</button>
      </Link>

    </div>
  );
}

export default SingleTodo;
