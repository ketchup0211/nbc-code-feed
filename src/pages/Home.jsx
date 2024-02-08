import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>홈</div>
      <button onClick={() => navigate("/detail")}>디테일로</button>
      <button onClick={() => navigate("/write-detail")}>작성 디테일로</button>
    </>
  );
}

export default Home;
