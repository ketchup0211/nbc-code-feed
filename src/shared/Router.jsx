import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "src/pages/Home";
import Detail from "src/pages/Detail";
import Mypage from "src/pages/Mypage";
import LoginPage from "src/pages/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/myPage" element={<Mypage />} />
        <Route path="/loginPage" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
