import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "src/components/Button";
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
            <form onSubmit={() => navigate("/searchResult")}>
              <input
                type="text"
                placeholder="검색"
                value={search}
                onChange={inputChcange}
              />
              <Button content={"검색하기"} width={"100"} />
            </form>
            <LinkStyle to={"/sign-up"}>로그인</LinkStyle>
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
          <form>
            <input
              type="text"
              placeholder="검색"
              value={search}
              onChange={inputChcange}
            />
            <Button
              content={"검색하기"}
              width={"100"}
              onClick={() => navigate("/searchResult")}
            />
          </form>
          <Profile>
            <LinkStyle to={"/myPage"}>
              <UserDisplay>
                <ProfileName>{user.displayName}</ProfileName>
                <ProfileImage src={user.photoURL} alt="프로필 사진입니다." />
              </UserDisplay>
            </LinkStyle>
            <Button content={"로그아웃"} width={"90"} onClick={logOut} />
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
    background-color: whitesmoke;
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
