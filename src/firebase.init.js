import {getAuth} from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIAAgmAY-J9jHA1Jt5bKD2NRgTtbEyMjM",
  authDomain: "tech-geek-593fb.firebaseapp.com",
  projectId: "tech-geek-593fb",
  storageBucket: "tech-geek-593fb.appspot.com",
  messagingSenderId: "873480061740",
  appId: "1:873480061740:web:907384ace90190162d6289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;