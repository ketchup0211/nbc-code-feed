import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "./pages/MyPage";

const Router = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Router;
