// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSGb13_SldmtYtyxmhI6piZCsafxVEiGU",
  authDomain: "code-feed.firebaseapp.com",
  projectId: "code-feed",
  storageBucket: "code-feed.appspot.com",
  messagingSenderId: "647289164008",
  appId: "1:647289164008:web:682bd598beb4b83330b95d",
  measurementId: "G-WXEYCNLZZ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
