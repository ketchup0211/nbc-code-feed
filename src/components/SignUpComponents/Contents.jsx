import { Link, useNavigate } from "react-router-dom";
import {
  APIButton,
  AuthContent,
  AuthForm,
  AuthLink,
  BackButton,
  CheckBox,
  Content,
  FieldSet,
  FontSmall,
  FormButton,
  FormField,
  FormFieldGroup,
  HrDivider,
  Label,
  SignUpForm,
  SignUpInput,
  SubTitle,
} from "./styled-components/SignUpStyle";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

function Contents() {
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

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
  const handleSignUpInput = (event) => {
    event.preventDefault();
    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        break;
      case "username":
        setUserName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "user-agree":
        setAgree(event.target.checked);
        break;
      default:
        return;
    }
  };
  //Authentication
  //name, username, email, password, agree
  const createAccount = async (event) => {
    event.preventDefault();
    try {
      // Create Account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // update Account Profile
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          alert("SUCCESS");
          navigate("/");
        })
        .catch((error) => alert(error));
      // make new Account Infomation
      try {
        let path = `users/${userCredential.user.uid}`;
        const newUserInfo = {
          name,
          nickname: username,
          email,
          agree,
        };
        setDoc(doc(db, path), newUserInfo);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("이메일을 정확히 입력해주세요.");
          break;
        case "auth/email-already-in-use":
          let result = confirm(
            "이미 가입된 이메일입니다. 로그인 페이지로 이동하시겠습니까?"
          );
          result ? navigate("/login") : null;
          break;

        case ("auth/invalid-password", "auth/weak-password"):
          alert("비밀번호는 6자 이상의 문자열로 구성해주십시오.");
          break;
        case "auth/too-many-requests":
          alert("요청이 많습니다. 잠시 후에 다시 시도해주십시오.");
          break;
        default:
          alert(`ERROR CODE : ${error.code}`);
          return;
      }
    }
  };
  const handleGoogleSignUp = () => {
    signInWithPopup(auth, googleProvider) // popup을 이용한 signup
      .then((userCredential) => {
        console.log(userCredential); // console로 들어온 데이터 표시
        // make new Account Infomation
        try {
          let path = `users/${userCredential.user.uid}`;
          const newUserInfo = {
            name: userCredential.user.displayName,
            nickname: userCredential.user.displayName,
            email: userCredential.user.email,
            agree: true,
          };
          setDoc(doc(db, path), newUserInfo);
        } catch (error) {
          console.log(error);
        }
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleGitHubSignUp = () => {
    signInWithPopup(auth, gitProvider) // popup을 이용한 signup
      .then((userCredential) => {
        console.log(userCredential); // console로 들어온 데이터 표시
        // make new Account Infomation
        try {
          let path = `users/${userCredential.user.uid}`;
          const newUserInfo = {
            name: userCredential.user.displayName,
            nickname: userCredential.user.displayName,
            email: userCredential.user.email,
            agree: true,
          };
          setDoc(doc(db, path), newUserInfo);
        } catch (error) {
          console.log(error);
        }
        navigate("/");
      })
      .catch((err) => {
        alert(err.code);
        console.log(err);
      });
  };
  return (
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
            <SignUpForm onSubmit={createAccount}>
              <FormFieldGroup>
                <FormField>
                  <FieldSet>
                    <Label htmlFor="name">Name</Label>
                    <SignUpInput
                      id="name"
                      onChange={handleSignUpInput}
                      autoComplete="off"
                    />
                  </FieldSet>
                </FormField>
                <FormField>
                  <FieldSet>
                    <FieldSet>
                      <Label htmlFor="username">Username</Label>
                      <SignUpInput
                        id="username"
                        onChange={handleSignUpInput}
                        autoComplete="off"
                      />
                    </FieldSet>
                  </FieldSet>
                </FormField>
              </FormFieldGroup>
              <FormField>
                <FieldSet>
                  <Label htmlFor="email">Email</Label>
                  <SignUpInput
                    id="email"
                    onChange={handleSignUpInput}
                    autoComplete="off"
                  />
                </FieldSet>
              </FormField>
              <FormField>
                <FieldSet>
                  <Label htmlFor="password">Password</Label>
                  <SignUpInput
                    id="password"
                    onChange={handleSignUpInput}
                    type="password"
                    placeholder="6+characters"
                    autoComplete="off"
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
                  <CheckBox
                    id="user-agree"
                    onChange={handleSignUpInput}
                    type="checkbox"
                    required
                  />
                  <Label htmlFor="user-agree" style={{ margin: "0px" }}>
                    I agree with Code Feeds
                  </Label>
                </FieldSet>
              </FormField>
              <FormButton type="submit">Sign Up</FormButton>
            </SignUpForm>
          </AuthForm>
        ) : (
          <>
            <APIButton
              type="button"
              onClick={handleGitHubSignUp}
              name="github"
              style={{ cursor: "pointer" }}
            >
              Sign up with GitHub
            </APIButton>
            <APIButton
              type="button"
              onClick={handleGoogleSignUp}
              name="google"
              style={{ cursor: "pointer" }}
            >
              Sign up with Google
            </APIButton>
            <HrDivider></HrDivider>
            <APIButton type="button" name="email" onClick={handleEmailSignUp}>
              Continue with email
            </APIButton>
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
  );
}
export default Contents;
