import {
  AuthForm,
  CheckBox,
  FieldSet,
  FormButton,
  FormField,
  FormFieldGroup,
  Label,
  SignUpForm,
  SignUpInput,
} from "./styled-components/SignUpStyle";
import { createAccount, handleSignUpInput } from "./event-handler/SignUpEvents";
import EmailSignUpFormField from "./EmailSignUpFormField";
function EmailSignUpForm() {
  return (
    <AuthForm>
      <SignUpForm onSubmit={createAccount}>
        <FormFieldGroup>
          <EmailSignUpFormField id="name" label="Name" />
          <EmailSignUpFormField id="username" label="Username" />
        </FormFieldGroup>
        <EmailSignUpFormField id="email" label="Email" />
        <EmailSignUpFormField
          id="password"
          label="Password"
          type="password"
          placeholder="6+characters"
        />
        <FormField>
          <FieldSet
            style={{
              display: "flex",
              marginTop: "30px",
            }}
          >
            <CheckBox
              id="user-agree"
              onChange={handleSignUpInput}
              type="checkbox"
              required
            />
            <Label htmlFor="user-agree" style={{ margin: "0px" }}>
              I agree with Code Feeds
            </Label>
          </FieldSet>
        </FormField>
        <FormButton type="submit">Sign Up</FormButton>
      </SignUpForm>
    </AuthForm>
  );
}
export default EmailSignUpForm;
