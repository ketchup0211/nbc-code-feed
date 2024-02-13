import { handleSignUpInput } from "./event-handler/SignUpEvents";
import {
  FieldSet,
  FormField,
  Label,
  SignUpInput,
} from "./styled-components/SignUpStyle";

function EmailSignUpFormField({ id, label, type, placeholder }) {
  return (
    <FormField>
      <FieldSet>
        <Label htmlFor={id}>{label}</Label>
        <SignUpInput
          id={id}
          onChange={handleSignUpInput}
          autoComplete="off"
          type={type}
          placeholder={placeholder}
        />
      </FieldSet>
    </FormField>
  );
}
export default EmailSignUpFormField;
