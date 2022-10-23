import { useState } from "react";
import { Classroom } from "../types/Classroom";
import { getRequest } from "../utils/apiClient";

export const useClassrooms = () => {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getClassrooms = async () => {
    setIsLoading(true);
    const response = await getRequest("/classrooms");
    setClassrooms(response.results);
    setIsLoading(false);
  };
  return { classrooms, getClassrooms, isLoading };
};

export const useClassroom = () => {
  const [classroom, setClassroom] = useState<Classroom | null>(null);
  const getClassroom = async (id: number | string) => {
    const response = await getRequest("/classrooms/" + id);
    setClassroom(response.result);
  };
  return { classroom, getClassroom };
};
