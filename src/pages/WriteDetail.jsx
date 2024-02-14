import { useEffect, useState } from "react";
import styled from "styled-components";
import LanguageFilter from "src/components/WriteDetailComponents/LanguageFilter";
import QuillComponent from "src/components/WriteDetailComponents/ReactQuill";
import { collection, addDoc, query, getDocs } from "firebase/firestore";
import { auth, db } from "src/firebase";
import { LinkStyle } from "src/util/Style";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { initialization } from "src/redux/modules/user";
import { urlPatch } from "src/redux/modules/postBasicImage";
import { useNavigate } from "react-router-dom";

function WriteDetail() {
  const user = useSelector((state) => state.users.user);
  const postBasicImage = useSelector((state) => state.postBasicImage);
  const [check, setCheck] = useState(""); // check 상태 추가
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCheck(user.uid); // onAuthStateChanged 내에서 check 값 설정
    });
    return () => unsubscribe(); // cleanup 함수
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);

      const initialTodos = [];

      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data(),
        };
        initialTodos.push(data);
      });
      const checkuser = initialTodos.find((e) => e.id === check);
      dispatch(initialization(checkuser));
    };
    fetchData();
  }, [check, dispatch]); // check를 useEffect의 종속성으로 추가

  const [quillValue, setQuillValue] = useState("");
  const [title, setTitle] = useState("");
  const [userContents, setUserContents] = useState([]);
  const randomId = useSelector((state) => state.postImageid);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  let dateNTime = "";

  const handleSelectedLanguage = (language) => {
    setSelectedLanguage(language);
  };

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

  const dateContainer = async () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    dateNTime = formattedDate;
  };

  const handleUpload = async () => {
    dateContainer();
    const newContent = {
      id: randomId,
      nickname: user.nickname,
      userUid: check,
      title,
      quillValue,

      dateNTime,
      language: selectedLanguage,
      image: postBasicImage,
    };
    setUserContents((prevlist) => {
      return [...prevlist, newContent];
    });
    // setTitle("");
    // Firestore에서 'todos' 컬렉션에 대한 참조 생성하기
    const collectionRef = collection(db, "posts"); // 추후에 {auth.id} 로 변경하면 될 듯?

    await addDoc(collectionRef, newContent);
    dispatch(urlPatch(""));
    navigate(`/detail/${newContent.id}`);
  };

  // const sanitizer = DOMPurify.sanitize;

  return (
    <div>
      <Nav>
        <LinkStyle to={"/"}>
          <GoHome>CodeFeed</GoHome>
        </LinkStyle>
      </Nav>
      {/* <FilterCheck /> */}
      <LanguageFilter onClickedLanguage={handleSelectedLanguage} />
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
            randomId={randomId}
            check={check}
          />
        </QuillDiv>
        {/* <div dangerouslySetInnerHTML={{ __html: sanitizer(quillValue) }}></div> */}
        <DoneButtonDiv>
          <DoneButton
            onClick={() => {
              // dateContainer();
              handleUpload();
            }}
          >
            작성완료
          </DoneButton>
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
