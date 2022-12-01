import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient, Role } from "@prisma/client";
import { response } from "../../../utils/server/response";
import { StudentResponse, UserResponse } from "../../../types/APIResponse";
import { isAuthenticated } from "../../../utils/server/auth";
import prisma from "../../../utils/server/prisma";

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data: StudentResponse }>
) => {
  const user = await isAuthenticated(req);
  const { id } = req.query;
  const student = await prisma.student.findFirstOrThrow({
    where: {
      id: Number(id),
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
  await isAuthenticated(req, "Teacher");
  const { id } = req.query;
  const { name, email, clubId, classroomId, number } = req.body;
  const student = await prisma.student.update({
    where: {
      id: Number(id),
    },
    data: {
      name: String(name) || undefined,
      number: Number(number) || undefined,
      classroomId: Number(classroomId) || undefined,
      clubId: Number(clubId) || undefined,
    },
  });
  await prisma.user.update({
    where: {
      id: Number(student.userId),
    },
    data: {
      name: String(name) || undefined,
      email: String(email) || undefined,
    },
  });
  res.status(200).json({ message: "success" });
};

const deleteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) => {
  await isAuthenticated(req, "Teacher");
  const id = Number(req.query.id);
  await prisma.student.delete({
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
    res
      .status(Number(e.code) || 500)
      .json(response(e.message || "不明なエラーです"));
  }
};
