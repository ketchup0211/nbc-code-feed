import styled from "styled-components";
import { useState } from "react";

export default function PostTab() {

    const [selectedTab, setSelectedTab] = useState('latest');

    const handleClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <TabWrapper>
            <TabContainer>
                <TabButton selected={selectedTab === 'latest'} onClick={() => handleClick('latest')}>Work</TabButton>
            </TabContainer>
        </TabWrapper>
    )
}

const TabContainer = styled.div`
    display: flex;
    height: 50px;
    list-style: none;
    padding-left: 0;
    height: 50px;
    margin: 10px;
`;
const TabButton = styled.button`
    background-color: ${props => props.selected ? '#000000' : '#ffffff'};
    color: ${props => props.selected ? '#ffffff' : '#000000'};
    border: none;
    border-radius: 30px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    height: 20px;
    margin: 25px;
    font-size: 15px;
`;
const TabWrapper = styled.div`
    border-bottom: 1px solid #e0e0e0;
    margin: 20px;
`;