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
  apiKey: "AIzaSyDSGb13_SldmtYtyxmhI6piZCsafxVEiGU",
  authDomain: "code-feed.firebaseapp.com",
  projectId: "code-feed",
  storageBucket: "code-feed.appspot.com",
  messagingSenderId: "647289164008",
  appId: "1:647289164008:web:682bd598beb4b83330b95d",
  measurementId: "G-WXEYCNLZZ6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);