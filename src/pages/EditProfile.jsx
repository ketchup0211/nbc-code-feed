import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "src/components/Button";
import ImageChange from "src/components/EditProFileComponenets/ImageChange";
import HomeHeader from "src/components/HomeComponents/HomeHeader";
import { auth } from "src/firebase";
import { log } from "src/redux/modules/user";
import { LinkStyle } from "src/util/Style";
import styled from "styled-components";

function EditProfile() {
  const { user } = useSelector((state) => state.users);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const dispatchUser = () => {
    dispatch(log(user));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(log(user));
    });
  }, [dispatch]);
  // console.log(user);

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

  if (user === null)
    return (
      <>
        <div>로딩중</div>
        <LinkStyle to={"/"}>
          <label>홈으로 가기</label>
        </LinkStyle>
      </>
    );
  return (
    <>
      <HomeHeader />
      <Background>
        <ImageChange user={user} dispatchUser={dispatchUser} />
        <NameChange>
          <p>Name Change</p>
          <NameChangeInput
            type="text"
            placeholder="변경할 이름을 입력해주세요"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Button
            content={"Name Change"}
            width={"110"}
            onClick={proFileChange}
          />
        </NameChange>
      </Background>
    </>
  );
}

export default EditProfile;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const NameChange = styled.div`
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
