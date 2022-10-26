import { useState } from "react";
import { Course } from "../types/Course";
import { getRequest } from "../utils/apiClient";

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getCourses = async () => {
    setIsLoading(true);
    const response = await getRequest("/courses").finally(() => {
      setIsLoading(false);
    });
    setCourses(response.results);
  };
  return { courses, getCourses, isLoading };
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
