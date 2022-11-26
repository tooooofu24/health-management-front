import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
import { response } from "../../../utils/server/response";
import { StudentResponse } from "../../../types/APIResponse";
import { isAuthenticated } from "../../../utils/server/auth";
const prisma = new PrismaClient();

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

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
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
  } catch (e: any) {
    res.status(e.code || 500).json(response(e.message || "不明なエラーです"));
  }
};
