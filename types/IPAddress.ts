import { User } from "./User";

export type IPAddress = {
  id: number;
  ip: string;
  label: string;
  createdAt: string;
  createdBy: User;
};
