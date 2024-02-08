import styled from "styled-components";
import EditButton from "./common/EditButton";

export default function UserInfo ({ name, email, phoneNumber }) {

    return (
        <UserInfoContainer>
            <UserInfoItem>{name}</UserInfoItem>
            <UserInfoItem>{email}</UserInfoItem>
            <UserInfoItem>{phoneNumber}</UserInfoItem>
            <EditButton></EditButton>
        </UserInfoContainer>
    )
}

const UserInfoContainer = styled.div`
    display: inline-flex;
    align-items: start;
    flex-direction: column;
    background-color: #f9f1d9;
`;
const UserInfoItem = styled.p`
    font-size: 1rem;
    margin: 10px;
`;