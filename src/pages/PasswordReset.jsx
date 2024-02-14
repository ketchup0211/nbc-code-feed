import { useState } from "react";
import { auth, db } from "src/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { sendPasswordResetEmail } from "firebase/auth";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function PasswordReset() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const updateEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  // TODO: understand this logic
  const checkAccountExist = (email) => {
    return new Promise((resolve, reject) => {
      const q = query(collection(db, "users"), where("email", "==", email));
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const matchingDocs = [];
          querySnapshot.forEach((doc) => {
            matchingDocs.push(doc.data().name);
          });
          if (matchingDocs.length >= 1) {
            resolve(true);
          } else {
            resolve(false);
          }
        },
        (error) => {
          // Reject the promise if there's an error
          console.error("Error fetching documents: ", error);
          reject(error);
        }
      );
    });
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    try {
      const exists = await checkAccountExist(email);
      console.log(exists);
      if (exists) {
        await sendPasswordResetEmail(auth, email);
        alert(
          `해당 이메일(${email})로 \n비밀번호 재설정 링크를 전송했습니다. \n이메일을 확인해주세요.`
        );
        navigate("/login");
      } else {
        if (email === "") {
          alert("가입 시 사용했던 이메일을 입력해주세요.");
        } else {
          alert("해당 이메일의 가입 내역이 존재하지 않습니다.");
          navigate("/login");
        }
      }
    } catch (error) {
      alert(`ERROR : ${error}`);
    }
  };

  return (
    <MainContainer>
      <AuthSidebar />
      <Content>
        <AuthContent>
          <SubTitle>Forgot Password?</SubTitle>
          <PasswordInstructions>
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password. <br />
            <br />
            For security reasons, we do NOT store your password. So rest assured
            that we will never send your password via email.
          </PasswordInstructions>
          <AuthForm>
            <Session onSubmit={handleForgotPassword}>
              <FormField>
                <FieldSet>
                  <Label>Email Address</Label>
                  <LoginInput
                    type="text"
                    name="email"
                    value={email}
                    onChange={updateEmail}
                  />
                </FieldSet>
              </FormField>
              <Button type="submit">Send Reset Instructions</Button>
            </Session>
          </AuthForm>
        </AuthContent>
      </Content>
    </MainContainer>
  );
}

export default PasswordReset;

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
  background-color: #f2aa4c;
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

const AuthForm = styled.div``;
const FormField = styled.div`
  text-align: left;
`;
const Label = styled.label`
  display: block;
  justify-content: space-between;
  margin: 14px 0px 4px 0px;
  font-size: 15px;
  font-weight: 700;
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
const Session = styled.form``;
const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  background-color: #f2aa4c;
  color: #101820;
  font-size: 14px;
  padding: 16px 24px;
  border: 1.5px solid #f2aa4c;
  border-radius: 25px;
  height: 50px;
  cursor: pointer;
  font-weight: 600;
`;
const PasswordInstructions = styled.p`
  text-align: left;
  margin-bottom: 20px;
`;
