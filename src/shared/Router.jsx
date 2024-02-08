import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "../pages/SignUp";
import MyPage from "../pages/MyPage";
import Detail from "../pages/Detail";
import WriteDetail from "../pages/WriteDetail";
import Login from "../pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route path="/WriteDetail" element={<WriteDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/signup" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
