import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageChange from "src/components/EditProFileComponenets/ImageChange";
import NameChange from "src/components/EditProFileComponenets/NameChange";
import HomeHeader from "src/components/HomeComponents/HomeHeader";
import Loading from "src/components/Loading";
import { auth, db } from "src/firebase";
import { initialization } from "src/redux/modules/user";
import { LinkStyle } from "src/util/Style";
import styled from "styled-components";

function EditProfile() {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const dispatchUser = (item) => {
    dispatch(initialization(item));
  };

  useEffect(() => {
    const fetchData = async (uid) => {
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

      const check = initialTodos.find((e) => e.id === uid);
      dispatch(initialization(check));
    };
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchData(user.uid);
      }
    });
  }, []);

  if (user === null) {
    return (
      <BackgroundColor>
        <LoadingMain>
          <Loading />
          <LinkStyle to={"/"}>
            <label>홈으로 가기</label>
          </LinkStyle>
        </LoadingMain>
      </BackgroundColor>
    );
  }
  return (
    <BackgroundColor>
      <HomeHeader />
      <Background>
        <ImageChange user={user} dispatchUser={dispatchUser} />
        <NameChange user={user} dispatchUser={dispatchUser} />
      </Background>
    </BackgroundColor>
  );
}

export default EditProfile;

const BackgroundColor = styled.div`
  background-color: whitesmoke;
  height: 100vh;
`;

const LoadingMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
