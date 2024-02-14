import FilterCheck from "src/components/HomeComponents/FilterCheck";
import HomeHeader from "src/components/HomeComponents/HomeHeader";
import PostList from "src/components/HomeComponents/PostList";
import styled from "styled-components";

function Home() {
  return (
    <Background>
      <HomeHeader />
      <FilterCheck />
      <PostList />
    </Background>
  );
}

export default Home;

const Background = styled.div`
  background-color: whitesmoke;
  height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
`;
