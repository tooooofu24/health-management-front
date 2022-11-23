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

type filterProps = {
  date?: string;
  classroomId?: number;
  studentId?: number;
  clubId?: number;
};
export const getHealthChecks = async (
  props: filterProps
): Promise<HealthCheck[]> => {
  const { date, classroomId, studentId, clubId } = props;
  const healthChecks = await prisma.healthCheck.findMany({
    take: 30,
    where: {
      studentId,
      student: {
        classroomId,
        clubId,
      },
    },
  });
  return healthChecks;
};
