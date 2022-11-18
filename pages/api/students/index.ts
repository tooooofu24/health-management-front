import { Student } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Student[]>
) => {
  /* 著者リストを取得 */
  const students = await prisma.student.findMany();
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
