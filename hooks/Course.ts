import useSWR from "swr";
import { Course } from "../types/Course";
import { fetcher } from "../utils/fetcher";

export const useCourses = () => {
  const { data, mutate: refetch } = useSWR(["/courses"], fetcher, {
    suspense: true,
  });
  const courses: Course[] = data?.results;
  return {
    courses,
    refetch,
  };
};

export const useCourse = (id: string | number) => {
  const { data, mutate: refetch } = useSWR([`/courses/${id}`], fetcher, {
    suspense: true,
  });
  const course: Course = data?.result;
  return {
    course,
    refetch,
  };
};
