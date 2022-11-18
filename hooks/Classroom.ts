import { Classroom } from "@prisma/client";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useClassrooms = () => {
  const { data, mutate: refetch } = useSWR(["/api/classrooms"], fetcher, {
    suspense: true,
  });
  const classrooms: Classroom[] = data;
  return {
    classrooms,
    refetch,
  };
};
