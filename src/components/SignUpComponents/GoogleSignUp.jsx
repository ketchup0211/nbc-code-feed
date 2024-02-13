import { handleAPISignUp } from "./event-handler/SignUpEvents";
import { APIButton } from "./styled-components/SignUpStyle";
import { useContext } from "react";
import { SignUpContext } from "src/context/SignUpContext";

function GoogleSignUp() {
  const navigate = useContext(SignUpContext);
  const handleAPISignUpWithNavigate = (event) => {
    handleAPISignUp(event, navigate);
  };
  return (
    <APIButton
      type="button"
      onClick={handleAPISignUpWithNavigate}
      name="google"
    >
      Sign up with Google
    </APIButton>
  );
}

export default GoogleSignUp;
