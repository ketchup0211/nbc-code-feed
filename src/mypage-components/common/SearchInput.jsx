import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkSearch } from "src/redux/modules/search";
import { CiSearch } from "react-icons/ci"

export default function SearchInput() {
    const search = useSelector((state) => state.search);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SubmitHandler = (event) => {
        event.preventDefault();
        navigate("/searchResult");
    };

    const inputChcange = (e) => {
        dispatch(checkSearch(e.target.value));
    };

    return (
        <div>
            <SearchContainer onSubmit={SubmitHandler} >
                <SearchBar type='text' value={search} onChange={inputChcange} placeholder='Search ...'></SearchBar>
                <SearchIcon />
            </SearchContainer>
        </div>
    )
}

const SearchContainer = styled.form`
    position: relative;
    background-color: #f4f4f3;
    width: 272px;
    height: 48px;
    border-radius: 30px;
`;
const SearchBar = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    padding: 0 20px;
    border-radius: 30px;
    font-size: 14px;
    &:focus {
        outline: none;
    }
`;
const SearchIcon = styled(CiSearch)`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: gray;
`;