import { useState, useSelector, useContext, useDispatch } from "react";
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
    content: "or sign in with email";
    display: inline-block;
    position: relative;
    top: -7px;
    padding: 0 16px;
    background-color: #fff;
  }
`;

const AuthLink = styled.p`
  margin-top: 20px;
  color: #3d3d4e;
`;

const Session = styled.form``;
const AuthForm = styled.div``;
const FormField = styled.div`
  text-align: left;
`;
const Label = styled.label`
  display: block;
  justify-content: space-between;
  margin: 14px 0px 4px 0px;
  font-size: 15px;
  font-weight: 700w;
`;
const LoginInput = styled.input`
  width: 100%;
  margin-right: 8px;
  padding: 18px 20px;
  border: 1.5px solid #e7e7e9;
  border-radius: 12px;
`;
const FieldSet = styled.fieldset`
  margin-bottom: 12px;
`;

const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  background-color: #0d0c22;
  color: white;
  font-size: 14px;
  padding: 0px 24px;
  border: 0px;
  border-radius: 25px;
  height: 50px;
  cursor: pointer;
`;
function Login() {
  return (
    <MainContainer>
      <AuthSidebar />
      <Content>
        <AuthContent>
          <SubTitle>Sign in to Code Feed</SubTitle>
          <button>Sign in with GitHub</button>
          <HrDivider></HrDivider>
          <AuthForm>
            <Session>
              <FormField>
                <FieldSet>
                  <Label> Username or Email</Label>
                  <LoginInput type="text" />
                </FieldSet>
                <FieldSet>
                  <Label>
                    Password
                    <a
                      href=""
                      style={{
                        float: "right",
                        color: "#0d0c22",
                        fontSize: "14px",
                      }}
                    >
                      Forgot?
                    </a>
                  </Label>
                  <LoginInput type="text" />
                </FieldSet>
              </FormField>
              <Button type="submit">Sign In</Button>
            </Session>
            <AuthLink>
              Don't have an account? <a href="">Sign Up</a>
            </AuthLink>
          </AuthForm>
        </AuthContent>
      </Content>
    </MainContainer>
  );
}
export default Login;
