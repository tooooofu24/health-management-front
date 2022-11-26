import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

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
