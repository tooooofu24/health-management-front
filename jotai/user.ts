import { User } from "@prisma/client";
import { atom, useAtom } from "jotai";
import { getCurrentUser } from "../hooks/CurrentUser";

// Create your atoms and derivatives
export const userAtom = atom<Promise<User | null> | null>(null);

userAtom.onMount = (setAtom) => {
  setAtom(getCurrentUser());
  return;
};
