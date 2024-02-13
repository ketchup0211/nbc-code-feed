import styled from "styled-components";
function Loading() {
  return (
    <Main>
      <p>데이터를 불러오는 중</p>
      <LoadingCircle></LoadingCircle>
    </Main>
  );
}

export default Loading;

const Main = styled.div`
  width: 90vw;
  margin: 0 auto;
  text-align: center;
`;

const LoadingCircle = styled.div`
  width: 50px;
  height: 50px;
  margin: 10px auto;

  border: 10px solid #e3e3e3;
  border-bottom: 10px solid #000000;
  border-radius: 50%;

  animation: load 1.5s linear infinite;

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
