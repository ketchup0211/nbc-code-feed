import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Mypage from "pages/Mypage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/myPage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
