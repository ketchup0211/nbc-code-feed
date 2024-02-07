import styled from "styled-components"
import GlobalStyle from "../GlobalStyle"
import TodTob from "../mypage-components/TobTab"
import ProfilePicture from "../mypage-components/ProfilePicture"
import UserInfo from "../mypage-components/UserInfo"
import Post from "../mypage-components/Post"

export default function MyPage() {
    const userInfo = {
        name: '이지은',
        email: 'lge9380@naver.com',
        link: 'https://naver.com',
        phoneNumber: '010-1111-1111'
    };

    return (
        <>
            <GlobalStyle />
            <MyPageContainer>
                <TodTob />
                <SubContainer>
                    <ProfilePicture />
                    <UserInfo {...userInfo} />
                    <Post />
                </SubContainer>
            </MyPageContainer>
        </>
    )
}

const MyPageContainer = styled.div`

`;
const SubContainer = styled.div`
    
`;