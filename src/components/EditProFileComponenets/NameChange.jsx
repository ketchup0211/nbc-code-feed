import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "src/firebase";
import styled from "styled-components";

function NameChange({ dispatchUser }) {
  const [name, setName] = useState("");

  const proFileChange = async () => {
    if (name === "") {
      alert("이름을 입력해주시기 바랍니다.");
      return;
    }
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    dispatchUser();
    setName("");
  };
  return (
    <NameChangeMain>
      <p>Name Change</p>
      <NameChangeInput
        type="text"
        placeholder="변경할 이름을 입력해주세요"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <ChangeBtn onClick={proFileChange}>Name Change</ChangeBtn>
    </NameChangeMain>
  );
}

export default NameChange;

const NameChangeMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
`;

const NameChangeInput = styled.input`
  height: 40px;
  width: 300px;
  border: none;
  box-shadow: 1px 3px 5px 5px gray;
  border-radius: 12px;
  padding: 5px;
`;

const ChangeBtn = styled.button`
  border: none;
  width: 130px;
  height: 40px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 1px 1px 5px 1px gray;
`;
