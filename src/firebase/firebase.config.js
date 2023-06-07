// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// require("dotenv").config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.DB_USER);
const firebaseConfig = {
  apiKey: "AIzaSyCm6jd-ORqFvmpqDOGIZ7zNbL8kmJcfpfk",
  authDomain: "toy-market-4bbe6.firebaseapp.com",
  projectId: "toy-market-4bbe6",
  storageBucket: "toy-market-4bbe6.appspot.com",
  messagingSenderId: "272486217659",
  appId: "1:272486217659:web:b401a8c4bb2613c5b0b69e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
