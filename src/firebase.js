// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbf8VYwR7DMplFrymkJI44_VSKgKDpxZA",
  authDomain: "newsfeed-project-311c1.firebaseapp.com",
  projectId: "newsfeed-project-311c1",
  storageBucket: "newsfeed-project-311c1.appspot.com",
  messagingSenderId: "26063908254",
  appId: "1:26063908254:web:5ad7ba3a715fb37e7cba8f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
