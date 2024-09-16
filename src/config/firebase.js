// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSF37yF9bjKmD_YPkR18tX9IKJPgho19E",
  authDomain: "react-contact-367ca.firebaseapp.com",
  projectId: "react-contact-367ca",
  storageBucket: "react-contact-367ca.appspot.com",
  messagingSenderId: "556183261549",
  appId: "1:556183261549:web:e63b3180de20a307084a64"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);