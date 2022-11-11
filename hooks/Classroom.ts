import { useState } from "react";
import useSWR from "swr";
import { CreateClassroomForm } from "../components/classroom/create/Index";
import { Classroom } from "../types/Classroom";
import { getRequest, postRequest } from "../utils/apiClient";
import { fetcher } from "../utils/fetcher";

export const useClassrooms = () => {
  const { data } = useSWR(["/classrooms"], fetcher, { suspense: true });
  const classrooms: Classroom[] = data?.results;
  return {
    classrooms,
  };
};

export const useClassroom = () => {
  const [classroom, setClassroom] = useState<Classroom | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const getClassroom = async (id: number | string) => {
    setIsLoading(true);
    const response = await getRequest("/classrooms/" + id).finally(() => {
      setIsLoading(false);
    });
    setClassroom(response.result);
  };
  return { classroom, getClassroom, isLoading };
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
