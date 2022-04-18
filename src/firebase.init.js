// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG1-EjxTLJevzizWe_lw7EJhcNba-qkVI",
  authDomain: "conten-writer.firebaseapp.com",
  projectId: "conten-writer",
  storageBucket: "conten-writer.appspot.com",
  messagingSenderId: "383857107894",
  appId: "1:383857107894:web:083e24f5ad5e7b43565717",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
