import FilterCheck from "src/components/HomeComponents/FilterCheck";
import HomeHeader from "src/components/HomeComponents/HomeHeader";
import PostList from "src/components/HomeComponents/PostList";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LinkStyle } from "src/util/Style";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <HomeHeader />
      <FilterCheck />
      <PostList />
      <TestDiv>
        <button onClick={() => navigate("/detail")}>
          디테일 페이지로 이동
        </button>
        <button onClick={() => navigate("/WriteDetail")}>
          작성 페이지로 이동
        </button>
        <button onClick={() => navigate("/loginPage")}>로그인 페이지</button>
        <button onClick={() => navigate("/mypage")}>마이페이지</button>
        <button onClick={() => navigate("/")}>전체게시글</button>
        <LinkStyle to={"/editProfile"}>프로필 수정 페이지</LinkStyle>
      </TestDiv>
    </>
  );
}

export default Home;

const TestDiv = styled.div`
  /* display: none; */
`;
