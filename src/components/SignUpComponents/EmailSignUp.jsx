import { useContext } from "react";
import { handleEmailSignUp } from "./event-handler/SignUpEvents";
import { APIButton } from "./styled-components/SignUpStyle";
import { SignUpModeContext } from "src/context/SignUpNavigateContext";

function EmailSignUp() {
  const setSignUp = useContext(SignUpModeContext);
  const handleEmailSignUpMode = (event) => {
    event.preventDefault();
    handleEmailSignUp(event, setSignUp);
  };
  return (
    <APIButton type="button" name="email" onClick={handleEmailSignUpMode}>
      Continue with email
    </APIButton>
  );
}

export default EmailSignUp;
