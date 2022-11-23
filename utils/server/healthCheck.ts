import { HealthCheck, PrismaClient, Student, User } from "@prisma/client";
import { NextApiRequest } from "next";

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
};
export const getHealthChecks = async (
  props: filterProps
): Promise<(HealthCheck & { student: Student })[]> => {
  const { date, classroomId, studentId, clubId } = props;
  const healthChecks = await prisma.healthCheck.findMany({
    take: 20,
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
