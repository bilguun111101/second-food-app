import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

export const SetAuthenticate = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
}

export const CheckAuthenticate = (email, password, setBool) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        setBool(true)
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setBool(false);
    })
}