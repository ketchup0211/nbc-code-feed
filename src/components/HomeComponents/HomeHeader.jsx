import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "src/components/Button";
import { useSelector } from "react-redux";
import { auth } from "src/firebase";
import { signOut } from "firebase/auth";

function HomeHeader() {
  const { user } = useSelector((state) => state.users);

  const logOut = async (event) => {
    event.preventDefault();
    await signOut(auth);
  };
  if (user === null)
    return (
      <header>
        <NavList>
          <NavPage>
            <label>CodeFeed</label>
          </NavPage>
          <NavInformation>
            <input type="text" placeholder="검색" />
            <LinkStyle to={"/loginPage"}>로그인</LinkStyle>
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
          <input type="text" placeholder="Search..." />
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
