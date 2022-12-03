import { atom, useAtom } from "jotai";
import { ClubResponse } from "../types/APIResponse";
import { fetcher } from "../utils/fetcher";

const clubListAtom = atom<Promise<ClubResponse[]> | []>([]);

clubListAtom.read = () => fetcher("/api/clubs");

export const useClubs = () => {
  const [clubs, updateValue] = useAtom(clubListAtom);
  const refetch = () => {
    updateValue(fetcher("/api/clubs"));
  };
  return {
    clubs,
    refetch,
  };
};
