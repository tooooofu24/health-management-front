import { useState } from "react";
import { Course } from "../types/Course";
import { getRequest } from "../utils/apiClient";

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const getCourses = async () => {
    const response = await getRequest("/courses");
    setCourses(response.results);
  };
  return { courses, getCourses };
};
