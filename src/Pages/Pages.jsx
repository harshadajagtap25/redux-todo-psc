import React from "react";
import { Route, Routes } from "react-router-dom";
import EditTodo from "../Components/EditTodo";
import Homepage from "./Homepage";
import SingleTodo from "./SingleTodo";

const Pages = () => {
  return <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/todo/:id" element={<SingleTodo/>} />
    <Route path="/todo/:id/edit" element={<EditTodo/>} />
    
  </Routes>;
};

export default Pages;
