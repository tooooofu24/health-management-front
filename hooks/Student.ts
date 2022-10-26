import { useState } from "react";
import { Student } from "../types/Student";
import { getRequest } from "../utils/apiClient";

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getStudents = async (classroomId: number | string) => {
    setIsLoading(true);
    const response = await getRequest("/students", {
      "classroom-id": classroomId,
    }).finally(() => {
      setIsLoading(false);
    });
    setStudents(response.results);
  };
  return { students, getStudents, isLoading };
};
