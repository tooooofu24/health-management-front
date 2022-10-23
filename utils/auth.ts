import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./firebase";
import { removeBearerToken, setBearerToken } from "./bearer";
import { useCheckUser } from "../hooks/Auth";

export const login = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const { checkUser } = useCheckUser();
  await signInWithPopup(auth, provider).then(async (results) => {
    const user = results.user;
    const token = await user.getIdToken(true);
    setBearerToken(token);
    await checkUser().catch(async (e: any) => {
      // DBにデータがない場合はFirebaseからもデータ削除
      await user.delete();
      await logout();
      throw e;
    });
  });
};

export const logout = async () => {
  const auth = getAuth(app);
  await signOut(auth);
  removeBearerToken();
};
