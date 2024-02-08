// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWADx6xgz2dxUbd8ipU_zSKAZ8troIEDc",
  authDomain: "code-feed-21312.firebaseapp.com",
  projectId: "code-feed-21312",
  storageBucket: "code-feed-21312.appspot.com",
  messagingSenderId: "43913210757",
  appId: "1:43913210757:web:1b06ecd704906ea23872ec",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
