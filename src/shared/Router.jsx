import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
