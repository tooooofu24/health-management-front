import { PrismaClient, User } from "@prisma/client";
import prisma from "./prisma";

export const findStudent = async (user: User) => {
  const student = await prisma.student.findFirstOrThrow({
    where: {
      userId: user.id,
    },
    include: {
      user: true,
      classroom: true,
      club: true,
    },
  });
  return student;
};
