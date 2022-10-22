import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app } from "./firebase";

export const getBearerToken = (): string => {
  const token = getCookie("token");
  return token ? String(token) : "";
};

export const refreshBearerToken = async (user: User) => {
  const token = await user?.getIdToken(true);
  setBearerToken(token ?? "");
};

export const setBearerToken = (token: string) => {
  setCookie("token", token);
};

export const removeBearerToken = () => {
  deleteCookie("token");
};
