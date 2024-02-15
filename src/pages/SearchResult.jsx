import CheckPost from "src/components/searchResultComponents/CheckPost";
import Input from "src/components/searchResultComponents/Input";
import styled from "styled-components";
import SerchImage from "src/components/searchResultComponents/SerchImage";
import SerchHead from "src/components/searchResultComponents/SerchHead";

function SearchResult() {
  return (
    <Background>
      <SerchHead />
      <SerchImage />
      <Input />
      <CheckPost />
    </Background>
  );
}

export default SearchResult;

const Background = styled.div`
  background-color: #101820;
  min-height: 100vh;
  height: auto;
`;
