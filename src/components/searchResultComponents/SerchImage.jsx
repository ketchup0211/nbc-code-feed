import styled from "styled-components";
import serchImage from "src/assets/img/searchImage.jpg";
function SerchImage() {
  return (
    <header>
      <HeadPosition>
        <TitleStyle>Search CodeFeed</TitleStyle>
        <ImageStyle src={serchImage} />
      </HeadPosition>
    </header>
  );
}

export default SerchImage;

const HeadPosition = styled.div`
  position: relative;
`;

const TitleStyle = styled.h1`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
`;

const ImageStyle = styled.img`
  width: 100%;
  opacity: 0.2;
`;
