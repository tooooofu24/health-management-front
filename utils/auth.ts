import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./firebase";
import { NextRouter, useRouter } from "next/router";

export const login = async (router: NextRouter) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  await signInWithPopup(auth, provider);
  router.push("/admin");
};

export const logout = async () => {
  const auth = getAuth(app);
  await signOut(auth);
};
