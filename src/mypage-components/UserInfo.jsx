import { useEffect, useState } from "react";
import styled from "styled-components";
import EditButton from "./common/EditButton";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';


export default function UserInfo () {

    const [user, setUser] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        signInWithEmailAndPassword(auth, 'newtest@example.com', 'newpassword123')
        .then(async(userCredential) => {
            //로그인 성공
            const user = userCredential.user;
            setUser(user);

            //사용자 정보 가져오기
            const docRef = doc(db, 'users', 'uid'); //사용자의 uid를 가져옴
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setUserInfo(docSnap.data());
            } else {
                console.log("No such document!");
            }
        })
        .catch((error) => {
            //로그인 실패
            console.log('임시 로그인 실패:', error);
        })

        //로그인 상태 감지
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        })

        return () => unsubscribe();
    }, []);

    if(!user) {
        return <div>Loading ...</div>
    }

    return (
        <UserInfoContainer>
            <NameItem>{userInfo?.name}</NameItem>
            <EmailItem>{user.email}</EmailItem>
            <EditButton></EditButton>
        </UserInfoContainer>
    )
}

const UserInfoContainer = styled.div`
    display: inline-flex;
    align-items: start;
    flex-direction: column;
`;
const NameItem = styled.p`
    font-size: 2rem;
    margin-bottom: 15px;
`;
const EmailItem = styled.p`
    font-size: 1rem;
    margin-bottom: 15px;
    margin-left: 5px;
`;