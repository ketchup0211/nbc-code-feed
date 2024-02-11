import styled from "styled-components";
import { useEffect, useState } from "react";
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";;

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
            {posts.map((post) => (
                <PostItem key={post.id} imageUrl={post.image}/>
            ))}
        </PostContainer>
    )
}

const PostContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #faecec;
    flex-shrink: 0;
    width: 100%;
`;
const PostItem = styled.div`
    width: 100%;
    padding-top: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;