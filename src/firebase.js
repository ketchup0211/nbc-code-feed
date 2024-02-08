// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN4MQ0FqABXjMsuuiKX9u6wFY1z9-vl6o",
  authDomain: "code-feed-b2a51.firebaseapp.com",
  projectId: "code-feed-b2a51",
  storageBucket: "code-feed-b2a51.appspot.com",
  messagingSenderId: "156601940351",
  appId: "1:156601940351:web:e040c803816d7aff84824a",
  measurementId: "G-0G63DPNV85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);