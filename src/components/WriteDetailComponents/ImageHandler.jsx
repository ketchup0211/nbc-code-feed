import { storage } from "src/firebase";
import {
  ref,
  // uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { urlPatch } from "src/redux/modules/postBasicImage";
const imageHandler = (quillRef) => {
  const input = document.createElement("input");
  const path = quillRef.current.props.randomId;
  const checked = quillRef.current.props.check;
  const dispatch = quillRef.current.props.dispatch;
  const postBasicImage = quillRef.current.props.postBasicImage;
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();
  input.addEventListener("change", async () => {
    const file = input.files[0];
    const editor = quillRef.current.getEditor();
    const range = editor.getSelection(true);
    try {
      // 파일명을 "image/Date.now()"로 저장
      const storageRef = ref(storage, `/${checked}/${path}/${file.name}`);
      // Firebase Method : uploadBytes, getDownloadURL
      await uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          // 이미지 URL 에디터에 삽입
          editor.insertEmbed(range.index, "image", url);
          // URL 삽입 후 커서를 이미지 뒷 칸으로 이동
          editor.setSelection(range.index + 1);
        });
        getDownloadURL(snapshot.ref).then((url) => {
          if (postBasicImage === "") {
            dispatch(urlPatch(url));
          } else {
            return;
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  });
};
export default imageHandler;
