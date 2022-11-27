import { UserRecord } from "firebase-admin/auth";
import { PrismaClient, User } from "@prisma/client";
import prisma from "./prisma";

export const findUser = async (firebaseUser: UserRecord) => {
  const user = await prisma.user.findFirstOrThrow({
    where: {
      email: firebaseUser.email,
    },
    include: {
      students: true,
      teachers: true,
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
