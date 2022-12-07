import { atom, useAtom } from "jotai";
import { StudentResponse } from "../types/APIResponse";
import { fetcher } from "../utils/fetcher";
import { atomFamily, useUpdateAtom } from "jotai/utils";
import deepEqual from "fast-deep-equal";

const versionAtom = atom(0);

export type studentsProps = {
  classroomId?: number | null;
  clubId?: number | null;
  name?: string | null;
  email?: string | null;
  page?: number | null;
};

const studentsFamilyAtom = atomFamily(
  (filter: studentsProps) =>
    atom<Promise<StudentResponse[]> | []>((get) => {
      get(versionAtom);
      return fetcher("/api/students", filter);
    }),
  deepEqual
);

export const useStudents = (filter: studentsProps) => {
  const [students] = useAtom(studentsFamilyAtom(filter));
  const [version, setVersion] = useAtom(versionAtom);
  const refetch = () => {
    setVersion(version + 1);
  };
  return {
    students,
    refetch,
  };
};
