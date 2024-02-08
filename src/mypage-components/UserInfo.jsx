import styled from "styled-components";
import EditButton from "./common/EditButton";

export default function UserInfo ({ name, email }) {

    return (
        <UserInfoContainer>
            <NameItem>{name}</NameItem>
            <EmailItem>{email}</EmailItem>
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