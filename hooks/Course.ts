import { useEffect, useState } from "react";
import { Course } from "../types/Course";

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const getCourses = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/courses");
    const json = await res.json();
    setCourses(json.results);
  };
  useEffect(() => {
    getCourses();
  }, []);
  return { courses, setCourses };
};
