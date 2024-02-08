// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg_EgfN9FlBXyAd-JcUlHMvTEkAjiuqOQ",
  authDomain: "newsfeed-team-project.firebaseapp.com",
  projectId: "newsfeed-team-project",
  storageBucket: "newsfeed-team-project.appspot.com",
  messagingSenderId: "177276772419",
  appId: "1:177276772419:web:92f1b3598e651e6586b4f6",
  measurementId: "G-FTM19B9D8D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
