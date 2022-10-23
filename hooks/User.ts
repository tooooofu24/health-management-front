import { useState } from "react";
import { User } from "../types/User";
import { deleteRequest, getRequest } from "../utils/apiClient";

export const useUsers = () => {
  const [users, settUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getUsers = async () => {
    setIsLoading(true);
    const response = await getRequest("/users").finally(() => {
      setIsLoading(false);
    });
    settUsers(response.results);
  };
  return { users, getUsers, isLoading };
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
