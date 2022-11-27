import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
import { StudentResponse } from "../../../../types/APIResponse";
import { isAuthenticated } from "../../../../utils/server/auth";
import { findStudent } from "../../../../utils/server/student";
import { response } from "../../../../utils/server/response";
const prisma = new PrismaClient();

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data: StudentResponse }>
) => {
  const user = await isAuthenticated(req);
  const student = await findStudent(user);
  res.status(200).json({ message: "success", data: student });
};

const putHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) => {
  const { clubId, classroomId, number } = req.body;
  const user = await isAuthenticated(req);
  const student = await findStudent(user);
  await prisma.student.update({
    where: {
      id: student.id,
    },
    data: {
      number: Number(number) || undefined,
      classroomId: Number(classroomId) || undefined,
      clubId: Number(clubId) || undefined,
    },
  });
  res.status(200).json({ message: "success" });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
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
  } catch (e: any) {
    res
      .status(Number(e.code) || 500)
      .json(response(e.message || "不明なエラーです"));
  }
};
