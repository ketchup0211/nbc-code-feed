import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "src/pages/Detail";
import EditProfile from "src/pages/EditProfile";
import Home from "src/pages/Home";
import Login from "src/pages/Login";
import MyPages from "src/pages/MyPages";
import SearchResult from "src/pages/SearchResult";
import PasswordReset from "src/pages/PasswordReset";
import SignUp from "src/pages/SignUp";
import WriteDetail from "src/pages/WriteDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/WriteDetail" element={<WriteDetail />} />
        <Route path="/mypage" element={<MyPages />} />
        <Route path="/mypage/WriteDetail" element={<WriteDetail />} />
        <Route path="/mypage/detail/:id" element={<Detail />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/searchResult" element={<SearchResult />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/password_resets" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
