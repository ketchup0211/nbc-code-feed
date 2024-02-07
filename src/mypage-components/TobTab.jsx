import styled from 'styled-components';

export default function TodTob() {
    return (
        <TobTabContainer>
            <HomeAndModifyButton>Home</HomeAndModifyButton>
            <HomeAndModifyButton>프로필 수정</HomeAndModifyButton>
        </TobTabContainer>
    )
}
const TobTabContainer = styled.nav`
    background-color: #f9f1d9;
    display: flex;
    justify-content: space-between;
    margin: 5px;
    height: 50px;
`;
const HomeAndModifyButton = styled.button`
    width: 100px;
    height: 35px;
    border-radius: 5px;
`;