import Sidebar from "src/components/SignUpComponents/Sidebar";
import Contents from "src/components/SignUpComponents/Contents";
import { MainContainer } from "src/components/SignUpComponents/styled-components/SignUpStyle";
import { useNavigate } from "react-router-dom";
import { SignUpNavigateContext } from "src/context/SignUpNavigateContext";
function SignUp() {
  const navigate = useNavigate();
  return (
    <SignUpNavigateContext.Provider value={navigate}>
      <MainContainer>
        <Sidebar />
        <Contents />
      </MainContainer>
    </SignUpNavigateContext.Provider>
  );
}

export default SignUp;
