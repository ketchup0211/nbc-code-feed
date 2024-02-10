import styled from "styled-components";
import serchImage from "src/assets/img/searchImage.jpg";
import { LinkStyle } from "src/util/LinkStyle";
function SerchImage() {
  return (
    <header>
      <HeadPosition>
        <LinkStyle to={"/"}>
          <TitleStyle>Search CodeFeed</TitleStyle>
          <ImageStyle src={serchImage} />
        </LinkStyle>
      </HeadPosition>
    </header>
  );
}

export default SerchImage;

const HeadPosition = styled.div`
  position: relative;
  bottom: 1vh;
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
  opacity: 0.3;
`;
