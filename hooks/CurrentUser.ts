import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useState } from "react";
import { app } from "../utils/firebase";

export const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
  return { user };
};
