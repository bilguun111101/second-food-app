import { setDoc, doc, collection } from "firebase/firestore";
import { db } from "../firebase";

const SetDataToFirestore = (path, data) => {
    setDoc(doc(collection(db, path)), data);
}

export default SetDataToFirestore;