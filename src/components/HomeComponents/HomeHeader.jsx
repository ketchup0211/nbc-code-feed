import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "src/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { checkSearch } from "src/redux/modules/search";
import { useEffect } from "react";
import { log } from "src/redux/modules/user";
import { LinkStyle } from "src/util/Style";

function HomeHeader() {
  const { user } = useSelector((state) => state.users);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(log(user));
    });
  }, [dispatch]);

  const logOut = async (event) => {
    event.preventDefault();
    navigate("/");
    await signOut(auth);
  };

  const inputChcange = (e) => {
    dispatch(checkSearch(e.target.value));
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    navigate("/searchResult");
  };

  if (user === null)
    return (
      <header>
        <NavList>
          <NavPage>
            <LinkStyle to={"/"}>
              <label>CodeFeed</label>
            </LinkStyle>
          </NavPage>
          <NavInformation>
            <form onSubmit={SubmitHandler}>
              <input
                type="text"
                placeholder="검색"
                value={search}
                onChange={inputChcange}
              />
            </form>
            <LinkStyle to={"/sign-up"}>Login</LinkStyle>
          </NavInformation>
        </NavList>
      </header>
    );
  return (
    <header>
      <NavList>
        <NavPage>
          <LinkStyle to={"/"}>
            <label>CodeFeed</label>
          </LinkStyle>
        </NavPage>
        <NavInformation>
          <form onSubmit={SubmitHandler}>
            <input
              type="text"
              placeholder="검색"
              value={search}
              onChange={inputChcange}
            />
          </form>
          <Profile>
            <LinkStyle to={"/myPage"}>
              <UserDisplay>
                <ProfileName>{user.displayName}</ProfileName>
                <ProfileImage src={user.photoURL} alt="프로필 사진입니다." />
              </UserDisplay>
            </LinkStyle>
            <LogOutBtn onClick={logOut}>Logout</LogOutBtn>
          </Profile>
        </NavInformation>
      </NavList>
    </header>
  );
}

export default HomeHeader;

const NavList = styled.nav`
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 5px;
  width: 100%;
  height: 50px;
`;

const NavPage = styled.ul`
  display: flex;
  align-items: center;
  & label {
    cursor: pointer;
  }
`;

const NavInformation = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px;
  & input {
    border: none;
    height: 40px;
    border-radius: 25px;
    padding: 10px;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
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
