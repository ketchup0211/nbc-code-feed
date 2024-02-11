import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "src/components/Button";
import HomeHeader from "src/components/HomeComponents/HomeHeader";
import { auth, storage } from "src/firebase";
import { log } from "src/redux/modules/user";
import styled from "styled-components";

function EditProfile() {
  const { user } = useSelector((state) => state.users);
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const dispatchUser = () => {
    dispatch(log(user));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(log(user));
    });
  }, [dispatch]);
  console.log(user);

  const fileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const imageRef = ref(storage, `${auth.currentUser.uid}/profileImage`);
    await uploadBytes(imageRef, selectedFile);

    const downloadUrl = await getDownloadURL(imageRef);
    await updateProfile(auth.currentUser, {
      photoURL: downloadUrl,
    });
    dispatchUser();
  };

  const proFileChange = async () => {
    await updateProfile(auth.currentUser, {
      displayName: name,
      reloadListener: content,
    });
    dispatchUser();
    setName("");
  };
  if (user === null) return <div>로딩중</div>;
  return (
    <>
      <HomeHeader />
      <Background>
        <div>
          <input type="file" onChange={fileChange} />
          <Button
            content={"사진 변경하기"}
            width={"90"}
            onClick={handleUpload}
          />
          <ImageStyle src={user.photoURL} />
          <p>{user.reloadListener}</p>
        </div>
        <input
          type="text"
          placeholder="변경할 이름을 입력해주세요"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="소개글을 적어주세요"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <Button
          content={"프로필 변경하기"}
          width={"110"}
          onClick={proFileChange}
        />
      </Background>
    </>
  );
}

export default EditProfile;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageStyle = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
