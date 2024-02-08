import styled from "styled-components"

export default function EditButton() {
  return (
    <EditingButton>Edit Profile</EditingButton>
  )
}

const EditingButton = styled.button`
    background-color: #f4f4f3;
    width: 100px;
    height: 35px;
    border-radius: 30px;
    border: 0.1px solid black;
    border: none;
    cursor: pointer;
`;