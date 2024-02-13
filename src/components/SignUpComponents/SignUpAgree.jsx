import { useContext } from "react";
import { handleSignUpInput } from "./event-handler/SignUpEvents";
import {
  CheckBox,
  FieldSet,
  FormField,
  Label,
} from "./styled-components/SignUpStyle";
import {
  SignUpDispatchContext,
  SignUpReduxActionContext,
} from "src/context/SignUpNavigateContext";

function SignUpAgree() {
  const dispatch = useContext(SignUpDispatchContext);
  const reduxActions = useContext(SignUpReduxActionContext);
  const handleSignUpInputWithRedux = (event) => {
    event.preventDefault();
    handleSignUpInput(event, dispatch, reduxActions);
  };
  return (
    <FormField>
      <FieldSet
        style={{
          display: "flex",
          marginTop: "30px",
        }}
      >
        <CheckBox
          id="user-agree"
          onChange={handleSignUpInputWithRedux}
          type="checkbox"
          required
        />
        <Label htmlFor="user-agree" style={{ margin: "0px" }}>
          I agree with Code Feeds
        </Label>
      </FieldSet>
    </FormField>
  );
}

export default SignUpAgree;
