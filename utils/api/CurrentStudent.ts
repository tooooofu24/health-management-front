import { putRequest } from "../apiClient";

type props = {
  clubId: number | null;
  classroomId: number;
};
export const updateCurrentStudent = async (data: props) => {
  await putRequest("/api/students/me", data);
};
