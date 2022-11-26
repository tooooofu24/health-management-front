import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
import { response } from "../../../utils/server/response";
import { StudentResponse } from "../../../types/APIResponse";
const prisma = new PrismaClient();

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data: StudentResponse[] }>
) => {
  /* 著者リストを取得 */
  const students = await prisma.student.findMany({
    include: {
      classroom: true,
      user: true,
      club: true,
    },
  });
  res.status(200).json({ message: "success", data: students });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      await getHandler(req, res);
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
