import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "components/Button";

function HomeHeader() {
  return (
    <header>
      <NavList>
        <NavPage>
          <p>모든 게시글</p>
          <Link to={"/myPage"}>마이 페이지</Link>
        </NavPage>
        <NavInput>
          <input type="text" placeholder="검색" />
          <Button content={"로그인"} width={"70"} />
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
