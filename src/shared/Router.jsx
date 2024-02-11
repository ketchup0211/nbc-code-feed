import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "src/pages/Detail";
import Home from "src/pages/Home";
import Login from "src/pages/Login";
import LoginPage from "src/pages/LoginPage";
import MyPages from "src/pages/MyPages";
import SignUp from "src/pages/SignUp";
import WriteDetail from "src/pages/WriteDetail";
import Test from "src/pages/Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/WriteDetail" element={<WriteDetail />} />
        <Route path="/mypage" element={<MyPages />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
