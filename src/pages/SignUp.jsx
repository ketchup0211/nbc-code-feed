import Sidebar from "src/components/SignUpComponents/Sidebar";
import Contents from "src/components/SignUpComponents/Contents";
import { MainContainer } from "src/components/SignUpComponents/styled-components/SignUpStyle";
function SignUp() {
  return (
    <MainContainer>
      <Sidebar />
      <Contents />
    </MainContainer>
  );
}

export default SignUp;
