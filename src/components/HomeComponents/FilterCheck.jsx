import styled from "styled-components";
import { language } from "src/util/language";
import { useState } from "react";

function FilterCheck() {
  const [clickedLanguage, setClickedLanguage] = useState("");

  const onHandleClickedLanguage = (language) => {
    setClickedLanguage(language.id);
  };
  return (
    <FilterCheckMain>
      {language.map((e) => {
        return (
          <FilterButton
            key={e.id}
            onClick={() => onHandleClickedLanguage(e)}
            style={{
              backgroundColor:
                clickedLanguage === e.id ? "#f2d184" : "transparent",
            }}
          >
            {e.language}
          </FilterButton>
        );
      })}
    </FilterCheckMain>
  );
}

export default FilterCheck;

const FilterCheckMain = styled.section`
  margin: 5px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const FilterButton = styled.button`
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 10px 20px;
`;
