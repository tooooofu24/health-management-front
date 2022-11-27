import { Classroom, Student, Teacher } from "@prisma/client";
import useSWR from "swr";
import { ClassroomResponse } from "../types/APIResponse";
import { fetcher } from "../utils/fetcher";

export const useClassrooms = () => {
  const { data, mutate: refetch } = useSWR(["/api/classrooms"], fetcher, {
    suspense: true,
  });
  const classrooms: ClassroomResponse[] = data;
  return {
    classrooms,
    refetch,
  };
};

export const useClassroom = (id: number) => {
  const { data, mutate: refetch } = useSWR([`/api/classrooms/${id}`], fetcher, {
    suspense: true,
  });
  const classroom: ClassroomResponse = data;
  return {
    classroom,
    refetch,
  };
};
