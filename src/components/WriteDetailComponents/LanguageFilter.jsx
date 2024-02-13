import styled from "styled-components";
import { language } from "src/util/language";

function LanguageFilter() {
  return (
    <FilterCheckMain>
      {language.map((e) => {
        return (
          <FilterButton
            key={e.id}
            $backgroundColor={id === e.language ? "gray" : "whitesmoke"}
          >
            <label>{e.language}</label>
          </FilterButton>
        );
      })}
    </FilterCheckMain>
  );
}

export default LanguageFilter;

const FilterCheckMain = styled.section`
  margin: 5px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const FilterButton = styled.button`
  text-decoration: none;
  color: black;
  background-color: ${(props) => props.$backgroundColor};
  padding: 10px;
  border-radius: 25px;
`;
