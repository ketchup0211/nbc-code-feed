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
  console.log(user.email);
  if (user === null)
    return (
      <header>
        <NavList>
          <NavPage>
            <p>모든 게시글</p>
            <Link to={"/myPage"}>마이 페이지</Link>
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
          <p>모든 게시글</p>
          <Link to={"/myPage"}>마이 페이지</Link>
        </NavPage>
        <NavInput>
          <input type="text" placeholder="검색" />
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
  border: 1px solid black;
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
  align-items: center;
  gap: 5%;
  width: 50%;
  margin: 10px;
`;
