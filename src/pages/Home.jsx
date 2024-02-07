import FilterCheck from "components/HomeComponents/FilterCheck";
import HomeHeader from "components/HomeComponents/HomeHeader";
import PostList from "components/HomeComponents/PostList";

function Home() {
  return (
    <>
      <HomeHeader />
      <FilterCheck />
      <PostList />
    </>
  );
}

export default Home;
