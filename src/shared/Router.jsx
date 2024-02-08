import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "src/pages/Home";
import Detail from "src/pages/Detail";
import LoginPage from "src/pages/LoginPage";
import MyPage from "../pages/MyPage";
import WriteDetail from "pages/WriteDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/WriteDetail" element={<WriteDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
