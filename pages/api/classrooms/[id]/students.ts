import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { add, addDays } from "date-fns";
import { StudentResponse } from "../../../../types/APIResponse";
import { response } from "../../../../utils/server/response";
import { isAuthenticated } from "../../../../utils/server/auth";
import prisma from "../../../../utils/server/prisma";

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data: StudentResponse[] }>
) => {
  const user = await isAuthenticated(req);
  const { id, date } = req.query;
  const students = await prisma.student.findMany({
    where: {
      classroomId: Number(id) || undefined,
    },
    include: {
      user: true,
      classroom: true,
      club: true,
      healthChecks: {
        where: {
          date: date ? String(date) : undefined,
        },
      },
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
    res
      .status(Number(e.code) || 500)
      .json(response(e.message || "不明なエラーです"));
  }
};
