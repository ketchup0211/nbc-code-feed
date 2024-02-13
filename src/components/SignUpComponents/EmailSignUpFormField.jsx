import { useContext } from "react";
import { handleSignUpInput } from "./event-handler/SignUpEvents";
import {
  FieldSet,
  FormField,
  Label,
  SignUpInput,
} from "./styled-components/SignUpStyle";
import {
  SignUpDispatchContext,
  SignUpReduxActionContext,
} from "src/context/SignUpNavigateContext";

function EmailSignUpFormField({ id, label, type, placeholder }) {
  const dispatch = useContext(SignUpDispatchContext);
  const reduxActions = useContext(SignUpReduxActionContext);
  const handleSignUpInputWithRedux = (event) => {
    event.preventDefault();
    handleSignUpInput(event, dispatch, reduxActions);
  };
  return (
    <FormField>
      <FieldSet>
        <Label htmlFor={id}>{label}</Label>
        <SignUpInput
          id={id}
          onChange={handleSignUpInputWithRedux}
          autoComplete="off"
          type={type}
          placeholder={placeholder}
        />
      </FieldSet>
    </FormField>
  );
}
export default EmailSignUpFormField;
