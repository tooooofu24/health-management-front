import { useState } from "react";
import useSWR from "swr";
import { User } from "../types/User";
import { deleteRequest } from "../utils/apiClient";
import { fetcher } from "../utils/fetcher";

export const useUsers = () => {
  const { data, mutate: refetch } = useSWR(["/users"], fetcher, {
    suspense: true,
  });
  const users: User[] = data?.results;
  return { users, refetch };
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
