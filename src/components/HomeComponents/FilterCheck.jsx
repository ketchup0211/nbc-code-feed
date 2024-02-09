import styled from "styled-components";
import { language } from "src/util/language";
import { Link, useParams } from "react-router-dom";

function FilterCheck() {
  const { id } = useParams();
  return (
    <FilterCheckMain>
      {language.map((e) => {
        return (
          <LinkStyle
            to={`/${e.language}`}
            key={e.id}
            $backgroundColor={id === e.language ? "whitesmoke" : "white"}
          >
            <label>{e.language}</label>
          </LinkStyle>
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

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  background-color: ${(props) => props.$backgroundColor};
  padding: 10px;
  border-radius: 25px;
  & label {
    cursor: pointer;
  }
`;
