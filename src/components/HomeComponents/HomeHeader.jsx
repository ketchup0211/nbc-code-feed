import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "src/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { checkSearch } from "src/redux/modules/search";
import { initialization } from "src/redux/modules/user";
import { LinkStyle } from "src/util/Style";
import { collection, getDocs, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import CodeFeedLogo from "src/assets/CodeFeedLogo.svg";

function HomeHeader() {
  const user = useSelector((state) => state.users.user);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async (checkuid) => {
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

    const authStateChangedCallback = (user) => {
      if (user) {
        fetchData(user.uid);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, authStateChangedCallback);

    return () => unsubscribe();
  }, [dispatch]);

  const logOut = async (event) => {
    event.preventDefault();
    await signOut(auth);
    dispatch(initialization(null));
  };

  const inputChcange = (e) => {
    dispatch(checkSearch(e.target.value));
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    navigate("/searchResult");
    dispatch(initialization(null));
  };

  return (
    <NavList>
      <NavPage>
        <LinkStyle to={"/"}>
          <img src={CodeFeedLogo} alt="CodeFeedLogo" />
        </LinkStyle>
      </NavPage>
      <NavInformation>
        <form onSubmit={SubmitHandler}>
          <SearchInput
            type="text"
            placeholder="검색"
            value={search}
            onChange={inputChcange}
            style={{ backgroundColor: "#f2f2f3" }}
          />
        </form>
        {user ? (
          <Profile>
            <UserDisplay onClick={() => navigate("/myPage")}>
              <ProfileName>{user.nickname}</ProfileName>
              <ProfileImage src={user.profileImg} alt="프로필 사진입니다." />
            </UserDisplay>
            <LogOutBtn onClick={logOut}>Logout</LogOutBtn>
          </Profile>
        ) : (
          <LinkStyle
            to={"/login"}
            style={{ fontWeight: "500", color: "#F2AA4C" }}
          >
            Login
          </LinkStyle>
        )}
      </NavInformation>
    </NavList>
  );
}

export default HomeHeader;

const NavList = styled.nav`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  height: 100px;
  overflow-x: hidden;
  border-bottom: 1px solid #f2aa4c;
`;

const NavPage = styled.ul`
  align-items: center;
  padding: 6px;
`;

const SvgImage = styled.img`
  width: 10vh;
  border-radius: 12px;
  opacity: 0.8;
`;

const NavInformation = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
  gap: 20px;
  align-items: center;
  width: 100%;
  margin: 10px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

//cham
const SearchInput = styled.input`
  background-color: #f2f2f3;
  padding: 20px;
  border: none;
  border-radius: 25px;
  height: 15px;
  &:focus {
    outline: none;
  }
`;
