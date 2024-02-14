// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDbf8VYwR7DMplFrymkJI44_VSKgKDpxZA",
  authDomain: "newsfeed-project-311c1.firebaseapp.com",
  projectId: "newsfeed-project-311c1",
  storageBucket: "newsfeed-project-311c1.appspot.com",
  messagingSenderId: "26063908254",
  appId: "1:26063908254:web:5ad7ba3a715fb37e7cba8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
