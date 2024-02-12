import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRef, useState } from "react";
import { auth, storage } from "src/firebase";
import styled from "styled-components";
import Button from "../Button";

function ImageChange({ user, dispatchUser }) {
  const [previewImg, setPreviewImg] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const hiddenFileInput = useRef(null);

  const fileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    let fileRead = new FileReader();
    fileRead.onload = function () {
      setPreviewImg(fileRead.result);
    };
    fileRead.readAsDataURL(event.target.files[0]);
  };

  const handClick = () => {
    hiddenFileInput.current.click();
  };

  const handleUpload = async () => {
    const imageRef = ref(storage, `${auth.currentUser.uid}/profileImage`);
    await uploadBytes(imageRef, selectedFile);

    const downloadUrl = await getDownloadURL(imageRef);
    await updateProfile(auth.currentUser, {
      photoURL: downloadUrl,
    });
    dispatchUser();
    setSelectedFile([]);
    setPreviewImg([]);
  };

  return (
    <>
      <p>Image Change</p>
      <ImageChangeSection>
        <ImageStyle src={user.photoURL} />
        <Button content={"Image Upload"} onClick={handClick} width={"100"} />
        {previewImg.length === 0 ? false : <ImageStyle src={previewImg} />}
        <InputStyle type="file" ref={hiddenFileInput} onChange={fileChange} />
        <Button content={"Image Change"} width={"150"} onClick={handleUpload} />
        <p>{user.reloadListener}</p>
      </ImageChangeSection>
    </>
  );
}

export default ImageChange;

const ImageChangeSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 20vh;
  margin: 5%;
`;

const ImageStyle = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const InputStyle = styled.input`
  display: none;
`;
