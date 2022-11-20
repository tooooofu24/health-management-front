import { User } from "@prisma/client";
import { atom, useAtom } from "jotai";
import { getCurrentUser } from "../hooks/CurrentUser";

// Create your atoms and derivatives
export const userAtom = atom<User | null>(null);

export const useFetchCurrentUser = () => {
  const [_, updateValue] = useAtom(userAtom);
  const fetchCurrentUser = async () => {
    const user = await getCurrentUser();
    updateValue(user);
  };
  return { fetchCurrentUser };
};
