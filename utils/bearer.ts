import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";

export const getBearerToken = (): string => {
  console.log(String(getCookie("token")));
  return String(getCookie("token"));
};

export const refreshBearerToken = async () => {
  const auth = getAuth(app);
  onAuthStateChanged(auth, async (user) => {
    const token = await user?.getIdToken(true);
    setBearerToken(token ?? "");
  });
};

export const setBearerToken = (token: string) => {
  setCookie("token", token);
};

export const removeBearerToken = () => {
  deleteCookie("token");
};
