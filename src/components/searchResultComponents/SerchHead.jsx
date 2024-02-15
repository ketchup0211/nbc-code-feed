import styled from "styled-components";
import { LinkStyle } from "src/util/Style";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "src/firebase";
import { useEffect, useState } from "react";
import { initialization } from "src/redux/modules/user";
import { collection, getDocs, query } from "firebase/firestore";
import CodeFeedLogo from "src/assets/CodeFeedLogo.svg";

function SerchHead() {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [checkuid, setCheckuid] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCheckuid(user.uid);
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (checkuid) {
      const fetchData = async () => {
        const q = query(collection(db, "users"));
        const querySnapshot = await getDocs(q);

        const initialTodos = [];

        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            ...doc.data(),
          };
          initialTodos.push(data);
        });
        const check = initialTodos.find((e) => e.id === checkuid);
        dispatch(initialization(check));
      };
      fetchData();
    }
  }, [checkuid, dispatch]);

  const logOut = async (event) => {
    event.preventDefault();
    await signOut(auth);
  };

  if (user === null) {
    return (
      <HeadNav>
        <LinkStyle to={"/"}>
          <img src={CodeFeedLogo} alt="CodeFeedLogo" />
        </LinkStyle>
        <LinkStyle to={"/sign-up"}>로그인</LinkStyle>
      </HeadNav>
    );
  }
  return (
    <HeadNav>
      <LinkStyle to={"/"}>
        <img src={CodeFeedLogo} alt="CodeFeedLogo" />
      </LinkStyle>
      <Profile>
        <LinkStyle to={"/myPage"}>
          <UserDisplay>
            <ProfileName>{user.nickname}</ProfileName>
            <ProfileImage src={user.profileImg} alt="프로필 사진입니다." />
          </UserDisplay>
        </LinkStyle>
        <LogOutBtn onClick={logOut}>Logout</LogOutBtn>
      </Profile>
    </HeadNav>
  );
}

export default SerchHead;

const HeadNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  height: 110px;
  overflow-x: hidden;
  justify-content: space-between;
  border-bottom: 1px solid #f2aa4c;
  & label {
    cursor: pointer;
  }
`;

const SvgImage = styled.img`
  width: 10vh;
  border-radius: 12px;
  opacity: 0.8;
`;

const Profile = styled.div`
  display: flex;
  gap: 65px;
  align-items: center;
  width: 17%;
`;

const UserDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  &:hover {
    & * {
      color: #f2aa4c;
    }
  }
`;

const ProfileName = styled.label`
  font-weight: 500;
  color: white;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const LogOutBtn = styled.button`
  font-weight: "400";
  color: white;
  background-color: transparent;
  border: none;
  border-radius: 25px;
  line-height: 10px;
  padding: 20px;
  margin: 8px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  &:hover {
    color: #f2aa4c;
  }
`;
