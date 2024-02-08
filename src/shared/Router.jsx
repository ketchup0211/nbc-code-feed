import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
