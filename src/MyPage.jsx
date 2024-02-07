//import styled from "styled-components"
import GlobalStyle from "./GlobalStyle"
import ProfilePicture from "./mypage-components/ProfilePicture"
import TodTob from "./mypage-components/TobTab"
import UserInfo from "./mypage-components/UserInfo"

export default function mypage() {
    const userInfo = {
        name: '이지은',
        email: 'lge9380@naver.com',
        link: 'https://naver.com',
        phoneNumber: '010-1111-1111'
    };

    return (
        <div>
            <GlobalStyle/>
            <TodTob/>
            <ProfilePicture />
            <UserInfo {...userInfo}/>
        </div>
    )
}

