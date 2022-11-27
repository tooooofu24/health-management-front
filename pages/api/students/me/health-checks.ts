import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { HealthCheckResponse } from "../../../../types/APIResponse";
import { isAuthenticated } from "../../../../utils/server/auth";
import { findStudent } from "../../../../utils/server/student";
import { response } from "../../../../utils/server/response";
import prisma from "../../../../utils/server/prisma";

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data: HealthCheckResponse[] }>
) => {
  const user = await isAuthenticated(req);
  const student = await findStudent(user);
  const { page } = req.query;
  const take = 20;
  const currentPage = page ? Number(page) : 1;
  const healthChecks = await prisma.healthCheck.findMany({
    take,
    skip: (currentPage - 1) * take,
    where: {
      studentId: student.id,
    },
    include: {
      student: true,
    },
  });
  res.status(200).json({ message: "success", data: healthChecks });
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
