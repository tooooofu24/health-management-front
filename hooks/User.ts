import { useState } from "react";
import { User } from "../types/User";
import { deleteRequest, getRequest } from "../utils/apiClient";

export const useUsers = () => {
  const [users, settUsers] = useState<User[]>([]);
  const getUsers = async () => {
    const response = await getRequest("/users");
    settUsers(response.results);
  };
  return { users, getUsers };
};

export const useDeleteUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const deleteUser = async (user: User) => {
    setIsLoading(true);
    await deleteRequest("/users/" + user.id).finally(() => {
      setIsLoading(false);
    });
  };
  return { isLoading, deleteUser };
};
