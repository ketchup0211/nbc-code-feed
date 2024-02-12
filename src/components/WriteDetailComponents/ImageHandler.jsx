import { storage } from "src/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const imageHandler = (quillRef) => {
  const input = document.createElement("input");

  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.addEventListener("change", async () => {
    const file = input.files[0];
    try {
      const storageRef = ref(storage, `image/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        //uploadTask.on은 Firebase Storage에서 파일 업로드 작업의 상태를 추적하기 위한 메소드
        "complete", // 업로드가 완료되었을 때 호출됨
        (snapshot) => {
          console.log("Upload complete!");
          //업로드가 완료된 경우, 이미지의 다운로드 URL을 가져와서 quill 에디터에 출력
          getDownloadURL(snapshot.ref).then(async (downloadURL) => {
            console.log("Download URL:", downloadURL);
            const editor = quillRef.current.getEditor(); // Quill 에디터 객체를 가져옴
            const range = editor.getSelection(true); //// 에디터의 현재 커서 위치를 가져옴
            // 이미지를 에디터에 삽입
            editor.insertEmbed(range.index, "image", downloadURL);

            // 삽입한 이미지 다음에 커서를 위치
            editor.setSelection(range.index + 1);
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
