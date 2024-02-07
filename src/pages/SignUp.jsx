import { useState, useSelector, useDispatch, useContext } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100vh;
`;
const AuthSidebar = styled.div`
  width: 450px;
  height: 100%;
  background-color: #f2d184;
  color: #866118;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  padding: 0px 20px;
`;

const AuthContent = styled.div`
  width: 100%;
  max-width: 416px;
  text-align: center;
  margin: auto;
`;
function SignUp() {
  return (
    <MainContainer>
      <AuthSidebar />
      <Content>
        <AuthContent>
          <h2>Sign up to Code Feed</h2>
          <button>Sign up with GitHub</button>
          <hr />
          <button>Continue with email</button>
          <p>
            By creating account you agree with our Terms of Sevice, Privacy
            Policy, and our default Notification Settings.
          </p>
          <p>
            Already have an account? <a href="">Sign In</a>
          </p>
        </AuthContent>
      </Content>
    </MainContainer>
  );
}

export default SignUp;
