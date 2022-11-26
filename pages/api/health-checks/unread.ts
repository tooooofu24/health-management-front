import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
import { response } from "../../../utils/server/response";
import healthChecks from ".";
import { isAuthenticated } from "../../../utils/server/auth";
import { findTeacher } from "../../../utils/server/teacher";
import { HealthCheckResponse } from "../../../types/APIResponse";
import students from "../students";
import { Student } from "phosphor-react";
const prisma = new PrismaClient();

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data: HealthCheckResponse[] }>
) => {
  const user = await isAuthenticated(req, "Teacher");
  const teacher = await findTeacher(user);
  const healthChecks = await prisma.healthCheck.findMany({
    where: {
      checkedTeacherId: null,
      OR: [
        { nightTemp: { gte: 37.5 } },
        { morningTemp: { gte: 37.5 } },
        { cough: true },
        { stuffiness: true },
        { languor: true },
        { lessAppetite: true },
        { goHospital: true },
        {
          student: { classroomId: teacher.classroomId || undefined },
        },
        {
          student: { clubId: teacher.clubId || undefined },
        },
      ],
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
    res.status(e.code || 500).json(response(e.message || "不明なエラーです"));
  }
};
