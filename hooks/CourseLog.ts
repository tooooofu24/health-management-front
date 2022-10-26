import { useState } from "react";
import { postRequest } from "../utils/apiClient";

export const useCreateCourseLog = () => {
  const [isLoading, setIsLoading] = useState(false);
  type props = {
    courseId: number;
    date: string;
    period: number;
    attendances: row[];
  };
  type row = {
    studentId: number;
    attend: boolean;
    knowledge: 1 | 2 | 3;
    expression: 1 | 2 | 3;
    attitude: 1 | 2 | 3;
    message: string;
  };
  const createCourseLog = async (props: props) => {
    setIsLoading(true);
    await postRequest("/course-logs", props).finally(() => {
      setIsLoading(false);
    });
  };
  return { isLoading, createCourseLog };
};
