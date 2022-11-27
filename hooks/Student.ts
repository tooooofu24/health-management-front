import { useState } from "react";
import useSWR from "swr";
import { StudentForm } from "../components/admin/student/StudentForm";
import { StudentResponse } from "../types/APIResponse";
import { postRequest, putRequest } from "../utils/apiClient";
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

export const useUpdateCurrentStudent = () => {
  const [isLoading, setIsLoading] = useState(false);
  type props = {
    clubId: number | null;
    classroomId: number;
  };
  const updateStudent = async (data: props) => {
    setIsLoading(true);
    await putRequest("/api/students/me", data).finally(() => {
      setIsLoading(false);
    });
  };
  return { isLoading, updateStudent };
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

export const useRegisterStudent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const registerStudent = async (data: StudentForm) => {
    setIsLoading(true);
    await postRequest("/api/students", data).finally(() => {
      setIsLoading(false);
    });
  };
  return { isLoading, registerStudent };
};
