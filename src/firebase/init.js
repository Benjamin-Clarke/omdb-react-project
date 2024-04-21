// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0UEJLJNoKgcF4TFmB6UaqHmIfSUx4zwU",
  authDomain: "omdb-react-cfb23.firebaseapp.com",
  projectId: "omdb-react-cfb23",
  storageBucket: "omdb-react-cfb23.appspot.com",
  messagingSenderId: "78895115039",
  appId: "1:78895115039:web:6e3bb330e67ea0bf925e2a"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const auth = getAuth();