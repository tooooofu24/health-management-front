import { useState } from "react";
import useSWR from "swr";
import { Course } from "../types/Course";
import { getRequest } from "../utils/apiClient";
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

export const useCourse = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const getCourse = async (id: number | string) => {
    setIsLoading(true);
    const response = await getRequest("/courses/" + id).finally(() => {
      setIsLoading(false);
    });
    setCourse(response.result);
  };
  return { course, getCourse, isLoading };
};
