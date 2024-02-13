import { useEffect, useState } from "react";
import styled from 'styled-components';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';

export default function ProfilePicture() {

  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const defaultImage = 'https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMyAg/MDAxNjA0MjI5NDA4NDMy.5zGHwAo_UtaQFX8Hd7zrDi1WiV5KrDsPHcRzu3e6b8Eg.IlkR3QN__c3o7Qe9z5_xYyCyr2vcx7L_W1arNFgwAJwg.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%8C%8C%EC%8A%A4%ED%85%94.jpg?type=w800';

  useEffect(() => {
    signInWithEmailAndPassword(auth, 'newtest@example.com', 'newpassword123')
      .then(async (userCredential) => {
        // 로그인 성공
        const user = userCredential.user;
        setUser(user);

        // Firestore에서 사용자 정보 가져오기
        const docRef = doc(db, 'users', user.uid);  //'users' 컬렉션에서 사용자 ID가 user.uid인 문서를 참조
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserInfo(docSnap.data());  // 문서의 데이터를 상태에 저장
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        // 로그인 실패
        console.error('임시 로그인 실패:', error);
      })
  }, []);

  return (
    <ProfileContainer>
      <ProfileImage src={userInfo?.profileImageUrl || defaultImage} alt="Profile" />
    </ProfileContainer>
  )
}
const ProfileContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;
const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;

`;
