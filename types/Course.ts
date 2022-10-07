import { Classroom } from "./Classroom";
import { Subject } from "./Subject";

export type Course = {
  id: string;
  classroom: Classroom;
  subject: Subject;
};
