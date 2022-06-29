import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// require("dotenv").config()

const firebaseConfig = {
  apiKey: "AIzaSyACPKuAF64-Jsa6AZlaVog4mSDhA2YM928",
  authDomain: "netflix-react-f90d2.firebaseapp.com",
  projectId: "netflix-react-f90d2",
  storageBucket: "netflix-react-f90d2.appspot.com",
  messagingSenderId: "385339197862",
  appId: "1:385339197862:web:f79ebd23f7afb2a8402767"
};

// Initialize Firebase
export  const FirebaseApp = initializeApp(firebaseConfig);
export const auth=getAuth(FirebaseApp)
export const db=getFirestore(FirebaseApp)

