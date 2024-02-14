import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "src/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "src/redux/modules/postList";
import { LinkStyle } from "src/util/Style";
import Loading from "../Loading";

function PostList() {
  const post = useSelector((state) => state.postList.post);
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

      dispatch(addPost(initialTodos));
    };
    fetchData();
  }, []);

  if (post === null) return <Loading />;
  if (id === undefined)
    return (
      <PostsContainer>
        <PostListMain>
          {post.map((e) => {
            return (
              <div>
                <PostCard>
                  <div>
                    <PostImage src={e.image} alt="게시글 이미지 입니다." />
                    <span>{e.title}</span>
                  </div>
                  <p style={{ fontWeight: "400" }}>{e.nickname}</p>
                </PostCard>
              </div>
            );
          })}
        </PostListMain>
      </PostsContainer>
    );
  return (
    <PostsContainer>
      <PostListMain>
        {post
          .filter((i) => {
            return i.language === id;
          })
          .map((e) => {
            return (
              <LinkStyle key={e.id} to={`/detail/${e.id}`}>
                <PostCard>
                  <div style={{ display: "flex" }}>
                    <image src={e.image} alt="게시글 이미지 입니다." />
                    <span>{e.title}</span>
                  </div>
                  <p>{e.nickname}</p>
                </PostCard>
              </LinkStyle>
            );
          })}
      </PostListMain>
    </PostsContainer>
  );
}

export default PostList;

const PostListMain = styled.ol`
  min-height: 400px;
  padding: 0px 20px;
  display: grid;
  place-items: stretch;
  grid-gap: 36px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  list-style: none;
`;

const PostCard = styled.li`
  color: white;
  display: grid;
  place-items: center;
  flex-direction: column;
  justify-content: space-around;
  position: static;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 10px;
  cursor: pointer;
  & > div {
    position: relative;
    width: 100%;
    height: 100%;
  }
  & span {
    text-align: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    color: white;
    background-color: rgba(0, 0, 0, 0.56);
    transition: all 0.25s ease-in-out;
    padding: 8px 16px;
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

//cham
const PostsContainer = styled.div`
  margin: 20px 0px;
  padding: 16px 0px;
  height: 100%;
  overflow-y: scroll;
`;

const PostImage = styled.img`
  background-color: white;
  max-height: 180px;
  max-width: 315px;
  min-height: 180px;
  min-width: 315px;
  transform: scale(1.05);
  object-fit: cover;
  border-radius: 12px;
  text-align: center;
`;
