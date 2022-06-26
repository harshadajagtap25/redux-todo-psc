import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoFailure, addTodoRequest, addTodoSuccess } from "../Redux/action";

function AddTodo() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch()
  const addTodo = (payload)=>{

    console.log("addTodo", payload)

    dispatch(addTodoRequest())
    axios.post('/todos',payload)
    .then(r=>addTodoSuccess(r.data))
    .catch(e=>addTodoFailure(e))

  }
  const handleAdd =()=>{
    
    if(todo){
        const payload ={
            title:todo,
            status:false
        }
        addTodo(payload)
        setTodo("")
    }
  }
  return (
    <div>
      <h3>AddTodo</h3>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add Todo..."
      />
      <button onClick={handleAdd} >Add</button>
    </div>
  );
}

export default AddTodo;
