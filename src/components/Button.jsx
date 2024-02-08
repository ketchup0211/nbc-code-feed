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
  width: ${(props) => (props.$width ? `${props.$width}px` : "30px")};
`;
