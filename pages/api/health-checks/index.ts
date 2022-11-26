import type { NextApiRequest, NextApiResponse } from "next";
import { response } from "../../../utils/server/response";
import { isAuthenticated } from "../../../utils/server/auth";
import {
  getHealthChecks,
  registerHealthCheck,
} from "../../../utils/server/healthCheck";
import { APIError } from "../../../utils/server/error";
import { findStudent } from "../../../utils/server/student";
import { PrismaClient } from "@prisma/client";
import { HealthCheckResponse } from "../../../types/APIResponse";

const prisma = new PrismaClient();

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data: HealthCheckResponse[] }>
) => {
  const user = await isAuthenticated(req, "Teacher");
  const { date, classroomId, studentId, clubId, page, isUnread, isDanger } =
    req.query;
  const take = 20;
  const currentPage = page ? Number(page) : 1;
  const healthChecks = await prisma.healthCheck.findMany({
    take,
    skip: (currentPage - 1) * take,
    where: {
      studentId: Number(studentId) || undefined,
      checkedTeacherId: Boolean(Number(isUnread)) ? null : undefined,
      OR: Boolean(Number(isDanger))
        ? [
            { nightTemp: { gte: 37.5 } },
            { morningTemp: { gte: 37.5 } },
            { cough: true },
            { stuffiness: true },
            { languor: true },
            { lessAppetite: true },
            { goHospital: true },
          ]
        : undefined,
      student: {
        classroomId: Number(classroomId) || undefined,
        clubId: Number(clubId) || undefined,
      },
    },
    include: {
      student: true,
    },
  });
  res.status(200).json({ message: "success", data: healthChecks });
};

const postHandler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const user = await isAuthenticated(req);
  const student = await findStudent(user);
  await registerHealthCheck(req, student);
  res.status(200).json(response("success"));
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "GET":
        await getHandler(req, res);
        break;
      case "POST":
        await postHandler(req, res);
        break;
      default:
        throw new APIError(`Method ${req.method} Not Allowed`, 405);
    }
  } catch (e: any) {
    res.status(e.code || 500).json(response(e.message || "不明なエラーです"));
  }
};
