import "bootstrap/dist/css/bootstrap.min.css";
import wendy from "../assets/img/wendy.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { ref, getStorage, getDownloadURL } from "firebase/storage";
import { collection, getDocs, query } from "firebase/firestore";

import { db } from "src/firebase";

function Detail() {
  const navigate = useNavigate();
  const [heart, setHeart] = useState(false);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const storage = getStorage();
    const fetchData = async () => {
      // collection 이름이 todos인 collection의 모든 document를 가져옵니다.
      const q = query(collection(db, "work"));
      const querySnapshot = await getDocs(q);

      const initialTodos = [];

      // document의 id와 데이터를 initialTodos에 저장합니다.
      // doc.id의 경우 따로 지정하지 않는 한 자동으로 생성되는 id입니다.
      // doc.data()를 실행하면 해당 document의 데이터를 가져올 수 있습니다.
      querySnapshot.forEach((doc) => {
        initialTodos.push({ id: doc.id, ...doc.data() });
      });

      // firestore에서 가져온 데이터를 state에 전달
      setContents(initialTodos);
    };

    getDownloadURL(
      ref(
        storage,
        "file/8ftpuzzD0_9jB6Uclw-EUshIHoWmtcSAvZW_3bRl6wF-3Gr7aFSTuXCKrAEBOgDoq4jJjEryvpWeen_L26Egpg.webp"
      )
    )
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        console.log(url);
        // This can be downloaded directly:
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

    fetchData();
  }, []);

  return (
    <>
      {contents.map((item) => {
        console.log(item.file);
        return (
          <Container key={item.id}>
            <Title>{item.title}</Title>
            <Fixed>
              <AvatarImg src={wendy} />
              <Fixedleft>{item.profile} &nbsp;</Fixedleft>
              <Fixedleft>{item.name}</Fixedleft>
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

            <img id="myimg" />
            {/*<div dangerouslySetInnerHTML={{ __html: sanitizer(quillValue) }}></div> */}
            {/*<DetailImg imgName={item.file} />*/}
            <Description>{item.content}</Description>
          </Container>
        );
      })}
      <button onClick={() => navigate("/")}>홈으로</button>
      <button onClick={() => navigate("/write-detail")}>작성 디테일로</button>
    </>
  );
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
