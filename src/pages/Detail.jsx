import DOMPurify from "dompurify";
import HomeHeader from "src/components/HomeComponents/HomeHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
//import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db } from "src/firebase";
import Loading from "src/components/Loading";
import { onAuthStateChanged } from "@firebase/auth";

function Detail() {
  const navigate = useNavigate();
  const [contents, setContents] = useState([]);
  const { id } = useParams();
  const [checkUid, setCheckUid] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "posts"));
      const querySnapshot = await getDocs(q);

      const initialTodos = [];
      querySnapshot.forEach((doc) => {
        initialTodos.push({ postId: doc.id, ...doc.data() });
      });

      setContents(initialTodos);
    };
    fetchData();
    const authStateChangedCallback = (user) => {
      if (user) {
        setCheckUid(user.uid);
      }
    };
    const unsubscribe = onAuthStateChanged(auth, authStateChangedCallback);
    return () => unsubscribe();
  }, []);
  const selectedData = contents.find((item) => item.id === id);
  // 'file' comes from the Blob or File API
  const sanitizer = DOMPurify.sanitize;

  const deleteBtn = async () => {
    let result = confirm("정말 삭제하시겠습니까?");

    if (result) {
      await deleteDoc(doc(db, "posts", selectedData.postId));
      navigate("/mypage");
    }
    return;
  };

  if (!selectedData) {
    return <Loading />;
  }
  //console.log(selectedData.quillValue);
  return (
    <UpperContainer>
      <HomeHeader />
      <Container key={selectedData.id}>
        <TitleHeader>
          <Title>{selectedData.title}</Title>
          <div>
            <Editor>{selectedData.nickname}</Editor>
            <EditTime>{selectedData.dateNTime} 작성</EditTime>
            {checkUid === selectedData.userUid ? (
              <DeleteButton onClick={deleteBtn}>삭제하기</DeleteButton>
            ) : (
              false
            )}
          </div>
          <HrDivider />
        </TitleHeader>
        <WriteContainer
          dangerouslySetInnerHTML={{
            __html: sanitizer(selectedData.quillValue),
          }}
        ></WriteContainer>
      </Container>
    </UpperContainer>
  );
}

export default Detail;

const UpperContainer = styled.div`
  overflow-x: hidden;
  background-color: #101820;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 900px;
  min-width: 600px;
  margin: 0px auto;
  margin-top: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1.5px solid white;
  border-bottom: 0px;
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
  overflow-x: hidden;
  color: white;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 36px;
  padding: 10px 0px;
  width: 100%;
`;

const WriteContainer = styled.div`
  width: 82%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  //align-items: center;
  .ql-align-center {
    text-align: center;
  }
  &img {
    max-width: 400px;
  }
`;

const TitleHeader = styled.div`
  width: 100%;
  text-align: left;

  justify-content: center;
  padding: 10px 100px;
  margin-top: 10px;
`;

const HrDivider = styled.hr`
  margin: 10px 0px;
  width: 100%;
  max-width: 900px;
`;

const EditTime = styled.p`
  color: grey;
  font-size: 12px;
  margin-top: 10px;
`;
const Editor = styled.p`
  margin-top: 25px;
  font-size: 15px;
`;

const DeleteButton = styled.button`
  background-color: white;
  float: right;
  position: relative;
  top: -27px;
  color: black;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
`;
