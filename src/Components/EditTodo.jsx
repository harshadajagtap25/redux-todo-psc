import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editTodoFailure,
  editTodoRequest,
  editTodoSuccess,
} from "../Redux/action";

function EditTodo() {
  const [todo, setTodo] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editTodo = (todo) => {
    dispatch(editTodoRequest());
    axios
      .put(`/todos/${id}`, {title:todo})
      .then((r) => {
        editTodoSuccess(r.data);
        navigate("/")
      })
      .catch((e) => editTodoFailure(e));
  };
  const handleEdit = () => {
    if (todo) {
      editTodo(todo,);
      setTodo("");
    }
  };
  

  return (
    <div>
      EditTodo
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Edit Todo..."
        />
        <button onClick={()=>handleEdit()}>Edit</button>
      </div>
    </div>
  );
}

export default EditTodo;
