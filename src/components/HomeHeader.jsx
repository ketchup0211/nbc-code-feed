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
          <div>
            <input type="text" placeholder="검색" />
          </div>
          <div>
            <Button content={"로그인"} width={"60"} />
          </div>
        </NavInput>
      </NavList>
    </header>
  );
}

export default HomeHeader;

const NavList = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

const NavPage = styled.ul`
  display: flex;
  gap: 5%;
  align-items: center;
  width: 30%;
`;

const NavInput = styled.ul`
  display: flex;
  gap: 5%;
`;
