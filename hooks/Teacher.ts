import { Club, Student, Teacher } from "@prisma/client";
import { useState } from "react";
import useSWR from "swr";
import { TeacherResponse } from "../types/APIResponse";
import { putRequest } from "../utils/apiClient";
import { fetcher } from "../utils/fetcher";

export const useCurrentTeacher = () => {
  const { data, mutate: refetch } = useSWR(["/api/teachers/me"], fetcher, {
    suspense: true,
  });
  const teacher: TeacherResponse = data;
  return {
    teacher,
    refetch,
  };
};

export const useUpdateTeacher = () => {
  const [isLoading, setIsLoading] = useState(false);

  type props = {
    id: number;
    clubId: number | null;
    classroomId: number | null;
  };
  const updateTeacher = async ({ id, ...props }: props) => {
    setIsLoading(true);
    await putRequest(`/api/teachers/${id}`, props).finally(() => {
      setIsLoading(false);
    });
  };
  return { isLoading, updateTeacher };
};
