import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
import { response } from "../../../utils/server/response";
import healthChecks from ".";
import { isAuthenticated } from "../../../utils/server/auth";
import { findTeacher } from "../../../utils/server/teacher";
const prisma = new PrismaClient();

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await isAuthenticated(req, "Teacher");
  const teacher = await findTeacher(user);
  const healthChecks = await prisma.healthCheck.findMany({
    where: {
      checkedTeacherId: null,
      student: {
        OR: [
          { classroomId: teacher.classroomId || undefined },
          { clubId: teacher.clubId || undefined },
        ],
      },
    },
    include: {
      student: true,
    },
  });
  res.status(200).json(response("success", healthChecks));
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
