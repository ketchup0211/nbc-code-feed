import styled from "styled-components";

export default function Post () {

    const posts = [
        { id: 1, image: 'url-to-image-1'},
        { id: 2, image: 'url-to-image-2'},
        { id: 3, image: 'url-to-image-3'},
        { id: 4, image: 'url-to-image-4'},
        { id: 5, image: 'url-to-image-5'},
        { id: 6, image: 'url-to-image-6'},
    ];

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
    gap: 10px;
`;
const PostItem = styled.div`
    width: 100%;
    padding-top: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;