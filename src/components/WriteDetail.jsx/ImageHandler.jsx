import { storage } from "src/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const imageHandler = (quillRef) => {
  const input = document.createElement("input");

  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.addEventListener("change", async (e) => {
    const file = input.files[0];
    try {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytes(storageRef, file);

      uploadTask.on(
        () => {
          toast.error("업로드 실패", {
            theme: "colored",
          });
        },
        () => {
          //업로드가 완료된 경우, 이미지의 다운로드 URL을 가져와서 quill 에디터에 출력
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            const editor = quillRef.current.getEditor(); // Quill 에디터 객체를 가져옴
            const range = editor.getSelection(); //// 에디터의 현재 커서 위치를 가져옴
            // 이미지를 에디터에 삽입
            editor.insertEmbed(range.index, "image", downloadURL);
            console.lof(downloadURL);
            // 삽입한 이미지 다음에 커서를 위치
            editor.setSelection(range.index + 1);
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  });
};

export default imageHandler;
