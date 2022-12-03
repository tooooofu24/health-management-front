import { atom, useAtom } from "jotai";
import { useState } from "react";
import useSWR from "swr";
import { StudentForm } from "../components/admin/student/StudentForm";
import { StudentResponse } from "../types/APIResponse";
import { deleteRequest, postRequest, putRequest } from "../utils/apiClient";
import { fetcher } from "../utils/fetcher";

const studentsAtom = atom<Promise<StudentResponse[]> | []>([]);

studentsAtom.read = () => fetcher("/api/students");

export type studentsProps = {
  classroomId?: number;
  clubId?: number;
  name?: string;
  email?: string;
};

export const useStudents = (props: studentsProps) => {
  const [students, updateValue] = useAtom(studentsAtom);
  const refetch = () => {
    updateValue(fetcher("/api/students", props));
  };
  return {
    students,
    refetch,
  };
};
