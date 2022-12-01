import type { NextApiRequest, NextApiResponse } from "next";

import { parse } from "date-fns";
import { ja } from "date-fns/locale";
import { response } from "../../utils/server/response";

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res
    .status(200)
    .json(parse("2022-12-01", "yyyy-MM-dd", new Date(), { locale: ja }));
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
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
  } catch (e: any) {
    res
      .status(Number(e.code) || 500)
      .json(response(e.message || "不明なエラーです"));
  }
};
