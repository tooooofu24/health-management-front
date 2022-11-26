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

const prisma = new PrismaClient();

const getHandler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  // await isAuthenticated(req);
  const { date, classroomId, studentId, clubId, page, isUnread, isDanger } =
    req.query;
  const take = 20;
  const currentPage = page ? Number(page) : 1;
  const healthChecks = await prisma.healthCheck.findMany({
    take,
    skip: (currentPage - 1) * take,
    where: {
      studentId: Number(studentId) || undefined,
      checkedTeacherId: Boolean(isUnread) ? null : undefined,
      OR: [
        { nightTemp: Boolean(isDanger) ? { gte: 37.5 } : undefined },
        { morningTemp: Boolean(isDanger) ? { gte: 37.5 } : undefined },
        { cough: Boolean(isDanger) ? true : undefined },
        { stuffiness: Boolean(isDanger) ? true : undefined },
        { languor: Boolean(isDanger) ? true : undefined },
        { lessAppetite: Boolean(isDanger) ? true : undefined },
        { goHospital: Boolean(isDanger) ? true : undefined },
      ],
      student: {
        classroomId: Number(classroomId) || undefined,
        clubId: Number(clubId) || undefined,
      },
    },
    include: {
      student: true,
    },
  });

  res.status(200).json(response("success", healthChecks));

  // res.status(200).json(response("success", healthChecks));
};

// nightTemp        Float
// morningTemp      Float
// cough            Boolean // 咳
// stuffiness       Boolean // 息苦しさ
// languor          Boolean // だるさ
// lessAppetite     Boolean // 食欲の減退
// goHospital       Boolean // 通院
const postHandler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const user = await isAuthenticated(req, "Student");
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
