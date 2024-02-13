import styled from "styled-components";
import { useEffect, useState } from "react";
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

export default function Post () {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const postsCollection = collection(db, 'posts');
            const postsSnapshot = await getDocs(postsCollection);
            const postList = postsSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
            setPosts(postList);
        };

        fetchPosts();
    }, []);

    return (
        <PostContainer>
            {posts.map(post => (
                <PostBox key={post.id} >
                <PostItem imageUrl={post.image}/>
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
    background-color: white;
    flex-shrink: 0;
    width: 100%;
    gap: 2px;
`;
const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    
    background-color: #faf2f2;
`;
const PostItem = styled.div`
    width: 100%;
    padding-top: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
const PostContent = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;