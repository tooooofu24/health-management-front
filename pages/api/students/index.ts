import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
import { response } from "../../../utils/server/response";
import { StudentResponse } from "../../../types/APIResponse";
import { isAuthenticated } from "../../../utils/server/auth";
import classrooms from "../classrooms";
import prisma from "../../../utils/server/prisma";

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data: StudentResponse[] }>
) => {
  const user = await isAuthenticated(req, "Teacher");
  const { classroomId, clubId, name, email } = req.query;
  /* 著者リストを取得 */
  const students = await prisma.student.findMany({
    where: {
      classroomId: Number(classroomId) || undefined,
      clubId: Number(clubId) || undefined,
      name: { contains: String(name || "") },
      user: {
        email: { contains: String(email || "") },
      },
    },
    include: {
      classroom: true,
      user: true,
      club: true,
    },
  });
  res.status(200).json({ message: "success", data: students });
};

const postHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) => {
  const { name, email, clubId, classroomId, number } = req.body;
  const existedUser = await prisma.user.findFirst({
    where: {
      email: String(email),
    },
  });
  if (existedUser) {
    throw Error("メールアドレスが既に登録されています");
  }

  const user = await prisma.user.create({
    data: {
      name: String(name),
      email: String(email),
      role: "Student",
    },
  });
  const student = await prisma.student.create({
    data: {
      name: String(name),
      clubId: Number(clubId),
      classroomId: Number(classroomId),
      number: Number(number),
      userId: Number(user.id),
    },
  });
  res.status(200).json({ message: "success" });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "GET":
        await getHandler(req, res);
        break;
      case "POST":
        await postHandler(req, res);
        break;
      default:
        res.status(405).json({
          error: {
            message: `Method ${req.method} Not Allowed`,
            statusCode: 405,
          },
        });
    }
  } catch (e: any) {
    res
      .status(Number(e.code) || 500)
      .json(response(e.message || "不明なエラーです"));
  }
};
