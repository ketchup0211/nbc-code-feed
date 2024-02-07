import styled from "styled-components";

export default function UserInfo ({ name, email, link, phoneNumber }) {

    return (
        <UserInfoContainer>
            <UserInfoItem>이름 : {name}</UserInfoItem>
            <UserInfoItem>E-mail : {email}</UserInfoItem>
            <UserInfoItem>Link : <a href={link}/>{link}</UserInfoItem>
            <UserInfoItem>전화번호 : {phoneNumber}</UserInfoItem>
        </UserInfoContainer>
    )
}

const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f9f1d9;
`;
const UserInfoItem = styled.p`
    font-size: 1rem;
    margin: 10px;
`;