import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import FilterCheck from "src/components/HomeComponents/FilterCheck";
import HomeHeader from "src/components/HomeComponents/HomeHeader";
import PostList from "src/components/HomeComponents/PostList";
import { auth } from "src/firebase";
import { log } from "src/redux/modules/user";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(log(user));
      console.log(user);
    });
  });
  return (
    <>
      <HomeHeader />
      <FilterCheck />
      <PostList />
    </>
  );
}

export default Home;
