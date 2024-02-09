import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "src/components/Button";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "src/firebase";
import { signOut } from "firebase/auth";
import { checkSearch } from "src/redux/modules/search";

function HomeHeader() {
  const { user } = useSelector((state) => state.users);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = async (event) => {
    event.preventDefault();
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
            <label>CodeFeed</label>
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
            <LinkStyle to={"/sign-up"}>로그인</LinkStyle>
          </NavInformation>
        </NavList>
      </header>
    );
  return (
    <header>
      <NavList>
        <NavPage>
          <label>CodeFeed</label>
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
          <div>
            <LinkStyle to={"/myPage"}>
              <ProfileName>{user.displayName}</ProfileName>
            </LinkStyle>
            <Button content={"로그아웃"} width={"90"} onClick={logOut} />
          </div>
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

const ProfileName = styled.label`
  cursor: pointer;
`;

const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
  white-space: nowrap;
  font-size: 15px;
`;
