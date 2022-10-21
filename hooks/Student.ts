import { useEffect, useState } from "react";
import { Student } from "../types/Student";
import { getBearerToken } from "../utils/bearer";

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const getStudents = async (classroomId: number | string) => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL +
        "/students?classroom=" +
        classroomId,
      {
        headers: {
          Authorization: "Bearer " + getBearerToken(),
        },
      }
    );
    const json = await res.json();
    setStudents(json.results);
  };
  return { students, getStudents };
};
