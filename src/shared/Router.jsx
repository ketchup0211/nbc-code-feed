import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import MyPage from "../pages/MyPage";
import Detail from "../pages/Detail";
import WriteDetail from "../pages/WriteDetail";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route path="/WriteDetail" element={<WriteDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
