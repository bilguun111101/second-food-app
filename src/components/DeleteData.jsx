import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const DeleteData = async (path, uid) => {
    const response = doc(db, path, uid);
    const docSnap = await getDoc(response);
    if(!docSnap.exists()) return;
    try {
        await deleteDoc(response)
        console.log("delete is success!!!")
    } catch(err) {console.log(err.message)}
}