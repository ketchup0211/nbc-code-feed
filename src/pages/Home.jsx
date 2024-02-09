import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterCheck from "src/components/HomeComponents/FilterCheck";
import HomeHeader from "src/components/HomeComponents/HomeHeader";
import PostList from "src/components/HomeComponents/PostList";
import { auth, db } from "src/firebase";
import { log } from "src/redux/modules/user";
import { addTodos } from "src/redux/modules/postList";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import FileUpload from "src/components/HomeComponents/test/FileUpload";

function Home() {
  const { post } = useSelector((state) => state.postList);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(log(user));
    });
  }, [dispatch]);

  const onchangeHandler = () => {
    setContent(event.target.value);
  };

  const addTodo = async (event) => {
    event.preventDefault();
    const newTodo = { text: content, isDone: false };
    dispatch(addTodos([{ ...newTodo, id: crypto.randomUUID() }, ...post]));
    setContent("");
    const collectionRef = collection(db, "posts");
    await addDoc(collectionRef, newTodo);
  };

  return (
    <>
      <HomeHeader />
      <FilterCheck />
      <PostList />
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={onchangeHandler}
        />
        <button>등록</button>
      </form>
      <button onClick={() => navigate("/detail")}>디테일 페이지로 이동</button>
      <button onClick={() => navigate("/WriteDetail")}>
        작성 페이지로 이동
      </button>
      <button onClick={() => navigate("/loginPage")}>로그인 페이지</button>
      <button onClick={() => navigate("/mypage")}>마이페이지</button>
      <button onClick={() => navigate("/")}>전체게시글</button>
      <FileUpload />
    </>
  );
}

export default Home;
