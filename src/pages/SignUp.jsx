import { useState, useSelector, useDispatch, useContext } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100vh;
  overflow: hidden;
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
  justify-content: center;
  width: 100%;
  padding: 0px 20px;
`;

const AuthContent = styled.div`
  width: 100%;
  max-width: 416px;
  text-align: center;
  margin: auto;
`;

const SubTitle = styled.h2`
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 24px;
  text-align: left;
`;

const HrDivider = styled.hr`
  margin: 30px 0px;
  border: none;
  background-color: #e7e7e9;
  color: #6e6d7a;
  text-align: center;
  overflow: visible;
  height: 1px;
  &::after {
    content: "or";
    display: inline-block;
    position: relative;
    top: -7px;
    padding: 0 16px;
    background-color: #fff;
  }
`;

const Button = styled.button`
  margin-bottom: 40px;
`;

const FontSmall = styled.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 400w;
  color: #3d3d4e;
`;

const AuthLink = styled.p`
  margin-top: 20px;
  color: #3d3d4e;
`;
function SignUp() {
  return (
    <MainContainer>
      <AuthSidebar />
      <Content>
        <AuthContent>
          <SubTitle>Sign up to Code Feed</SubTitle>
          <button>Sign up with GitHub</button>
          <HrDivider></HrDivider>
          <Button>Continue with email</Button>
          <FontSmall>
            By creating account you agree with our Terms of Sevice, Privacy
            Policy, and our default Notification Settings.
          </FontSmall>
          <AuthLink>
            Already have an account? <a href="">Sign In</a>
          </AuthLink>
        </AuthContent>
      </Content>
    </MainContainer>
  );
}

export default SignUp;
