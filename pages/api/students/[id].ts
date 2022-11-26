import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
import { response } from "../../../utils/server/response";
const prisma = new PrismaClient();

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id: number = Number(req.query.id);
  const student = await prisma.student.findFirst({
    where: {
      id: id,
    },
  });
  res.status(200).json(student);
};

const putHandler = async (req: NextApiRequest, res: NextApiResponse) => {
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
  res.status(200).json(response("success", student));
};

const deleteHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = Number(req.query.id);
  const student = await prisma.student.delete({
    where: {
      id: id,
    },
  });
  res.status(200).json(response("success", student));
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
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
};
