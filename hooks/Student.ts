import { useState } from "react";
import { Student } from "../types/Student";
import { getRequest } from "../utils/apiClient";

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getStudentsByClassroomId = async (classroomId: number | string) => {
    setIsLoading(true);
    const response = await getRequest("/students", {
      "classroom-id": classroomId,
    }).finally(() => {
      setIsLoading(false);
    });
    setStudents(response.results);
  };
  const getStudentsByCourseId = async (courseId: number | string) => {
    setIsLoading(true);
    const response = await getRequest("/students", {
      "course-id": courseId,
    }).finally(() => {
      setIsLoading(false);
    });
    setStudents(response.results);
  };
  return {
    students,
    getStudentsByClassroomId,
    getStudentsByCourseId,
    isLoading,
  };
};
