import { User } from "./User";

export type Invitation = {
  id: string;
  email: string;
  createdBy: User;
  createdAt: string;
};
