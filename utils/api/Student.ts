import { StudentForm } from "../../components/admin/student/StudentForm";
import { deleteRequest, postRequest, putRequest } from "../apiClient";

type props = {
  id: number;
  clubId: number | null;
  classroomId: number;
};
export const updateStudent = async ({ id, ...props }: props) => {
  await putRequest(`/api/students/${id}`, props);
};

export const registerStudent = async (data: StudentForm) => {
  await postRequest("/api/students", data);
};

export const deleteStudent = async (id: number) => {
  await deleteRequest(`/api/students/${id}`);
};
