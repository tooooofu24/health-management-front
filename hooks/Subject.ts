import useSWR from "swr";
import { Subject } from "../types/Subject";
import { fetcher } from "../utils/fetcher";

export const useSubjects = () => {
  const { data, mutate: refetch } = useSWR(["/subjects"], fetcher, {
    suspense: true,
  });
  const subjects: Subject[] = data?.results;
  return { subjects, refetch };
};
