# nbc-code-feed
2024.02.07 ~ 2024.02.14

## 1. Git & GitHub

### 1-1. 브랜치 관리

브랜치는 detail과 detail2를 활용하였습니다.

## 2. 기능 구상

### Detail Page
<img width="1648" alt="스크린샷 2024-02-15 오후 5 33 43" src="https://github.com/monkeyhurray/react-first/assets/96379015/ffcf1e49-5355-4fb6-afd6-1f463fd8efc5">
  - [x] 홈에서 클릭한 게시된 이미지에 따라 상세 정보를 얻을 수 있도록 만들었습니다.
  - [x] 상세 페이지에서 볼 수 있는 것인 유저가 입력한 제목, 사진, 내용입니다.
  - [x] 자신이 만든 게시물은 삭제가 가능하며, 삭제버튼을 확인할 수 있습니다.
  - [x] 마이페이지의 Posting 버튼을 통해 게시물을 동록할 수 있습니다.
  - [x] 삭제하기 버튼을 누른다면 "정말삭제하시겠습니까?" 라는 글이 창에 뜨고, 유저는 취소와 확인 버튼을 통해 게시물 처리를 할 수 있습니다.
**state 정보**

1. const [contents, setContents] = useState([])와 const [checkUid, setCheckUid] = useState(null)를 이용하였으며,
2. contents에는 유저가 저장한 제목, 사진, 내용이 저장되어 있습니다.
3. checkUid는 인증 정보가 저장되어 있습니다.

### MyPage
![image](https://github.com/ketchup0211/nbc-code-feed/assets/154851474/8a601da9-2051-4e6c-a0c6-3a5b97004f59)
**기능구현**
마이페이지는 사용자의 정보를 받아와 이름, 가입한 이메일을 띄웁니다.
프로필 이미지는 기본 이미지로 바탕이 되어있고, 사용자가 Edit Profile 버튼을 누르면 프로필을 수정 할 수 있습니다.

상단 탭에는 홈버튼과 게시글을 올릴 수 있는 포스팅 탭이 존재합니다.
또한, 검색창도 배치되어 사용자가 원하는 게시글을 쉽게 찾아볼 수 있습니다.
검색기능은 오로지 Enter 키를 눌렀을 때만 검색이 되도록 구현하여 깔끔한 웹을 만들었습니다.

하단에는 사용자가 작성한 게시글을 띄웁니다.
대표 이미지와 제목을 띄우고, 게시글 이미지를 클릭했을 시에는 게시글 상세페이지로 넘어갑니다.

![image](https://github.com/ketchup0211/nbc-code-feed/assets/154851474/dfd5370d-7ff2-45b0-9868-2c072b5b017c)

포스팅 페이지에서 글을 테스트로 작성해보았습니다.

![image](https://github.com/ketchup0211/nbc-code-feed/assets/154851474/09d41026-23df-482e-9d22-e96561f8e641)

마이페이지에는 작성한 글이 새롭게 추가되어 있는 모습을 볼 수 있습니다.
또한, 최신순으로 정렬됩니다.

**브랜치**
MyPage 브랜치에서 작업했습니다.

## 3. DataBase

Firebase를 활용하였습니다.

## 4. 기타

- CRA 대신 Vite를 사용하였습니다.
- useState를 사용하여 만들었습니다.
- styled-components 를 사용하여 css를 디자인하였습니다.
- reset.css 코드를 적용하였습니다.
- react-router-dom 을 이용해 홈화면과 상세 페이지에서 홈으로 이동이 가능하도록 만들었습니다.

