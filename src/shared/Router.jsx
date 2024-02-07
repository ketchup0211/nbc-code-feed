import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "pages/SignUp";

const Router = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />} />
    </Routes>
  </BrowserRouter>;
};

export default Router;
