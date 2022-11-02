import { Course } from "./Course";

export type Schedule = {
  id: string;
  course: Course;
  day: number;
  dayJa: string;
  period: number;
};
