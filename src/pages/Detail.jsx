import wendy from "../assets/img/wendy.png";
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
  //직접 바꾸는 부분
  {
    /*
  const handleEdit = async () => {
    const updateContents = doc(db, "posts", `${id}`);

    await updateDoc(updateContents, {
      content: explanation,
    });
  };

  const inputRef = useRef(null);

  const storage = getStorage();

  const handleFileChange = async (event) => {
    event.stopPropagation();
    const file = event.target.files[0];

    console.log(file);
    console.log(file.name);

    setSelectedFile(file);
    console.log(selectedFile);
    const reader = new FileReader();

    // reader.onload = (e) => {
    //   // 읽어들인 이미지 URL을 출력하거나 다른 작업을 수행할 수 있습니다.
    //   console.log("이미지 URL:", e.target.result);
    // };
    const imageRef = ref(storage, `file/${selectedFile.name}`);

    await uploadBytes(imageRef, selectedFile).then((snapshot) => {
      console.log(imageRef);
      console.log(snapshot);
      console.log("Uploaded a blob or file!");
    });

    getDownloadURL(ref(storage, `file/${selectedFile}`))
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        // xhr.onload = (event) => {
        //   const blob = xhr.response;
        // };
        xhr.open("GET", url);
        xhr.send();

        // Or inserted into an <img> element
        const img = document.getElementById("myimg");
        img.setAttribute("src", url);
      })
      .catch((error) => {
        console.log(error);
      });

    if (file) {
      reader.readAsDataURL(file); // 파일을 읽어들이고 onload 이벤트를 트리거합니다.
    }
  };
 */
  }
  // 'file' comes from the Blob or File API
  const sanitizer = DOMPurify.sanitize;

  if (!selectedData) {
    return;
  }
  console.log(selectedData.image);
  return (
    <>
      <HomeHeader />
      <Container key={selectedData.id}>
        <Fixed>
          <AvatarImg src={wendy} />
          <Fixedleft>{selectedData.name}</Fixedleft>
        </Fixed>
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
    </>
  );
}

export default Detail;

const Container = styled.div`
  display: flex;
  width: 1200px;
  margin: 0px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const WriteContainer = styled.div`
  margin-top: 40px;
  width: 82%;
  padding: 30px;
  border: 2px solid dimgray;
  border-radius: 15px;
  display: flex;

  flex-direction: column;
`;
// const ImageDiv = styled.div`
//   margin-top: 40px;
//   background-size: cover;
//   height: 500px;
//   border-radius: 8px;
// `;

// const ImageEditBtn = styled.button`
//   margin-top: 5px;
//   margin-right: 5px;
//   float: right;
// `;

// const Description = styled.p`
//   font-size: 18px;
//   margin: 20px auto 0px auto;
//   width: 600px;
//   line-height: 1.5;
// `;
// const EditDescription = styled.textarea`
//   font-size: 18px;
//   margin: 20px auto 0px auto;
//   width: 600px;
//   line-height: 1.5;
// `;
// const EditBtn = styled.button`
//   float: right;
//   width: 80px;
//   height: 30px;
// `;
