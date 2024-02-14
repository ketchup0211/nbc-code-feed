import DOMPurify from "dompurify";
import HomeHeader from "src/components/HomeComponents/HomeHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, getDocs, query } from "firebase/firestore";
//import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "src/firebase";

function Detail() {
  const navigate = useNavigate();

  const [contents, setContents] = useState([]);
  //const [explanation, setExplanation] = useState("");
  //const [selectedFile, setSelectedFile] = useState(null);
  //  const [edit, setEdit] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "posts"));
      const querySnapshot = await getDocs(q);

      const initialTodos = [];
      querySnapshot.forEach((doc) => {
        initialTodos.push({ id: doc.id, ...doc.data() });
      });

      setContents(initialTodos);
    };

    fetchData();
  }, []);
  const selectedData = contents.find((item) => item.id === id);

  // 'file' comes from the Blob or File API
  const sanitizer = DOMPurify.sanitize;

  if (!selectedData) {
    return;
  }
  console.log(selectedData.image);
  return (
    <UpperContainer>
      <HomeHeader />

      <Container key={selectedData.id}>
        <Title>{selectedData.title}</Title>

        <WriteContainer
          dangerouslySetInnerHTML={{
            __html: sanitizer(selectedData.quillValue),
          }}
        ></WriteContainer>
      </Container>
      {/*
      <Container key={selectedData.id}>
        <Title>{selectedData.title}</Title>
        <Fixed>
          <AvatarImg src={wendy} />
          <Fixedleft>{selectedData.name}</Fixedleft>
        </Fixed>
        {edit ? (
          <>
            <img id="myimg" />
            <ImageDiv
              style={{ backgroundImage: `url(${selectedData.image})` }}
            ></ImageDiv>
            <Description>
              {explanation === "" ? selectedData.content : explanation}
            </Description>
            <EditBtn
              onClick={() => {
                setEdit(false);
              }}
            >
              수정하기
            </EditBtn>
          </>
        ) : (
          <>
            <div>
              <ImageDiv
                style={{ backgroundImage: `url(${selectedData.image})` }}
              >
                <ImageEditBtn onClick={() => inputRef.current.click()}>
                  {"X"}
                </ImageEditBtn>
              </ImageDiv>
              <input
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                ref={inputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
            <EditDescription
              value={explanation == " " ? selectedData.content : explanation}
              onChange={(e) => setExplanation(e.target.value)}
            />
            <EditBtn
              onClick={() => {
                handleEdit();
                setEdit(true);
              }}
            >
              수정완료
            </EditBtn>
          </>
        )}
      </Container>
      */}

      <button onClick={() => navigate("/WriteDetail")}>수정 페이지로</button>
    </UpperContainer>
  );
}

export default Detail;

const UpperContainer = styled.div`
  overflow-x: hidden;
`;

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 30px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid #d1d1d1;
  border-radius: 15px;
  margin-top: 45px;
  overflow-x: hidden;
`;
const Title = styled.div`
  font-weight: 800;
  font-size: 24px;
  padding: 10px 0px;
`;

const WriteContainer = styled.div`
  width: 82%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  ql-align-center {
    justify-content: center;
    align-items: center;
  }
`;
