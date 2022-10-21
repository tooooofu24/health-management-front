import { useEffect, useState } from "react";
import { Course } from "../types/Course";
import { getBearerToken } from "../utils/bearer";

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const getCourses = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/courses", {
      headers: {
        Authorization: "Bearer " + getBearerToken(),
      },
    });
    const json = await res.json();
    setCourses(json.results);
  };
  return { courses, getCourses };
};
