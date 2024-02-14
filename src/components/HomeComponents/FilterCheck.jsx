import styled from "styled-components";
import { language } from "src/util/language";
import { Link, useParams } from "react-router-dom";

function FilterCheck() {
  const { id } = useParams();
  return (
    <FilterCheckMain>
      {language.map((e) => {
        return (
          <FilterLinkStyle
            to={`/${e.language}`}
            key={e.id}
            $backgroundColor={id === e.language ? "#F2AA4C" : "white"}
          >
            <label>{e.language}</label>
          </FilterLinkStyle>
        );
      })}
    </FilterCheckMain>
  );
}

export default FilterCheck;

const FilterCheckMain = styled.section`
  margin-top: 20px;
  padding: 16px 30px 0px;
  height: 50px;
  display: flex;
  gap: 30px;
  justify-content: space-around;
  align-items: center;
`;

const FilterLinkStyle = styled(Link)`
  text-decoration: none;
  text-align: center;
  line-height: 25px;
  width: 110px;
  height: 45px;
  color: #101820;
  background-color: ${(props) => props.$backgroundColor};
  padding: 10px;
  border-radius: 25px;
  &:hover {
    background-color: #f2aa4c;
  }
  & label {
    cursor: pointer;
    font-weight: 600;
  }
`;
