import "bootstrap/dist/css/bootstrap.min.css";
import wendy from "../assets/img/wendy.png";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, getDocs, query, doc, updateDoc } from "firebase/firestore";

import { db } from "src/firebase";

function Detail() {
  const navigate = useNavigate();

  const [heart, setHeart] = useState(false);
  const [contents, setContents] = useState([]);
  const [explanation, setExplanation] = useState("");
  const [edit, setEdit] = useState(true);
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

  const handleEdit = async () => {
    const updateContents = doc(db, "posts", `${id}`);

    await updateDoc(updateContents, {
      content: explanation,
    });
  };

  if (!selectedData) {
    return;
  }

  return (
    <>
      <Container key={selectedData.userId}>
        <Title>{selectedData.title}</Title>
        <Fixed>
          <AvatarImg src={wendy} />
          <Fixedleft>{selectedData.name}</Fixedleft>
          {heart ? (
            <Fixedright onClick={() => setHeart(false)}>
              <i className="bi bi-heart-fill" />
            </Fixedright>
          ) : (
            <Fixedright onClick={() => setHeart(true)}>
              <i className="bi bi-heart" />
            </Fixedright>
          )}
        </Fixed>
        {edit ? (
          <>
            <img src={`${selectedData.image}`} />
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
            <img src={`${selectedData.image}`} />
            <EditDescription
              value={explanation === "" ? selectedData.content : explanation}
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

      <button onClick={() => navigate("/")}>홈으로</button>
      <button onClick={() => navigate("/write-detail")}>작성 디테일로</button>
    </>
  );
}
{
  /*
function DetailImg({ imgName }) {
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    const storage = getStorage();

    const func = async () => {
      if (imgName !== undefined) {
        const reference = ref(storage, `file/imgName`);
        console.log(reference);
        await getDownloadURL(reference).then((x) => {
          setImgUrl(x);
        });
      }
    };
    func();
  }, []);

  return <img src={imgUrl} />;
}
 */
}
export default Detail;

const Container = styled.div`
  display: flex;
  width: 1100px;
  margin: 0px auto;
  flex-direction: column;

  padding: 20px;
`;
const Title = styled.div``;
const AvatarImg = styled.img`
  float: left;
  border-radius: 50%;
  margin-right: 10px;
  max-width: 100px;
  max-height: 30px;
`;
const Fixed = styled.div`
  margin-top: 20px;
  width: 1100px;
  position: fixed;
`;

const Fixedleft = styled.div`
  float: left;
`;

const Fixedright = styled.div`
  margin-right: 50px;
  float: right;
`;

const Description = styled.p`
  font-size: 18px;
  margin: 20px auto 0px auto;
  width: 600px;
  line-height: 1.5;
`;
const EditDescription = styled.textarea`
  font-size: 18px;
  margin: 20px auto 0px auto;
  width: 600px;
  line-height: 1.5;
`;
const EditBtn = styled.button`
  float: right;
  width: 80px;
  height: 30px;
`;
