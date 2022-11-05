import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./firebase";
import { useCheckUser } from "../hooks/Auth";
import { FirebaseError } from "firebase/app";

export const login = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const { checkUser } = useCheckUser();
  await signInWithPopup(auth, provider)
    .catch((e: Error) => {
      if (e instanceof FirebaseError) {
        throw new Error("システムのエラーが発生しました");
      }
      throw new Error("不明なエラーです");
    })
    .then(async (results) => {
      await checkUser().catch(async (e: any) => {
        await logout();
        throw e;
      });
    });
};

export const logout = async () => {
  const auth = getAuth(app);
  await signOut(auth);
};
