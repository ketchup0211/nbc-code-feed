import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>hello everyone</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
