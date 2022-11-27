import { Club, Teacher } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
import { response } from "../../../utils/server/response";
import { isAuthenticated } from "../../../utils/server/auth";
import { ClubResponse } from "../../../types/APIResponse";
import healthChecks from "../health-checks";
import prisma from "../../../utils/server/prisma";

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data: ClubResponse[] }>
) => {
  await isAuthenticated(req);
  const clubs = await prisma.club.findMany({
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
  res.status(200).json({ message: "success", data: clubs });
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
