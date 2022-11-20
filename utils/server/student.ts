import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const findStudent = async (user: User) => {
  const student = await prisma.student.findFirstOrThrow({
    where: {
      userId: user.id,
    },
  });
  return student;
};
