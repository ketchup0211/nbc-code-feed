import { env } from "process";
import { useState, useSelector, useDispatch, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SignUpReducer from "../redux/modules/SignUpReducer";

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
  cursor: pointer;
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
const BackButton = styled.button`
  position: absolute;
  top: 40px;
  background-color: white;
  border: 1.5px solid #e7e7e9;
  margin: 20px 0px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const AuthForm = styled.div``;
const SignUpForm = styled.form``;
const FormFieldGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FormField = styled.div`
  text-align: left;
`;
const FieldSet = styled.fieldset`
  margin-bottom: 12px;
`;
const Label = styled.label`
  display: block;
  justify-content: space-between;
  margin: 14px 0px 4px 0px;
  font-size: 15px;
  font-weight: 700w;
`;
const SignUpInput = styled.input`
  width: 100%;
  margin-right: 8px;
  padding: 18px 20px;
  border: 1.5px solid #e7e7e9;
  border-radius: 12px;
`;
const CheckBox = styled.input`
  margin: 0px 12px 0px 0px;
  border: 1px solid #e7e7e9;
  border-radius: 0px;
  transform: scale(1.05);
`;
function SignUp() {
  const [signUp, setSignUp] = useState(false);
  const { name, username, email, password } = useSelector(
    (state) => state.SignUpReducer
  );
  const handleEmailSignUp = (event) => {
    event.preventDefault();
    switch (event.target.name) {
      case "github":
        //현재 페이지를 GitHub 로그인 페이지로 이동 (target=_self)
        break;
      case "email":
        setSignUp(true);
        break;
      default:
        console.log("유효하지 않은 접근입니다!");
        return;
    }
  };
  const handleDataBack = (event) => {
    event.preventDefault();
    setSignUp(false);
  };
  return (
    <MainContainer>
      <AuthSidebar />
      <Content>
        {signUp ? (
          <BackButton type="button" onClick={handleDataBack}>
            &lt;
          </BackButton>
        ) : null}
        <AuthContent>
          <SubTitle>Sign up to Code Feed</SubTitle>
          {signUp ? (
            <AuthForm>
              <SignUpForm>
                <FormFieldGroup>
                  <FormField>
                    <FieldSet>
                      <Label for="name">Name</Label>
                      <SignUpInput id="name" />
                    </FieldSet>
                  </FormField>
                  <FormField>
                    <FieldSet>
                      <FieldSet>
                        <Label for="username">Username</Label>
                        <SignUpInput id="username" />
                      </FieldSet>
                    </FieldSet>
                  </FormField>
                </FormFieldGroup>
                <FormField>
                  <FieldSet>
                    <Label for="email">Email</Label>
                    <SignUpInput id="email" />
                  </FieldSet>
                </FormField>
                <FormField>
                  <FieldSet>
                    <Label for="password">Password</Label>
                    <SignUpInput
                      id="password"
                      type="password"
                      placeholder="6+characters"
                    />
                  </FieldSet>
                </FormField>
                <FormField>
                  <FieldSet
                    style={{
                      display: "flex",
                      marginTop: "30px",
                    }}
                  >
                    <CheckBox id="user-agree" type="checkbox" />
                    <Label for="user-agree" style={{ margin: "0px" }}>
                      I agree with Code Feed's
                    </Label>
                  </FieldSet>
                </FormField>
              </SignUpForm>
            </AuthForm>
          ) : (
            <>
              <button type="button" name="github" style={{ cursor: "pointer" }}>
                Sign up with GitHub
              </button>
              <HrDivider></HrDivider>
              <Button type="button" name="email" onClick={handleEmailSignUp}>
                Continue with email
              </Button>
              <FontSmall>
                By creating account you agree with our Terms of Sevice, Privacy
                Policy, and our default Notification Settings.
              </FontSmall>
              <AuthLink>
                Already have an account? <Link to="/login">Sign In</Link>
              </AuthLink>
            </>
          )}
        </AuthContent>
      </Content>
    </MainContainer>
  );
}

export default SignUp;
