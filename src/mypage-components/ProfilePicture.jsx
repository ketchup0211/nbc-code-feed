import { useState, useRef } from 'react';
import styled from 'styled-components';

export default function ProfilePicture() {
  const [image, setImage] = useState('https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMyAg/MDAxNjA0MjI5NDA4NDMy.5zGHwAo_UtaQFX8Hd7zrDi1WiV5KrDsPHcRzu3e6b8Eg.IlkR3QN__c3o7Qe9z5_xYyCyr2vcx7L_W1arNFgwAJwg.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%8C%8C%EC%8A%A4%ED%85%94.jpg?type=w800');
  const fileInput = useRef();

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    event.target.value = null;
  };

  return (
    <ProfileContainer>
      <ProfileImage src={image} alt="Profile" />
      <HiddenInput type="file" onChange={handleImageChange} ref={fileInput} />
      <FileButton onClick={handleButtonClick}>프로필 이미지 선택</FileButton>
    </ProfileContainer>
  )
}
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
const HiddenInput = styled.input`
  display: none;
`;
const FileButton = styled.button`
  border-radius: 5px;
  cursor: pointer;
`;