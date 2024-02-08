import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "src/components/Button";
import { useSelector } from "react-redux";
import { auth } from "src/firebase";
import { signOut } from "firebase/auth";

function HomeHeader() {
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();

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
          <NavInput>
            <input type="text" placeholder="검색" />
            <Button
              content={"로그인"}
              width={"90"}
              onClick={() => navigate("loginPage")}
            />
          </NavInput>
        </NavList>
      </header>
    );
  return (
    <header>
      <NavList>
        <NavPage>
          <label>CodeFeed</label>
        </NavPage>
        <NavInput>
          <input type="text" placeholder="Search..." />
          <Link to={"/myPage"} style={{ textDecoration: "none" }}>
            <label>{user.displayName}</label>
          </Link>
          <Button content={"로그아웃"} width={"90"} onClick={logOut} />
        </NavInput>
      </NavList>
    </header>
  );
}

export default HomeHeader;

const NavList = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 5px;
  width: 99%;
  height: 50px;
`;

const NavPage = styled.ul`
  display: flex;
  gap: 5%;
  align-items: center;
  width: 90%;
`;

const NavInput = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px;
  & label {
    cursor: pointer;
    color: black;
    white-space: nowrap;
    font-size: 13px;
  }
  & input {
    border: none;
    background-color: whitesmoke;
    height: 40px;
    border-radius: 25px;
    padding: 10px;
  }
`;
