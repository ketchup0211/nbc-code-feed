import styled from "styled-components"
import { useState } from "react"
import { CiSearch } from "react-icons/ci"

export default function SearchInput() {
    const [search, setSearch] = useState('');
    const [submit, setSubmit] = useState('');

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmit(search);
    };

  return (
    <div>
        <SearchContainer onSubmit={handleSubmit} >
        <SearchBar type='text' value={search} onChange={handleSearchChange} placeholder='Search ...'></SearchBar>
        <SearchIcon/>
        </SearchContainer>
        {submit && <p>Search ... {submit}</p>}
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