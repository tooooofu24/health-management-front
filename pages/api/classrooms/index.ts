import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
import { response } from "../../../utils/server/response";
import { isAuthenticated } from "../../../utils/server/auth";
import { ClassroomResponse } from "../../../types/APIResponse";
import prisma from "../../../utils/server/prisma";

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data: ClassroomResponse[] }>
) => {
  await isAuthenticated(req);
  const classrooms = await prisma.classroom.findMany({
    include: {
      teachers: true,
      students: {
        include: {
          healthChecks: {
            where: {
              checkedTeacherId: null,
            },
          },
        },
      },
    },
  });
  res.status(200).json({ message: "success", data: classrooms });
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
