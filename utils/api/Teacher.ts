import { putRequest } from "../apiClient";

type props = {
  id: number;
  clubId: number | null;
  classroomId: number | null;
};
export const updateTeacher = async ({ id, ...props }: props) => {
  await putRequest(`/api/teachers/${id}`, props);
};
