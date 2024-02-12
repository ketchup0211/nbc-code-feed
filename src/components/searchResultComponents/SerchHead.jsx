import styled from "styled-components";
import { LinkStyle } from "src/util/Style";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "src/firebase";
import { useEffect } from "react";
import { log } from "src/redux/modules/user";

function SerchHead() {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(log(user));
    });
  }, [dispatch]);

  const logOut = async (event) => {
    event.preventDefault();
    await signOut(auth);
  };

  if (user === null) {
    return (
      <HeadNav>
        <LinkStyle to={"/"}>
          <label>CodeFeed</label>
        </LinkStyle>
        <LinkStyle to={"/sign-up"}>로그인</LinkStyle>
      </HeadNav>
    );
  }
  return (
    <HeadNav>
      <LinkStyle to={"/"}>
        <label>CodeFeed</label>
      </LinkStyle>
      <Profile>
        <LinkStyle to={"/myPage"}>
          <UserDisplay>
            <ProfileName>{user.displayName}</ProfileName>
            <ProfileImage src={user.photoURL} alt="프로필 사진입니다." />
          </UserDisplay>
        </LinkStyle>
        <Button content={"로그아웃"} width={"90"} onClick={logOut} />
      </Profile>
    </HeadNav>
  );
}

export default SerchHead;

const HeadNav = styled.nav`
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px;
  & label {
    cursor: pointer;
  }
`;

const Profile = styled.div`
  display: flex;
`;

const UserDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileName = styled.label`
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
