import { atom, useAtom } from "jotai";
import { TeacherResponse } from "../types/APIResponse";
import { fetcher } from "../utils/fetcher";

const teacherAtom = atom<Promise<TeacherResponse> | null>(null);

teacherAtom.read = () => fetcher("/api/teachers/me");

export const useCurrentTeacher = () => {
  const [teacher, updateValue] = useAtom(teacherAtom);
  const refetch = () => {
    updateValue(fetcher("/api/teachers/me"));
  };
  return {
    teacher,
    refetch,
  };
};
