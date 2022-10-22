import { useState } from "react";
import { User } from "../types/User";
import { getRequest } from "../utils/apiClient";

export const useUsers = () => {
  const [users, settUsers] = useState<User[]>([]);
  const getUsers = async () => {
    const response = await getRequest("/users");
    settUsers(response.results);
  };
  return { users, getUsers };
};
