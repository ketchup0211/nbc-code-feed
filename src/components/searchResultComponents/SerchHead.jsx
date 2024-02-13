import styled from "styled-components";
import { LinkStyle } from "src/util/Style";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "src/firebase";
import { useEffect } from "react";
import { initialization } from "src/redux/modules/user";
import { collection, getDocs, query } from "firebase/firestore";

function SerchHead() {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    let checkuid = "";
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
    onAuthStateChanged(auth, (user) => {
      checkuid = user.uid;
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
          <SvgImage src="/CodeFeed.svg" alt="CodeFeed SVG" />
        </LinkStyle>
        <LinkStyle to={"/sign-up"}>로그인</LinkStyle>
      </HeadNav>
    );
  }
  return (
    <HeadNav>
      <LinkStyle to={"/"}>
        <SvgImage src="/CodeFeed.svg" alt="CodeFeed SVG" />
      </LinkStyle>
      <Profile>
        <LinkStyle to={"/myPage"}>
          <UserDisplay>
            <ProfileName>{user.nickname}</ProfileName>
            <ProfileImage src={user.photoURL} alt="프로필 사진입니다." />
          </UserDisplay>
        </LinkStyle>
        <LogOutBtn onClick={logOut}>Logout</LogOutBtn>
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

const SvgImage = styled.img`
  width: 10vh;
  border-radius: 12px;
  opacity: 0.8;
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

const LogOutBtn = styled.button`
  border: none;
  height: 30px;
  margin: 8px;
  font-size: 12px;
`;
