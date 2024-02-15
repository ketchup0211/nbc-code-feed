# nbc-code-feed
2024.02.07 ~ 2024.02.14

## 1. Git & GitHub

### 1-1. 브랜치 관리

브랜치는 detail과 detail2를 활용하였습니다.

## 2. 기능 구상

<img width="1648" alt="스크린샷 2024-02-15 오후 5 33 43" src="https://github.com/monkeyhurray/react-first/assets/96379015/ffcf1e49-5355-4fb6-afd6-1f463fd8efc5">

- **Detail Page**
  - [x] 홈에서 클릭한 게시된 이미지에 따라 상세 정보를 얻을 수 있도록 만들었습니다.
  - [x] 상세 페이지에서 볼 수 있는 것인 유저가 입력한 제목, 사진, 내용입니다.
  - [x] 자신이 만든 게시물은 삭제가 가능하며, 삭제버튼을 확인할 수 있습니다.
  - [x] 마이페이지의 Posting 버튼을 통해 게시물을 동록할 수 있습니다.
  - [x] 삭제하기 버튼을 누른다면 "정말삭제하시겠습니까?" 라는 글이 창에 뜨고, 유저는 취소와 확인 버튼을 통해 게시물 처리를 할 수 있습니다.

### **state 정보**

1. const [contents, setContents] = useState([])와 const [checkUid, setCheckUid] = useState(null)를 이용하였으며,
2. contents에는 유저가 저장한 제목, 사진, 내용이 저장되어 있습니다.
3. checkUid는 인증 정보가 저장되어 있습니다.

## 3. DataBase

Firebase를 활용하였습니다.

## 4. 기타

- CRA 대신 Vite를 사용하였습니다.
- useState를 사용하여 만들었습니다.
- styled-components 를 사용하여 css를 디자인하였습니다.
- reset.css 코드를 적용하였습니다.
- react-router-dom 을 이용해 홈화면과 상세 페이지에서 홈으로 이동이 가능하도록 만들었습니다.

