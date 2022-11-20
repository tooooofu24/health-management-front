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
