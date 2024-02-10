import styled from "styled-components";

function Button({ content, width, onClick }) {
  return (
    <Btn onClick={onClick} $width={width}>
      {content}
    </Btn>
  );
}

export default Button;

const Btn = styled.button`
  border: none;
  background-color: white;
  font-size: 12px;
  width: ${(props) => (props.$width ? `${props.$width}px` : "30px")};
  cursor: pointer;
`;
