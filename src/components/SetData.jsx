import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const SetData = (path, data) => {
  setDoc(doc(collection(db, path)), data);
};
