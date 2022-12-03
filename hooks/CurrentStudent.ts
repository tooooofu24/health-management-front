import { atom, useAtom } from "jotai";
import { StudentResponse } from "../types/APIResponse";
import { fetcher } from "../utils/fetcher";

const studentAtom = atom<Promise<StudentResponse> | null>(null);

studentAtom.read = () => fetcher("/api/students/me");

export const useCurrentStudent = () => {
  const [student, updateValue] = useAtom(studentAtom);
  const refetch = () => {
    updateValue(fetcher("/api/students/me"));
  };
  return {
    student,
    refetch,
  };
};
