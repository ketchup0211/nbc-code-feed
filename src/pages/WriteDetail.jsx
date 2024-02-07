import React from "react";
import styled from "styled-components";

const [isMoved, setMoved] = useState(false);

function WriteDetail() {
  return (
    <div>
      <Nav>
        <GoHome>CodeFeed</GoHome>
      </Nav>
      <UploadImageContainer>
        <UploadBox htmlFor="">
          <InputImage type="file" accept="image/jpg, image/jpeg, image/png" />
          <p>클릭 혹은 이미지를 이곳에 드래그하세요.</p>
        </UploadBox>
      </UploadImageContainer>
      <div>
        <InputTitle
          type="text"
          name="title"
          placeholder="프로젝트의 제목을 입력해주세요."
        />
      </div>

      <div>
        <InputContent
          name="contents"
          cols="100"
          rows="50"
          placeholder="내용을 입력해주세요."
        ></InputContent>
      </div>

      <DoneButtonDiv>
        <DoneButton>작성완료</DoneButton>
      </DoneButtonDiv>
    </div>
  );
}

export default WriteDetail;

// export const

export const Nav = styled.nav`
  height: 100px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;
export const GoHome = styled.h2`
  cursor: pointer;
  display: flex;
  font-size: 28px;
  font-weight: bold;
`;

export const UploadImageContainer = styled.div`
  display: flex;
  margin: auto;

  align-content: center;
  flex-wrap: wrap;
`;

export const InputImage = styled.input`
  display: flex;
  margin: auto;
  padding: 138px 58px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  color: transparent;
  top: 125px;
`;

export const UploadBox = styled.label`
  width: 750px;
  height: 100px;
  margin: auto;
  background-color: #fff;
  border-radius: 15px;
  border: 3px dashed #eee;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const InputTitle = styled.input`
  width: 50%;
  height: 50px;
  margin: 20px auto;
  background-color: #fff;
  border: none;
  border-bottom: 2px dashed #797979;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const InputContent = styled.textarea`
  width: 50%;
  height: 500px;
  border: 2px solid #d8d7d7;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export const DoneButtonDiv = styled.div`
  width: 50%;
  display: flex;
  margin: auto;
`;

export const DoneButton = styled.button`
  cursor: pointer;
  display: flex;
  border-radius: 15px;
  background-color: black;
  color: white;
  margin: 20px auto;
  float: left;
`;
