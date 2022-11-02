import { Student } from "../../types/Student";

export type AttendanceForm = {
  courseId: number;
  date: string;
  period: number;
  attendances: AttendanceRow[];
};

export type AttendanceRow = {
  student: Student;
  attend: boolean;
  knowledge: 1 | 2 | 3 | null;
  expression: 1 | 2 | 3 | null;
  attitude: 1 | 2 | 3 | null;
  message: string;
};
