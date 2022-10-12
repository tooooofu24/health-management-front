import { Course } from "./Course";

export type Schedule = {
  id: string;
  course: Course;
  dayJa: string;
  period: number;
};
