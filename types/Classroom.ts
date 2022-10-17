import { Subject } from "./Subject";

export type Classroom = {
  id: string;
  grade: number;
  name: string;
  teacher: string;
  subjects?: Subject[];
};
