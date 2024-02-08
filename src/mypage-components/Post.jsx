import styled from "styled-components";

export default function Post () {

    const posts = [
        { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMz6LAptxabLdMx-mTJTi2wMkKK3ioQG-yUw&usqp=CAU'},
        { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMz6LAptxabLdMx-mTJTi2wMkKK3ioQG-yUw&usqp=CAU'},
        { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMz6LAptxabLdMx-mTJTi2wMkKK3ioQG-yUw&usqp=CAU'},
        { id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMz6LAptxabLdMx-mTJTi2wMkKK3ioQG-yUw&usqp=CAU'},
        { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMz6LAptxabLdMx-mTJTi2wMkKK3ioQG-yUw&usqp=CAU'},
        { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMz6LAptxabLdMx-mTJTi2wMkKK3ioQG-yUw&usqp=CAU'},
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