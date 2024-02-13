import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { gitProvider } from "src/components/LoginComponents/GitHubAuth";
import { googleProvider } from "src/components/LoginComponents/GoogleAuth";
import { auth, db } from "src/firebase";
import SignUpReducer from "src/redux/modules/SignUpReducer";

export const handleEmailSignUp = (event, setSignUp) => {
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

export const handleAPISignUp = async (event, navigate) => {
  let userCredential = "";
  switch (event.target.name) {
    case "google":
      userCredential = await signInWithPopup(auth, googleProvider);
      break;
    case "github":
      userCredential = await signInWithPopup(auth, gitProvider);
      break;
    default:
      return;
  }
  console.log(userCredential); //  console로 들어온 데이터 표시
  _storeNewAccount(userCredential); //  make new Account Infomation, add firestore
  navigate("/"); //  Go Home (login)
};

export const _storeNewAccount = (userCredential) => {
  try {
    let path = `users/${userCredential.user.uid}`;
    const newUserInfo = {
      name: userCredential.user.displayName,
      nickname: userCredential.user.displayName,
      email: userCredential.user.email,
      agree: true,
    };
    setDoc(doc(db, path), newUserInfo);
    console.log(`FIRESTORE : SUCCESSFULLY_STORED`);
  } catch (error) {
    console.log(`ERROR : ${error}`);
  }
};

export const handleDataBack = (event) => {
  event.preventDefault();
  setSignUp(false);
};

export const handleSignUpInput = (event, dispatch, reduxActions) => {
  event.preventDefault();
  switch (event.target.id) {
    case "name":
      const { setName } = reduxActions;
      dispatch(setName(event.target.value));
      break;
    case "username":
      const { setUserName } = reduxActions;
      dispatch(setUserName(event.target.value));
      break;
    case "email":
      const { setEmail } = reduxActions;
      dispatch(setEmail(event.target.value));
      break;
    case "password":
      const { setPassword } = reduxActions;
      dispatch(setPassword(event.target.value));
      break;
    case "user-agree":
      const { setAgree } = reduxActions;
      dispatch(setAgree(event.target.checked));
      break;
    default:
      return;
  }
};
