import styled from 'styled-components';

export default function TodTob() {
    return (
        <TobTabContainer>
            <TobTabButton>Category</TobTabButton>
            <TobTabButton>Posting</TobTabButton>
            <TobTabButton>Home</TobTabButton>
        </TobTabContainer>
    )
}
const TobTabContainer = styled.nav`
    background-color: #f9f1d9;
    display: flex;
    height: 50px;
`;
const TobTabButton = styled.il`
    background-color: white;
    border: 0.1px solid black;
    margin: 5px;
    cursor: pointer;
`;