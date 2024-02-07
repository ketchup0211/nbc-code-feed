import React from "react";
import styled from "styled-components";

function WriteDetail() {
  return (
    <div>
      <nav>
        <h2>CodeFeed</h2>
      </nav>
      <div>
        <span>이미지를 첨부하시겠어요?</span>
        <input type="file" accept="image/jpg, image/jpeg, image/png"></input>
      </div>
      <div>
        <span></span>
        <input
          type="text"
          name="title"
          placeholder="프로젝트의 제목을 입력해주세요."
        />
      </div>

      <div>
        <span>내용</span>
        <textarea
          name="contents"
          cols="100"
          rows="50"
          placeholder="내용을 입력해주세요."
        ></textarea>
      </div>

      <div>
        <button>작성완료</button>
      </div>
    </div>
  );
}

export default WriteDetail;
