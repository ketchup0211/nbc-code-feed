import {
  AuthForm,
  FormButton,
  FormFieldGroup,
  SignUpForm,
} from "./styled-components/SignUpStyle";
import EmailSignUpFormField from "./EmailSignUpFormField";
import SignUpAgree from "./SignUpAgree";
import { useDispatch, useSelector } from "react-redux";
import {
  SignUpDispatchContext,
  SignUpNavigateContext,
  SignUpReduxActionContext,
} from "src/context/SignUpNavigateContext";
import {
  setName,
  setUserName,
  setEmail,
  setPassword,
  setAgree,
} from "src/redux/modules/SignUpReducer";
import { useContext, useState } from "react";
import { auth } from "src/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
function EmailSignUpForm() {
  const dispatch = useDispatch();
  const navigate = useContext(SignUpNavigateContext);
  const reduxActions = {
    setName,
    setUserName,
    setEmail,
    setPassword,
    setAgree,
  };
  const { name, username, email, password, agree } = useSelector(
    (store) => store.SignUpReducer
  );
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  //Authentication
  //name, username, email, password, agree
  const createAccount = async (event) => {
    event.preventDefault();
    setNewEmail(email);
    setNewPassword(password);
    try {
      // Create Account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        newEmail,
        newPassword
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
      //  error handling
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
          alert(`ERROR CODE : ${error}`);
          return;
      }
    }
  };
  return (
    <SignUpDispatchContext.Provider value={dispatch}>
      <SignUpReduxActionContext.Provider value={reduxActions}>
        <AuthForm>
          <SignUpForm onSubmit={createAccount}>
            <FormFieldGroup>
              <EmailSignUpFormField id="name" label="Name" />
              <EmailSignUpFormField id="username" label="Username" />
            </FormFieldGroup>
            <EmailSignUpFormField id="email" label="Email" />
            <EmailSignUpFormField
              id="password"
              label="Password"
              type="password"
              placeholder="6+characters"
            />
            <SignUpAgree />
            <FormButton type="submit">Sign Up</FormButton>
          </SignUpForm>
        </AuthForm>
      </SignUpReduxActionContext.Provider>
    </SignUpDispatchContext.Provider>
  );
}
export default EmailSignUpForm;
