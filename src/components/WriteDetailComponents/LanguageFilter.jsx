import styled from "styled-components";
import { language } from "src/util/language";
import { useState } from "react";

function LanguageFilter({ onClickedLanguage }) {
  const [filteredLanguage, setFilteredLanguage] = useState([]);

  const handleClickLanguage = (language) => {
    setFilteredLanguage(language);
    onClickedLanguage(language);
  };

  return (
    <FilterCheckMain>
      {language.map((e) => {
        return (
          <FilterButton
            key={e.id}
            onClick={() => handleClickLanguage(e.language)}
            style={{
              backgroundColor:
                filteredLanguage === e.language ? "#ffcd8b" : "transparent",
            }}
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
  border: 1px solid dimgrey;
`;
