import styled from "styled-components";
import { language } from "src/util/language";

function FilterCheck() {
  return (
    <FilterCheckMain>
      {language.map((e) => {
        return <label key={e.id}>{e.language}</label>;
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
