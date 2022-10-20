import {
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./firebase";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

export const login = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  await signInWithPopup(auth, provider).then(async (results) => {
    const user = results.user;
    const bearer = await getIdToken(user);
    setBearerToken(bearer);
  });
};

export const logout = async () => {
  const auth = getAuth(app);
  await signOut(auth);
  removeBearerToken();
};

export const getBearerToken = (): string => {
  return String(getCookie("token"));
};

const setBearerToken = (token: string) => {
  setCookie("token", token);
};

const removeBearerToken = () => {
  deleteCookie("token");
};
