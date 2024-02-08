import styled from "styled-components";
import { useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "src/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "src/redux/modules/postList";

function PostList() {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.postList);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "posts"));
      const querySnapshot = await getDocs(q);

      const initialTodos = [];

      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data(),
        };
        initialTodos.push(data);
      });
      dispatch(addTodos(initialTodos));
    };
    fetchData();
  }, [dispatch]);
  if (post === null) return <div>포스트가 없습니다.</div>;
  return (
    <PostListMain>
      {post.map((e) => {
        return (
          <PostCard key={e.id}>
            <p>{e.content}</p>
            <p>{e.name}</p>
            <p>{e.profile}</p>
            <p>{e.title}</p>
          </PostCard>
        );
      })}
    </PostListMain>
  );
}

export default PostList;

const PostListMain = styled.main`
  min-height: 400px;
  height: auto;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
`;

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 200px;
  height: 150px;
  margin: 5px;
`;
