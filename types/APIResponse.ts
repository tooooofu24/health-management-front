import {
  Classroom,
  Club,
  HealthCheck,
  Student,
  Teacher,
  User,
} from "@prisma/client";

export type UserResponse = {
  students: Student[];
  teachers: Teacher[];
} & User;

export type StudentResponse = {
  user: User;
  classroom?: Classroom;
  club?: Club;
  healthChecks: HealthCheck[];
} & Student;

export type TeacherResponse = {
  user: User;
  classroom?: Classroom;
  club?: Club;
  healthChecks: HealthCheck[];
} & Teacher;

export type ClassroomResponse = {
  students: Student[];
  teachers: Teacher[];
} & Classroom;

export type ClubResponse = {
  students: Student[];
  teachers: Teacher[];
} & Club;

export type HealthCheckResponse = {
  checkedTeacher?: Teacher;
} & HealthCheck;
