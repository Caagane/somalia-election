// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT9j73iVG8HoElMlHBUgJsUGyVq1pQB80",
  authDomain: "som-election.firebaseapp.com",
  projectId: "som-election",
  storageBucket: "som-election.appspot.com",
  messagingSenderId: "693992091459",
  appId: "1:693992091459:web:35f9fc880d61f949e749f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();