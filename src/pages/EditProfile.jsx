import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageChange from "src/components/EditProFileComponenets/ImageChange";
import NameChange from "src/components/EditProFileComponenets/NameChange";
import HomeHeader from "src/components/HomeComponents/HomeHeader";
import Loading from "src/components/Loading";
import { auth } from "src/firebase";
import { log } from "src/redux/modules/user";
import { LinkStyle } from "src/util/Style";
import styled from "styled-components";

function EditProfile() {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const dispatchUser = () => {
    dispatch(log(user));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(log(user));
    });
  }, [dispatch]);

  if (user === null)
    return (
      <LoadingMain>
        <Loading />
        <LinkStyle to={"/"}>
          <label>홈으로 가기</label>
        </LinkStyle>
      </LoadingMain>
    );
  return (
    <>
      <HomeHeader />
      <Background>
        <ImageChange user={user} dispatchUser={dispatchUser} />
        <NameChange dispatchUser={dispatchUser} />
      </Background>
    </>
  );
}

export default EditProfile;

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
