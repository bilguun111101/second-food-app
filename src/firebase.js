import { initializeApp } from "@firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCGQS11_yI8lQRrjUpqgXOUobzvkiRRZEM",
  authDomain: "foodsite-5a06b.firebaseapp.com",
  projectId: "foodsite-5a06b",
  storageBucket: "foodsite-5a06b.appspot.com",
  messagingSenderId: "482953667217",
  appId: "1:482953667217:web:f37c8a3c79d23e97e79530",
  measurementId: "G-67097R0ESD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
