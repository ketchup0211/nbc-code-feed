import { handleEmailSignUp } from "./event-handler/SignUpEvents";
import { APIButton } from "./styled-components/SignUpStyle";

function EmailSignUp() {
  return (
    <APIButton type="button" name="email" onClick={handleEmailSignUp}>
      Continue with email
    </APIButton>
  );
}

export default EmailSignUp;
