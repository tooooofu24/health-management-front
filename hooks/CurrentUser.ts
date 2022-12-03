import { UserResponse } from "../types/APIResponse";
import { atom, useAtom } from "jotai";
import { fetcher } from "../utils/fetcher";

const userAtom = atom<Promise<UserResponse> | null>(null);

userAtom.read = () => fetcher("/api/current-user");

export const useCurrentUser = () => {
  const [user, updateValue] = useAtom(userAtom);
  const refetch = () => {
    updateValue(fetcher("/api/current-user"));
  };
  return {
    user,
    refetch,
  };
};
