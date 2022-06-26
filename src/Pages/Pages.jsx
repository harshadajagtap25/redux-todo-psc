import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import SingleTodo from "./SingleTodo";

const Pages = () => {
  return <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/todo/:id" element={<SingleTodo/>} />
  </Routes>;
};

export default Pages;
