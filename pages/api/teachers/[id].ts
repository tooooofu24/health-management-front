import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
import { response } from "../../../utils/server/response";
import { TeacherResponse } from "../../../types/APIResponse";
const prisma = new PrismaClient();

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data: TeacherResponse }>
) => {
  const id: number = Number(req.query.id);
  const teacher = await prisma.teacher.findFirstOrThrow({
    where: {
      id: id,
    },
    include: {
      user: true,
      classroom: true,
      club: true,
    },
  });
  res.status(200).json({ message: "success", data: teacher });
};

const putHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) => {
  const id = Number(req.query.id);
  const teacher = await prisma.teacher.update({
    where: {
      id: id,
    },
    data: {
      name: req.body.name,
      classroomId: Number(req.body.classroomId),
      clubId: Number(req.body.clubId),
    },
  });
  res.status(200).json({ message: "success" });
};

const deleteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) => {
  const id = Number(req.query.id);
  const teacher = await prisma.teacher.delete({
    where: {
      id: id,
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
      case "DELETE":
        await deleteHandler(req, res);
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
