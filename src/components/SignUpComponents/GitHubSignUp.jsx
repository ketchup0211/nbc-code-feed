import { useContext } from "react";
import { handleAPISignUp } from "./event-handler/SignUpEvents";
import { APIButton } from "./styled-components/SignUpStyle";
import { SignUpNavigateContext } from "src/context/SignUpNavigateContext";

function GitHubSignUp() {
  const navigate = useContext(SignUpNavigateContext);
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
