import { Course } from "./Course";

export type Schedule = {
  id: string;
  course: Course;
  day_ja: string;
  period: number;
};
