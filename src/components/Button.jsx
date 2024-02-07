import styled from "styled-components";

function Button({ content, width }) {
  return <Btn $width={width}>{content}</Btn>;
}

export default Button;

const Btn = styled.button`
  width: ${(props) => (props.$width ? `${props.$width}px` : "30px")};
`;
