import { UserRecord } from "firebase-admin/auth";
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

export const findUser = async (firebaseUser: UserRecord): Promise<User> => {
  console.log(firebaseUser.email);

  const user = await prisma.user.findFirstOrThrow({
    where: {
      email: firebaseUser.email,
    },
  });
  return user;
};

export const isStudent = (user: User) => {
  return user.role === "Student";
};

export const isTeacher = (user: User) => {
  return user.role === "Teacher";
};