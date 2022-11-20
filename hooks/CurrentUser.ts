import {
  getAuth,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { getRequest } from "../utils/apiClient";
import { app } from "../utils/firebase";
import { User } from "@prisma/client";

export const useFirebaseUser = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth(app);
  useEffect(() => {
    const unListen = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
    return () => {
      unListen();
    };
  }, []);
  return { user, isLoading };
};

export const getCurrentUser = async (): Promise<User> => {
  const res = await getRequest("/api/current-user");
  return res.data;
};
