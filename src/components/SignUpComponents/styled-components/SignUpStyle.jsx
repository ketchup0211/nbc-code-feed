import styled from "styled-components";

//  div
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100vh;
  overflow: hidden;
`;

export const AuthSidebar = styled.div`
  width: 450px;
  height: 100%;
  background-color: #f2aa4c;
  color: #f2aa4c;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0px 20px;
`;

export const AuthContent = styled.div`
  width: 100%;
  max-width: 416px;
  text-align: center;
  margin: auto;
`;

export const FormField = styled.div`
  text-align: left;
`;

export const AuthForm = styled.div``;

export const FormFieldGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

//  button
export const FormButton = styled.button`
  cursor: pointer;
  background-color: #0e0c22;
  color: white;
  padding: 16px 24px;
  margin-top: 20px;
  width: 100%;
  border: 1.5px solid #0e0c22;
  border-radius: 25px;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 40px;
  background-color: white;
  border: 1.5px solid #e7e7e9;
  margin: 20px 0px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const APIButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => {
    switch (props.name) {
      case "google":
        return "white";
      case "github":
        return "black";
      default:
        return "#F2AA4C";
    }
  }};
  color: ${(props) => {
    switch (props.name) {
      case "google":
        return "#0e0c22";
      case "github":
        return "white";
      default:
        return "#101820";
    }
  }};
  font-weight: 600;
  padding: 16px 24px;
  margin-top: 20px;
  width: 100%;
  border: 1.5px solid
    ${(props) => {
      switch (props.name) {
        case "google":
          return "#e8e8ea";
        case "github":
          return "black";
        default:
          return "#F2AA4C";
      }
    }};
  border-radius: 25px;
`;

//  input
export const SignUpInput = styled.input`
  width: 100%;
  margin-right: 8px;
  padding: 18px 20px;
  border: 1.5px solid #e7e7e9;
  border-radius: 12px;
`;

export const CheckBox = styled.input`
  margin: 0px 12px 0px 0px;
  border: 1px solid #e7e7e9;
  border-radius: 0px;
  transform: scale(1.05);
`;

//  label
export const Label = styled.label`
  display: block;
  justify-content: space-between;
  margin: 14px 0px 4px 0px;
  font-size: 15px;
  font-weight: 700;
`;

//  form
export const SignUpForm = styled.form``;

//  p
export const FontSmall = styled.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 400w;
  color: #3d3d4e;
`;

export const AuthLink = styled.p`
  margin-top: 20px;
  color: #3d3d4e;
`;

//  h2
export const SubTitle = styled.h2`
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 24px;
  text-align: left;
`;

//  hr
export const HrDivider = styled.hr`
  margin: 30px 0px;
  border: none;
  background-color: #c6c6c6;
  color: black;
  text-align: center;
  overflow: visible;
  height: 1px;
  &::after {
    content: "or";
    display: inline-block;
    position: relative;
    top: -7px;
    padding: 0 16px;
    background-color: #fff;
  }
`;

//  fieldset
export const FieldSet = styled.fieldset`
  margin-bottom: 12px;
`;
