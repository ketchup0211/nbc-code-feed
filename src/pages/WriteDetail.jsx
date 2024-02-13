import { useState } from "react";
import styled from "styled-components";
import FilterCheck from "src/components/HomeComponents/FilterCheck";
import QuillComponent from "src/components/WriteDetailComponents/ReactQuill";
import DOMPurify from "dompurify";
import { collection, addDoc } from "firebase/firestore";
import { db } from "src/firebase";

function WriteDetail() {
  const [quillValue, setQuillValue] = useState("");
  const [title, setTitle] = useState("");
  const [userContents, setUserContents] = useState([]);
  //const [filteredId, setFilteredId] = useState("");

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleQuillChange = (value) => {
    // value가 Quill 에디터의 내부 표현일 경우에만 getContents를 사용
    if (typeof value === "object" && value?.constructor?.name === "Delta") {
      setQuillValue(value.getContents());
    } else {
      // 그 외에는 value 그대로 사용
      setQuillValue(value);
    }
  };

  const handleUpload = async () => {
    const newTodo = { title, quillValue };
    setUserContents((prevlist) => {
      return [...prevlist, newTodo];
    });
    setTitle("");

    // Firestore에서 'todos' 컬렉션에 대한 참조 생성하기
    const collectionRef = collection(db, "user"); // 추후에 {auth.id} 로 변경하면 될 듯?

    await addDoc(collectionRef, newTodo);
  };

  // const handleUpload = async (event) => {
  //   // 데이터를 파이어베이스에 업로드하는 부분
  //   event.preventDefault();
  //   const newContent = {
  //     quillValue,
  //     title,
  //   };
  //   console.log(newContent);

  //   const collectionRef = collection(db, "userContent");
  //   await addDoc(collectionRef, newContent);
  // };

  const sanitizer = DOMPurify.sanitize;

  console.log("Uploaded quillValue:", quillValue);

  return (
    <div>
      <Nav>
        <GoHome>CodeFeed</GoHome>
      </Nav>
      <FilterCheck />
      <div>
        <div>
          <InputTitle
            type="text"
            name="title"
            placeholder="프로젝트의 제목을 입력해주세요."
            onChange={inputTitle}
          />
        </div>
        <QuillDiv>
          <QuillComponent
            value={quillValue || ""}
            onChange={handleQuillChange}
          />
        </QuillDiv>
        <div dangerouslySetInnerHTML={{ __html: sanitizer(quillValue) }}></div>
        <DoneButtonDiv>
          <DoneButton onClick={handleUpload}>작성완료</DoneButton>
        </DoneButtonDiv>
      </div>
    </div>
  );
}

export default WriteDetail;

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
  display: none;
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

export const PriviewImgBox = styled.img`
  width: 180px;
  display: flex;
  margin: auto;
`;

export const InputTitle = styled.input`
  width: 60%;
  height: 50px;
  margin: 10px auto;
  background-color: #fff;
  border: none;
  border-bottom: 2px dashed #797979;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  margin-top: 30px;
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
export const QuillDiv = styled.div`
  display: flex;
  width: 100%;
  height: 75vh;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  .ql-editor strong {
    font-weight: bold;
  }
  .ql-editor em {
    font-style: italic;
  }
`;
