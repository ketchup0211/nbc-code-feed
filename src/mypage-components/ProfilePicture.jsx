import styled from 'styled-components';

export default function ProfilePicture() {
  const image = 'https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMyAg/MDAxNjA0MjI5NDA4NDMy.5zGHwAo_UtaQFX8Hd7zrDi1WiV5KrDsPHcRzu3e6b8Eg.IlkR3QN__c3o7Qe9z5_xYyCyr2vcx7L_W1arNFgwAJwg.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%8C%8C%EC%8A%A4%ED%85%94.jpg?type=w800';

  return (
    <ProfileContainer>
      <ProfileImage src={image} alt="Profile" />
    </ProfileContainer>
  )
}
const ProfileContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffd4d4;
`;
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;

`;