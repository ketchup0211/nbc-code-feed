import styled from "styled-components";

function FilterCheck() {
  return (
    <FilterCheckMain>
      <label>
        <input type="checkbox" name="filter" value="Javascript" />
        Javascript
      </label>
      <label>
        <input type="checkbox" name="filter" value="C" />C
      </label>
      <label>
        <input type="checkbox" name="filter" value="Python" />
        Python
      </label>
      <label>
        <input type="checkbox" name="filter" value="React" />
        React
      </label>
      <label>
        <input type="checkbox" name="filter" value="Vue" />
        Vue
      </label>
      <label>
        <input type="checkbox" name="filter" value="Angular" />
        Angular
      </label>
    </FilterCheckMain>
  );
}

export default FilterCheck;

const FilterCheckMain = styled.section`
  border: 1px solid black;
  margin: 5px;
  height: 100px;
`;
