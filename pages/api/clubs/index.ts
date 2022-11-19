import { Club } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Club[]>
) => {
  /* 著者リストを取得 */
  const clubs = await prisma.club.findMany();
  res.status(200).json(clubs);
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      getHandler(req, res);
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
