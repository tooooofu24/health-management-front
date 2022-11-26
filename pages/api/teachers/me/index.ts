import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { TeacherResponse } from "../../../../types/APIResponse";
import { isAuthenticated } from "../../../../utils/server/auth";
import { findStudent } from "../../../../utils/server/student";

const prisma = new PrismaClient();

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data: TeacherResponse }>
) => {
  const user = await isAuthenticated(req, "Teacher");
  const teacher = await findStudent(user);
  res.status(200).json({ message: "success", data: teacher });
};

const putHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) => {
  const user = await isAuthenticated(req, "Teacher");
  const teacher = await findStudent(user);
  await prisma.teacher.update({
    where: {
      id: teacher.id,
    },
    data: {
      name: req.body.name || undefined,
      classroomId: Number(req.body.classroomId) || undefined,
      clubId: Number(req.body.clubId) || undefined,
    },
  });
  res.status(200).json({ message: "success" });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      await getHandler(req, res);
      break;
    case "PUT":
      await putHandler(req, res);
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
