import { User } from "@prisma/client";
import { atom, useAtom } from "jotai";
import { getCurrentUser } from "../hooks/CurrentUser";

// Create your atoms and derivatives
export const userAtom = atom<User | null>(null);

userAtom.onMount = (setAtom) => {
  getCurrentUser()
    .then((user) => {
      setAtom(user);
    })
    .catch(() => {
      setAtom(null);
    });
};
