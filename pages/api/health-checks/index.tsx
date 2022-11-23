import type { NextApiRequest, NextApiResponse } from "next";
import { response } from "../../../utils/server/response";
import { isAuthenticated } from "../../../utils/server/auth";
import {
  getHealthChecks,
  registerHealthCheck,
} from "../../../utils/server/healthCheck";
import { findStudent } from "../../../utils/server/student";
import { APIError } from "../../../utils/server/error";

const getHandler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  // const user = await isAuthenticated(req);
  const students = await getHealthChecks();
  res.status(200).json(response("success", students));
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "GET":
        await getHandler(req, res);
        break;
      default:
        throw new APIError(`Method ${req.method} Not Allowed`, 405);
    }
  } catch (e: any) {
    res.status(e.code || 500).json(response(e.message || "不明なエラーです"));
  }
};
