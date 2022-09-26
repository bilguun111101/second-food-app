import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export const Authenticate = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
    });
};

export const SignInAuth = (
  email,
  password,
  setSignBool,
  navigate,
  setLoading
) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setSignBool(true);
      navigate("/home");
      setLoading(false);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoading(false);
      alert("Таны оруулсан мэдээлэл буруу байна!!!");
    });
};
