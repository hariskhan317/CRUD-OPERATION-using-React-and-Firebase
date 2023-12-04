// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLG8IezKpVyPquKeZXhbdpsbl9iB6eTpc",
  authDomain: "react-course-84235.firebaseapp.com",
  projectId: "react-course-84235",
  storageBucket: "react-course-84235.appspot.com",
  messagingSenderId: "1058763034000",
  appId: "1:1058763034000:web:09ead5d70c46961ebcf715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);