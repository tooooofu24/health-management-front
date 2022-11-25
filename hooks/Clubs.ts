import { Club, Student, Teacher } from "@prisma/client";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useClubs = () => {
  const { data, mutate: refetch } = useSWR(["/api/clubs"], fetcher, {
    suspense: true,
  });
  const clubs: (Club & { teacher: Teacher; students: Student[] })[] = data;
  return {
    clubs,
    refetch,
  };
};
