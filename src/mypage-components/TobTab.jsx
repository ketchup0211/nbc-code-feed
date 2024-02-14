import styled from 'styled-components';
import SearchInput from './common/SearchInput';
import { useNavigate } from 'react-router-dom';


export default function TodTob() {

    const navigate = useNavigate();

    return (
        <nav>
            <TobTabContainer>
                <LiContainer>
                    <TobTabLi onClick={() => navigate('WriteDetail')}>Posting</TobTabLi>
                    <TobTabLi onClick={() => navigate('/')} >Home</TobTabLi>
                </LiContainer>
                <SearchInputContainer>
                    <SearchInput></SearchInput>
                </SearchInputContainer>
            </TobTabContainer>
        </nav>
    )
}
const TobTabContainer = styled.ul`
    position: relative;
    display: flex;
    height: 50px;
    list-style: none;
    padding-left: 0;
    height: 100px;
    margin: 10px;
`;
const LiContainer = styled.ol`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const TobTabLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 14px;
    margin: 25px;
    font-size: 14px;
    cursor: pointer;
`;
const SearchInputContainer = styled.div`
    position: absolute;
    right: 0;
    margin-top: 30px;
`;