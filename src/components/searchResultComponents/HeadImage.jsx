import styled from "styled-components";
import serchImage from "src/assets/img/searchImage.jpg";

function HeadImage() {
  return (
    <header>
      <ImageStyle src={serchImage} />
    </header>
  );
}

export default HeadImage;

const ImageStyle = styled.img`
  width: 100%;
  opacity: 0.5;
`;
