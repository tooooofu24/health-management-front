import { useState } from "react";
import useSWR from "swr";
import { CreateClassroomForm } from "../components/classroom/create/Index";
import { Classroom } from "../types/Classroom";
import { postRequest } from "../utils/apiClient";
import { fetcher } from "../utils/fetcher";

export const useClassrooms = () => {
  const { data, mutate: refetch } = useSWR(["/classrooms"], fetcher, {
    suspense: true,
  });
  const classrooms: Classroom[] = data?.results;
  return {
    classrooms,
    refetch,
  };
};

export const useClassroom = (id: number | string) => {
  const { data, mutate: refetch } = useSWR([`/classrooms/${id}`], fetcher, {
    suspense: true,
  });
  const classroom: Classroom = data?.result;
  return {
    classroom,
    refetch,
  };
};

export const useCreateClassroom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const createClassroom = async (props: CreateClassroomForm) => {
    setIsLoading(true);
    await postRequest("/classrooms", props).finally(() => {
      setIsLoading(false);
    });
  };
  return { isLoading, createClassroom };
};
