import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "src/pages/Detail";
import Home from "src/pages/Home";
import Login from "src/pages/Login";
import LoginPage from "src/pages/LoginPage";
import MyPage from "src/pages/Mypage";
import SignUp from "src/pages/SignUp";
import WriteDetail from "src/pages/WriteDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/WriteDetail" element={<WriteDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
