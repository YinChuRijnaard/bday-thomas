// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Which of the above do I actually need?

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD91cemNSj2oQRHZH8qMkiquSZWG2x4D9w",
  authDomain: "bday-thomas.firebaseapp.com",
  projectId: "bday-thomas",
  storageBucket: "bday-thomas.appspot.com",
  messagingSenderId: "123531827236",
  appId: "1:123531827236:web:d90cd907560f37583b60b1",
};

// Firestore exports
export const firestore = firebase.firestore();

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize sevices
export const auth = getAuth(app);
export const db = getFirestore(app);

// Collection ref
export const colRef = collection(db, "bday-messages");

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
