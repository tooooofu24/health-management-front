import { atom, useAtom } from "jotai";
import { getCurrentUser } from "../hooks/CurrentUser";
import { UserResponse } from "../types/APIResponse";

// Create your atoms and derivatives
export const userAtom = atom<Promise<UserResponse | null> | null>(null);

userAtom.onMount = (setAtom) => {
  setAtom(getCurrentUser());
};
