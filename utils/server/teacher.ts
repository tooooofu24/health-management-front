import { PrismaClient, User } from "@prisma/client";
import prisma from "./prisma";

export const findTeacher = async (user: User) => {
  const teacher = await prisma.teacher.findFirstOrThrow({
    where: {
      userId: user.id,
    },
    include: {
      user: true,
      club: true,
      classroom: true,
    },
  });
  return teacher;
};
