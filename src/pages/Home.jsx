import FilterCheck from "src/components/HomeComponents/FilterCheck";
import HomeHeader from "src/components/HomeComponents/HomeHeader";
import PostList from "src/components/HomeComponents/PostList";
import { LinkStyle } from "src/util/Style";
import styled from "styled-components";

function Home() {
  return (
    <Background>
      <HomeHeader />
      <FilterCheck />
      <PostList />
      <LinkStyle to={"/WriteDetail"}>작성 디테일</LinkStyle>
    </Background>
  );
}

export default Home;

const Background = styled.div`
  background-color: whitesmoke;
`;
