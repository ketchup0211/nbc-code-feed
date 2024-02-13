import { Link, useNavigate } from "react-router-dom";
import {
  AuthContent,
  BackButton,
  Content,
  SubTitle,
} from "./styled-components/SignUpStyle";
import { useState } from "react";
import EmailSignUpForm from "./EmailSignUpForm";
import { handleDataBack } from "./event-handler/SignUpEvents";
import { useSelector } from "react-redux";
import ChoiceSignUp from "./ChoiceSignUp";

function Contents() {
  const [signUp, setSignUp] = useState(false);
  const { name, username, email, password, agree } = useSelector(
    (store) => store.SignUpReducer
  );
  const navigate = useNavigate();

  return (
    <Content>
      {signUp ? (
        <BackButton type="button" onClick={handleDataBack}>
          &lt;
        </BackButton>
      ) : null}
      <AuthContent>
        <SubTitle>Sign up to Code Feed</SubTitle>
        {signUp ? <EmailSignUpForm /> : <ChoiceSignUp />}
      </AuthContent>
    </Content>
  );
}
export default Contents;
