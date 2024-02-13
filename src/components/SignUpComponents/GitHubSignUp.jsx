import { useContext } from "react";
import { handleAPISignUp } from "./event-handler/SignUpEvents";
import { APIButton } from "./styled-components/SignUpStyle";
import { SignUpContext } from "src/context/SignUpContext";

function GitHubSignUp() {
  const navigate = useContext(SignUpContext);
  const handleAPISignUpWithNavigate = (event) => {
    handleAPISignUp(event, navigate);
  };
  return (
    <APIButton
      type="button"
      onClick={handleAPISignUpWithNavigate}
      name="github"
    >
      Sign up with GitHub
    </APIButton>
  );
}
export default GitHubSignUp;
