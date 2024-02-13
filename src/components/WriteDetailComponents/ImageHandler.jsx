import { storage } from "src/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const imageHandler = (quillRef) => {
  const input = document.createElement("input");
  const path = quillRef.current.props.randomId;
  const checked = quillRef.current.props.check;

  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.addEventListener("change", async () => {
    const file = input.files[0];
    try {
      const storageRef = ref(storage, `/${checked}/${path}/${file.name}`); //image를 ${user.id}로 변경하면 사용자에 따라 이미지 저장될 듯?
      const uploadTask = uploadBytesResumable(storageRef, file); //이미지를 storage에 업로드하는 동작 수행

      uploadTask.on(
        //uploadTask.on은 Firebase Storage에서 파일 업로드 작업의 상태를 추적하기 위한 메소드
        "complete", // 업로드가 완료되었을 때 호출됨
        (snapshot) => {
          console.log("Upload complete!");
          console.log("randomId", path);
          console.log("checked", checked);

          //업로드가 완료된 경우, 이미지의 다운로드 URL을 가져와서 quill 에디터에 출력
          getDownloadURL(snapshot.ref).then(async (downloadURL) => {
            console.log("Download URL:", downloadURL); // 스토리지에서 이미지URL 가져옴
            const editor = quillRef.current.getEditor(); // Quill 에디터 객체를 가져옴
            const range = editor.getSelection(true); //// 에디터의 현재 커서 위치를 가져옴

            editor.insertEmbed(range.index, "image", downloadURL); // 이미지를 에디터에 삽입

            editor.setSelection(range.index + 1); // 삽입한 이미지 다음에 커서를 위치
          });
        },
        (error) => {
          console.error("Upload failed:", error);
        }
      );
    } catch (error) {
      console.log(error);
    }
  });
};

export default imageHandler;
