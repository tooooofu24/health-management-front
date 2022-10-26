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
  knowledge?: 1 | 2 | 3;
  expression?: 1 | 2 | 3;
  attitude?: 1 | 2 | 3;
  comment?: string;
};
