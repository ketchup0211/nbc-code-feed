import DOMPurify from "dompurify";
import HomeHeader from "src/components/HomeComponents/HomeHeader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, getDocs, query } from "firebase/firestore";
//import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "src/firebase";
function Detail() {
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
        {/* <Fixed>
          <AvatarImg src={wendy} />
          <Fixedleft>{selectedData.name}</Fixedleft>
        </Fixed> */}
        <Title>{selectedData.title}</Title>
        <WriteContainer
          dangerouslySetInnerHTML={{
            __html: sanitizer(selectedData.quillValue),
          }}
        ></WriteContainer>
      </Container>
      {/* <button onClick={() => navigate("/WriteDetail")}>수정 페이지로</button> */}
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
  .ql-align-center {
    text-align: center;
  }
`;
