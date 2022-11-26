import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { response } from "../../utils/server/response";
import { teachers } from "../../prisma/TeacherSeed";

const prisma = new PrismaClient();

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  /* 著者リストを取得 */
  const students = await prisma.teacher.findMany({
    select: {
      name: true,
      userId: true,
      classroomId: true,
      clubId: true,
    },
  });
  res.status(200).json(students);
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      getHandler(req, res);
      break;
    default:
      res.status(405).json({
        error: {
          message: `Method ${req.method} Not Allowed`,
          statusCode: 405,
        },
      });
  }
};
