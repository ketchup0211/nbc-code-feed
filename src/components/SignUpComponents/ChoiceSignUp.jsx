import { Link } from "react-router-dom";
import {
  handleAPISignUp,
  handleEmailSignUp,
} from "./event-handler/SignUpEvents";
import {
  APIButton,
  AuthLink,
  FontSmall,
  HrDivider,
} from "./styled-components/SignUpStyle";
import GitHubSignUp from "./GitHubSignUp";
import GoogleSignUp from "./GoogleSignUp";
import EmailSignUp from "./EmailSignUp";

function ChoiceSignUp() {
  return (
    <>
      <GitHubSignUp />
      <GoogleSignUp />
      <HrDivider />
      <EmailSignUp />
      <FontSmall>
        By creating account you agree with our Terms of Sevice, Privacy Policy,
        and our default Notification Settings.
      </FontSmall>
      <AuthLink>
        Already have an account? <Link to="/login">Sign In</Link>
      </AuthLink>
    </>
  );
}

export default ChoiceSignUp;
