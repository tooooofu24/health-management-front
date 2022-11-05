import { Classroom } from "./Classroom";
import { Score } from "./Score";
import { Subject } from "./Subject";

export type Course = {
  id: string;
  classroom: Classroom;
  subject: Subject;
  scores?: Score[];
};
