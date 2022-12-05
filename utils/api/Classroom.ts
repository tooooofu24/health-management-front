import { useClassrooms } from "../../hooks/Classroom";

export const findClassroom = (id: number) => {
  const { classrooms } = useClassrooms();
  const classroom = classrooms.find((v) => v.id === id);
  return classroom;
};
