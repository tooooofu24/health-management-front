import { Course } from "./Course";
import { Student } from "./Student";

export type Score = {
  attendanceRate: number;
  attitudeAverage: number;
  expressionAverage: number;
  knowledgeAverage: number;
  course: Course;
  student: Student;
};
