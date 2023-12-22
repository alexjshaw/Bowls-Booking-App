// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuJefjRECmHtdA9tsED4DI3u_JlUf3nTo",
  authDomain: "bowls-booking-app.firebaseapp.com",
  projectId: "bowls-booking-app",
  storageBucket: "bowls-booking-app.appspot.com",
  messagingSenderId: "406846408518",
  appId: "1:406846408518:web:045b8e8291ae76b4cd4747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;