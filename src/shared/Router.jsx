import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignUp from "../pages/SignUp";
import WriteDetail from "../pages/WriteDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        <Route path="/WriteDetail" element={<WriteDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
