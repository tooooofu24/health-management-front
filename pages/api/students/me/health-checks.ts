import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { HealthCheckResponse } from "../../../../types/APIResponse";
import { isAuthenticated } from "../../../../utils/server/auth";
import { findStudent } from "../../../../utils/server/student";

const prisma = new PrismaClient();

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data: HealthCheckResponse[] }>
) => {
  const user = await isAuthenticated(req);
  const student = await findStudent(user);
  const healthChecks = await prisma.healthCheck.findMany({
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
