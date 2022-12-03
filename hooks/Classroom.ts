import { atom, useAtom } from "jotai";
import { ClassroomResponse } from "../types/APIResponse";
import { fetcher } from "../utils/fetcher";

const classroomListAtom = atom<Promise<ClassroomResponse[]> | []>([]);
const classroomAtom = atom<Promise<ClassroomResponse> | null>(null);

classroomListAtom.read = () => fetcher("/api/classrooms");

export const useClassrooms = () => {
  const [classrooms, updateValue] = useAtom(classroomListAtom);
  const refetch = () => {
    updateValue(fetcher("/api/classrooms"));
  };
  return {
    classrooms,
    refetch,
  };
};

export const useClassroom = (id: number | string) => {
  const [classroom, updateValue] = useAtom(classroomAtom);
  const refetch = () => {
    updateValue(fetcher(`/api/classrooms/${id}`));
  };
  return {
    classroom,
    refetch,
  };
};
