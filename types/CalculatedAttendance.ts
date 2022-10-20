import { Course } from "./Course";
import { Student } from "./Student";

export type CalculatedAttendance = {
  course: Course;
  student: Student;
  attendanceRate: number; // 出席率（小数）
  knowledgeAverage: number;
  expressionAverage: number;
  attitudeAverage: number;
};
