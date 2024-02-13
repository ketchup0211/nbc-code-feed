import { signInWithPopup } from "firebase/auth";
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

export const handleSignUpInput = (event) => {
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
export const createAccount = async (event) => {
  const navigate = useNavigate();
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
