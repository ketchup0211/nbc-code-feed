import CheckPost from "src/components/searchResultComponents/CheckPost";
import HeadImage from "src/components/searchResultComponents/HeadImage";
import Input from "src/components/searchResultComponents/Input";
import styled from "styled-components";

function SearchResult() {
  return (
    <Background>
      <HeadImage />
      <Input />
      <CheckPost />
    </Background>
  );
}

export default SearchResult;

const Background = styled.div`
  background-color: whitesmoke;
`;
