import styled from "styled-components";
import TodTob from "../mypage-components/TobTab";
import ProfilePicture from "../mypage-components/ProfilePicture";
import UserInfo from "../mypage-components/UserInfo";
import Post from "../mypage-components/Post";
import PostTab from "../mypage-components/PostTab";

export default function MyPages() {
  return (
    <>
      <MyPageContainer>
        <TodTob />
        <SubContainer>
          <ProfilePicture />
          <UserInfo />
        </SubContainer>
        <PostTab />
        <Post />
      </MyPageContainer>
    </>
  );
}

const MyPageContainer = styled.div``;
const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
