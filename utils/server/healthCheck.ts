import { async } from "@firebase/util";
import {
  HealthCheck,
  PrismaClient,
  Student,
  Teacher,
  User,
} from "@prisma/client";
import { NextApiRequest } from "next";
import { isTeacher } from "./user";

const prisma = new PrismaClient();

export const registerHealthCheck = async (
  req: NextApiRequest,
  student: Student
): Promise<HealthCheck> => {
  const healthCheck = await prisma.healthCheck.create({
    data: {
      studentId: student.id,
      ...req.body,
    },
  });
  return healthCheck;
};

export type filterProps = {
  date?: string;
  classroomId?: number;
  studentId?: number;
  clubId?: number;
  isUnread?: 0 | 1;
  isDanger?: 0 | 1;
  page?: number;
};
export const getHealthChecks = async (
  props: filterProps
): Promise<(HealthCheck & { student: Student })[]> => {
  const { date, classroomId, studentId, clubId, page } = props;
  const take = 20;
  const currentPage = page ? Number(page) : 1;
  const healthChecks = await prisma.healthCheck.findMany({
    take,
    skip: (currentPage - 1) * take,
    where: {
      studentId: studentId ? Number(studentId) : undefined,
      student: {
        classroomId: classroomId ? Number(classroomId) : undefined,
        clubId: clubId ? Number(clubId) : undefined,
      },
    },
    include: {
      student: true,
    },
  });
  return healthChecks;
};

export const checkHealthCheck = async (id: number, teacher: Teacher) => {
  const healthCheck = await prisma.healthCheck.update({
    where: {
      id,
    },
    data: {
      checkedTeacherId: teacher.id,
    },
  });
  return healthCheck;
};
