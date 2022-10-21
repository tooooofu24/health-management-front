import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./firebase";
import { removeBearerToken, setBearerToken } from "./bearer";

export const login = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  await signInWithPopup(auth, provider).then(async (results) => {
    const token = await results.user.getIdToken(true);
    setBearerToken(token);
  });
};

export const logout = async () => {
  const auth = getAuth(app);
  await signOut(auth);
  removeBearerToken();
};
