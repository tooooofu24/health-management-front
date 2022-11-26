import { Club, Student, Teacher } from "@prisma/client";
import useSWR from "swr";
import { ClubResponse } from "../types/APIResponse";
import { fetcher } from "../utils/fetcher";

export const useClubs = () => {
  const { data, mutate: refetch } = useSWR(["/api/clubs"], fetcher, {
    suspense: true,
  });
  const clubs: ClubResponse[] = data;
  return {
    clubs,
    refetch,
  };
};
