import useSWR from "swr";
import { TeacherResponse } from "../types/APIResponse";
import { fetcher } from "../utils/fetcher";

export const useCurrentTeacher = () => {
  const { data, mutate: refetch } = useSWR(["/api/teachers/me"], fetcher, {
    suspense: true,
  });
  const teacher: TeacherResponse = data;
  return {
    teacher,
    refetch,
  };
};
