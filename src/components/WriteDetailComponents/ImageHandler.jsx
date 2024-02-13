import { storage } from "src/firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const imageHandler = (quillRef) => {
  const input = document.createElement("input");

  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.addEventListener("change", async () => {
    const file = input.files[0];
    try {
      const storageRef = ref(storage, `image/${file.name}`); //image를 ${user.id}로 변경하면 사용자에 따라 이미지 저장될 듯?
      const uploadTask = uploadBytesResumable(storageRef, file); //이미지를 storage에 업로드하는 동작 수행

      uploadTask.on(
        //uploadTask.on은 Firebase Storage에서 파일 업로드 작업의 상태를 추적하기 위한 메소드
        "complete", // 업로드가 완료되었을 때 호출됨
        (snapshot) => {
          console.log("Upload complete!");

          //업로드가 완료된 경우, 이미지의 다운로드 URL을 가져와서 quill 에디터에 출력
          getDownloadURL(snapshot.ref).then(async (downloadURL) => {
            console.log("Download URL:", downloadURL); // 스토리지에서 이미지URL 가져옴
            const editor = quillRef.current.getEditor(); // Quill 에디터 객체를 가져옴
            const range = editor.getSelection(true); //// 에디터의 현재 커서 위치를 가져옴

            editor.insertEmbed(range.index, "image", downloadURL); // 이미지를 에디터에 삽입

            editor.setSelection(range.index + 1); // 삽입한 이미지 다음에 커서를 위치

            // 이미지 삭제 이벤트를 감지하여 Firebase Storage에서 이미지 삭제
            editor.root.addEventListener("DOMNodeRemoved", () => {
              // 이미지가 삭제되면 Firebase Storage에서도 삭제
              deleteImageFromStorage(downloadURL);
            });
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

// const deleteImageFromStorage = (imageURL) => {
//   // 다운로드 URL로부터 이미지의 경로를 추출
//   const imagePath = getImagePathFromURL(imageURL);

//   // 이미지 경로를 사용하여 Firebase Storage에서 이미지 삭제
//   const imageRef = ref(storage, imagePath);
//   deleteObject(imageRef)
//     .then(() => {
//       console.log("Image deleted from storage successfully");
//     })
//     .catch((error) => {
//       console.error("Error deleting image from storage:", error);
//     });
// };

// const getImagePathFromURL = (imageURL) => {
//   // 이미지의 다운로드 URL에서 스토리지 내부 경로 추출
//   const startIndex = imageURL.indexOf("/image");
//   if (startIndex === -1) {
//     throw new Error("Invalid image URL");
//   }
//   return imageURL.substring(startIndex + 7); // "/image/" 다음의 문자열 반환
// };

const deleteImageFromStorage = (imageURL) => {
  try {
    // 이미지의 경로와 토큰을 추출
    const { imagePath, token } = getImagePathAndTokenFromURL(imageURL);

    // 토큰을 사용하여 Firebase Storage에서 이미지 삭제
    const imageRef = ref(storage, imagePath);
    deleteObject(imageRef)
      .then(() => {
        console.log("Image deleted from storage successfully");
      })
      .catch((error) => {
        console.error("Error deleting image from storage:", error);
      });
  } catch (error) {
    console.error(error.message);
  }
};

const getImagePathAndTokenFromURL = (imageURL) => {
  // 이미지 URL에서 이미지 경로와 토큰 추출
  const startIndex = imageURL.indexOf("/image/");
  if (startIndex === -1) {
    throw new Error("Invalid image URL");
  }
  const endIndex = imageURL.indexOf("?");
  if (endIndex === -1) {
    throw new Error("Invalid image URL");
  }
  const imagePath = imageURL.substring(startIndex + 7, endIndex); // "/image/" 다음의 문자열부터 토큰 앞까지의 문자열 반환
  const token = imageURL.substring(endIndex + 7); // "?" 다음의 문자열 반환
  return { imagePath, token };
};

export default imageHandler;
