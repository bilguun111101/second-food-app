import { firebaseConfig } from "./firebaseApiKey";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);