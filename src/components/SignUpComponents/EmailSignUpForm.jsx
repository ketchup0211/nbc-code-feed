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
function EmailSignUpForm() {
  return (
    <AuthForm>
      <SignUpForm onSubmit={createAccount}>
        <FormFieldGroup>
          <FormField>
            <FieldSet>
              <Label htmlFor="name">Name</Label>
              <SignUpInput
                id="name"
                onChange={handleSignUpInput}
                autoComplete="off"
              />
            </FieldSet>
          </FormField>
          <FormField>
            <FieldSet>
              <FieldSet>
                <Label htmlFor="username">Username</Label>
                <SignUpInput
                  id="username"
                  onChange={handleSignUpInput}
                  autoComplete="off"
                />
              </FieldSet>
            </FieldSet>
          </FormField>
        </FormFieldGroup>
        <FormField>
          <FieldSet>
            <Label htmlFor="email">Email</Label>
            <SignUpInput
              id="email"
              onChange={handleSignUpInput}
              autoComplete="off"
            />
          </FieldSet>
        </FormField>
        <FormField>
          <FieldSet>
            <Label htmlFor="password">Password</Label>
            <SignUpInput
              id="password"
              onChange={handleSignUpInput}
              type="password"
              placeholder="6+characters"
              autoComplete="off"
            />
          </FieldSet>
        </FormField>
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
