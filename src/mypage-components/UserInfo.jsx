import { useEffect } from "react";
import styled from "styled-components";
import EditButton from "./common/EditButton";
import { auth } from '../firebase';
import { onAuthStateChanged  } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { log } from 'src/redux/modules/user';

export default function UserInfo () {

    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user);
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          dispatch(log(user));
        });
      }, [dispatch]);
    
    if(!user) {
        return <div>Loading ...</div>
    }

    return (
        <UserInfoContainer>
            <NameItem>{user.displayName}</NameItem>
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