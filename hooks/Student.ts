import { useState } from "react";
import { Student } from "../types/Student";
import { getRequest } from "../utils/apiClient";
import { getBearerToken } from "../utils/bearer";

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const getStudents = async (classroomId: number | string) => {
    const response = await getRequest("/students", { classroomId });
    setStudents(response.results);
  };
  return { students, getStudents };
};
