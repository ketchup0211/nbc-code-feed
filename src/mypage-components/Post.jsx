import styled from "styled-components";
import { useEffect, useState } from "react";
import { db } from '../firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function Post() {

    const [posts, setPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        if (currentUser) {
            const fetchPosts = async () => {
                const postQuery = query(
                    collection(db, 'posts'),
                    where('author', '==', currentUser.uid)
                );
                const postsSnapshot = await getDocs(postQuery);
                const postList = postsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setPosts(postList);
            };

            fetchPosts();
        }
    }, [currentUser]);

    return (
        <PostContainer>
            {posts.map(post => (
                <PostBox key={post.id} >
                    <PostItem imageUrl={post.image} onClick={() => navigate(`/mypage/detail/${post.id}`)} />
                    <h1>title : {post.title}</h1>
                    <PostContent>{post.content}</PostContent>
                </PostBox>
            ))}
        </PostContainer>
    )
}

const PostContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #e0e0e0;
    flex-shrink: 0;
    width: 100%;
    gap: 0.5px;
    margin-top: 60px;
`;
const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 300px;
`;
const PostItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    cursor: pointer;
`;
const PostContent = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;