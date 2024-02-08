import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { storage } from "src/firebase";
import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
// import { ImageResize } from "quill-image-resize-module-react";

// Quill.register("modules/imageResize", ImageResize);

function WriteDetail() {
  const [selectedImg, setSelectedImg] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);
  const [quillValue, setQuillValue] = useState("");
  const toolbarOptions = [
    ["link", "image", "video"],
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ];

  // 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "background",
    "color",
    "link",
    "image",
    "video",
    "width",
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions,
    },
    // ImageResize: {
    //   parchment: Quill.import("parchment"),
    //   modules: ["Resize", "DisplaySize", "Toolbar"],
    // },
  };

  const handleQuillChange = (editor) => {
    setQuillValue(editor.getContents());
  };

  const handleImgSelect = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImg(imageFile);

    const fileRead = new FileReader(); //FileRear를 이용해서 이미지 프리뷰 생성
    fileRead.onload = function () {
      setPreviewImg(fileRead.result); // 프리뷰 이미지 설정
    };
    fileRead.readAsDataURL(event.target.files[0]); // 프리뷰 이미지 URL 읽어오기
  };

  const handleUpload = async () => {
    const imageRef = ref(storage, "folder/file");
    await uploadBytes(imageRef, selectedImg);
  };

  return (
    <div>
      <Nav>
        <GoHome>CodeFeed</GoHome>
      </Nav>
      <UploadImageContainer>
        <UploadBox htmlFor="inputImage">
          <InputImage
            id="inputImage"
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            onChange={handleImgSelect}
            onClick={handleUpload}
          />
          <p>클릭 혹은 이미지를 이곳에 드래그하세요.</p>
        </UploadBox>
      </UploadImageContainer>
      <div>
        <div>
          <PriviewImgBox alt="이미지 미리보기" src={previewImg} />
        </div>
      </div>
      <div>
        <InputTitle
          type="text"
          name="title"
          placeholder="프로젝트의 제목을 입력해주세요."
        />
      </div>

      <QuillDiv>
        {/* <InputContent
          name="contents"
          cols="100"
          rows="50"
          placeholder="내용을 입력해주세요."
        ></InputContent> */}
        <ReactQuill
          style={{ height: "600px" }}
          theme="snow"
          modules={modules}
          value={quillValue || ""}
          onChange={handleQuillChange}
          formats={formats}
          toolbarOptions={toolbarOptions}
        />
      </QuillDiv>

      <DoneButtonDiv>
        <DoneButton>작성완료</DoneButton>
      </DoneButtonDiv>
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
  font-size: 18px;
  font-weight: 600;
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
  width: 70%;
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;
