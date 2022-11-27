import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./firebase";
import { FirebaseError } from "firebase/app";
import { getCurrentUser } from "../hooks/CurrentUser";

export const login = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  await signInWithPopup(auth, provider);
  await getCurrentUser();
};

export const logout = async () => {
  const auth = getAuth(app);
  await signOut(auth);
};
