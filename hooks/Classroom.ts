import { useState } from "react";
import { CreateClassroomForm } from "../components/classroom/create/Index";
import { Classroom } from "../types/Classroom";
import { getRequest, postRequest } from "../utils/apiClient";

export const useClassrooms = () => {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getClassrooms = async () => {
    setIsLoading(true);
    const response = await getRequest("/classrooms").finally(() => {
      setIsLoading(false);
    });
    setClassrooms(response.results);
  };
  return { classrooms, getClassrooms, isLoading };
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
