import { useState } from "react";
import useSWR from "swr";
import { StudentResponse } from "../types/APIResponse";
import { putRequest } from "../utils/apiClient";
import { fetcher } from "../utils/fetcher";

export const useUpdateStudent = () => {
  const [isLoading, setIsLoading] = useState(false);

  type props = {
    id: number;
    clubId: number | null;
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

export const useCurrentStudent = () => {
  const { data, mutate: refetch } = useSWR(["/api/students/me"], fetcher, {
    suspense: true,
  });
  const student: StudentResponse = data;
  return {
    student,
    refetch,
  };
};
export type studentsProps = {
  classroomId?: number;
  clubId?: number;
  name?: string;
  email?: string;
};

export const useStudents = (props: studentsProps) => {
  const { data, mutate: refetch } = useSWR(["/api/students", props], fetcher, {
    suspense: true,
  });
  const students: StudentResponse[] = data;
  return {
    students,
    refetch,
  };
};
