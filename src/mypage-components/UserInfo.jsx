import { useEffect } from "react";
import styled from "styled-components";
import EditButton from "./common/EditButton";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { initialization } from "src/redux/modules/user";
import { collection, getDocs, query } from "firebase/firestore";

export default function UserInfo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    if (!user) {
      const fetchData = async (checkuid) => {
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
        const check = initialTodos.find((e) => e.id === checkuid);
        dispatch(initialization(check));
      };

      const authStateChangedCallback = (user) => {
        if (user) {
          fetchData(user.uid);
        }
      };

      const unsubscribe = onAuthStateChanged(auth, authStateChangedCallback);

      return () => unsubscribe();
    }
  }, [dispatch, user]);

  if (!user) {
    return <div>Loading ...</div>;
  }

  return (
    <UserInfoContainer>
      <NameItem>{user.name}</NameItem>
      <EmailItem>{user.email}</EmailItem>
      <EditButton></EditButton>
    </UserInfoContainer>
  );
}

const UserInfoContainer = styled.div`
  display: inline-flex;
  align-items: start;
  flex-direction: column;
`;
const NameItem = styled.p`
  font-size: 2rem;
  margin-bottom: 15px;
`;
const EmailItem = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
  margin-left: 5px;
`;
