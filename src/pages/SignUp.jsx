import Sidebar from "src/components/SignUpComponents/Sidebar";
import Contents from "src/components/SignUpComponents/Contents";
import { MainContainer } from "src/components/SignUpComponents/styled-components/SignUpStyle";
import { useNavigate } from "react-router-dom";
import { SignUpContext } from "src/context/SignUpContext";
function SignUp() {
  const navigate = useNavigate();
  return (
    <SignUpContext.Provider value={navigate}>
      <MainContainer>
        <Sidebar />
        <Contents />
      </MainContainer>
    </SignUpContext.Provider>
  );
}

export default SignUp;
