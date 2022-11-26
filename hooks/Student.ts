import { useState } from "react";
import { putRequest } from "../utils/apiClient";

export const useUpdateStudent = () => {
  const [isLoading, setIsLoading] = useState(false);

  type props = {
    id: number;
    clubId?: number;
    classroomId: number;
  };
  const updateStudent = async ({ id, ...props }: props) => {
    setIsLoading(true);
    await putRequest(`/api/students/${id}`, props).finally(() => {
      setIsLoading(false);
    });
  };
  return { isLoading, updateStudent };
};
