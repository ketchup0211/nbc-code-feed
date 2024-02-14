import DOMPurify from "dompurify";
import HomeHeader from "src/components/HomeComponents/HomeHeader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, getDocs, query } from "firebase/firestore";
//import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "src/firebase";
function Detail() {
  const navigate = useNavigate();
  const [contents, setContents] = useState([]);
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
  //console.log(selectedData.quillValue);
  return (
    <UpperContainer>
      <HomeHeader />
      <Container key={selectedData.id}>
        <TitleHeader>
          <Title>{selectedData.title}</Title>
          <Editor>{selectedData.nickname}</Editor>
          <EditTime>{selectedData.dateNTime} 작성</EditTime>
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
