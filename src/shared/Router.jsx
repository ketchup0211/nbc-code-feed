import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "../pages/MyPage";
import SignUp from "../pages/SignUp";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import WriteDetail from "pages/WriteDetail";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/write-detail" element={<WriteDetail />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
