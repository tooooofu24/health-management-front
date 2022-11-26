import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
import { response } from "../../../utils/server/response";
import { StudentResponse } from "../../../types/APIResponse";
import { isAuthenticated } from "../../../utils/server/auth";
const prisma = new PrismaClient();

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data: StudentResponse }>
) => {
  const user = await isAuthenticated(req);
  const id: number = Number(req.query.id);
  const student = await prisma.student.findFirstOrThrow({
    where: {
      id: id,
    },
    include: {
      classroom: true,
      user: true,
      club: true,
    },
  });
  res.status(200).json({ message: "success", data: student });
};

const putHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) => {
  const user = await isAuthenticated(req, "Teacher");
  const id = Number(req.query.id);
  const student = await prisma.student.update({
    where: {
      id: id,
    },
    data: {
      name: req.body.name || undefined,
      number: Number(req.body.number) || undefined,
      classroomId: Number(req.body.classroomId) || undefined,
      clubId: Number(req.body.clubId) || undefined,
    },
  });
  res.status(200).json({ message: "success" });
};

const deleteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) => {
  const user = await isAuthenticated(req, "Teacher");
  const id = Number(req.query.id);
  const student = await prisma.student.delete({
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
