import type { NextApiRequest, NextApiResponse } from "next";
import { response } from "../../../utils/server/response";
import { isAuthenticated } from "../../../utils/server/auth";
import { APIError } from "../../../utils/server/error";
import { UserResponse } from "../../../types/APIResponse";

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data: UserResponse }>
) => {
  const user = await isAuthenticated(req);
  res.status(200).json({ message: "success", data: user });
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
    throw e;
  }
};
