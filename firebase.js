// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD91cemNSj2oQRHZH8qMkiquSZWG2x4D9w",
  authDomain: "bday-thomas.firebaseapp.com",
  projectId: "bday-thomas",
  storageBucket: "bday-thomas.appspot.com",
  messagingSenderId: "123531827236",
  appId: "1:123531827236:web:d90cd907560f37583b60b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize sevices
export const auth = getAuth(app);
export const db = getFirestore(app);

// Collection ref
export const colRef = collection(db, "bday-messages");
