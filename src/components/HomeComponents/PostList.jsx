import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "src/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "src/redux/modules/postList";

function PostList() {
  const { post } = useSelector((state) => state.postList);
  const { id } = useParams();
  const dispatch = useDispatch();

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
  if (id === undefined)
    return (
      <PostListMain>
        {post.map((e) => {
          return (
            <LinkStyle key={e.id} to={`/detail/${e.id}`}>
              <PostCard>
                <div>
                  <img src={e.image} alt="게시글 이미지 입니다." />
                  <span>{e.title}</span>
                </div>
                <p>{e.name}</p>
              </PostCard>
            </LinkStyle>
          );
        })}
      </PostListMain>
    );
  return (
    <PostListMain>
      {post
        .filter((i) => {
          return i.language === id;
        })
        .map((e) => {
          return (
            <LinkStyle key={e.id} to={`/detail/${e.id}`}>
              <PostCard>
                <div>
                  <img src={e.image} alt="게시글 이미지 입니다." />
                  <span>{e.title}</span>
                </div>
                <p>{e.name}</p>
              </PostCard>
            </LinkStyle>
          );
        })}
    </PostListMain>
  );
}

export default PostList;

const PostListMain = styled.ol`
  min-height: 400px;
  height: auto;
  margin-left: 5%;
  display: grid;
  grid-gap: 36px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  list-style: none;
`;

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 315px;
  height: 236px;
  margin: 5px;
  & span {
    position: relative;
    bottom: 100%;
    height: 99%;
    opacity: 0;
    visibility: none;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 12px;
    color: white;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.25s ease-in-out;
  }
  & img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
  :hover {
    & span {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;
