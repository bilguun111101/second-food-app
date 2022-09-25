import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
} from "firebase/auth";

export const SetAuthenticate = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
}