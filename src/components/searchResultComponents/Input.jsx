import { useDispatch, useSelector } from "react-redux";
import { checkSearch } from "src/redux/modules/search";
import styled from "styled-components";

function Input() {
  const dispatch = useDispatch();

  const inputChange = (e) => {
    dispatch(checkSearch(e.target.value));
  };
  const search = useSelector((state) => state.search);
  return (
    <InputStyle
      type="text"
      placeholder="Search..."
      value={search}
      onChange={inputChange}
    />
  );
}

export default Input;

const InputStyle = styled.input`
  position: relative;
  bottom: 25px;
  margin: 0px 35% 0px 35%;
  width: 30%;
  height: 50px;
  border-radius: 25px;
  border: none;
  padding: 10px;
`;
