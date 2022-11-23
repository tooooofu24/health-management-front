import type { NextApiRequest, NextApiResponse } from "next";
import { response } from "../../../utils/server/response";
import { isAuthenticated } from "../../../utils/server/auth";
import {
  getHealthChecks,
  registerHealthCheck,
} from "../../../utils/server/healthCheck";
import { APIError } from "../../../utils/server/error";
import { findStudent } from "../../../utils/server/student";

const getHandler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  await isAuthenticated(req);
  const healthChecks = await getHealthChecks(req.query);
  res.status(200).json(response("success", healthChecks));
};

const postHandler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const user = await isAuthenticated(req, "Student");
  const student = await findStudent(user);
  await registerHealthCheck(req, student);
  res.status(200).json(response("success"));
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "GET":
        await getHandler(req, res);
        break;
      case "POST":
        await postHandler(req, res);
        break;
      default:
        throw new APIError(`Method ${req.method} Not Allowed`, 405);
    }
  } catch (e: any) {
    res.status(e.code || 500).json(response(e.message || "不明なエラーです"));
  }
};
