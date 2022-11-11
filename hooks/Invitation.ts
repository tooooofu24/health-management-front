import { useState } from "react";
import useSWR from "swr";
import { Invitation } from "../types/Invitation";
import { deleteRequest, getRequest, postRequest } from "../utils/apiClient";
import { fetcher } from "../utils/fetcher";

export const useInvitations = () => {
  const { data, mutate: refetch } = useSWR(
    ["/invitations", { accept: 0 }],
    fetcher,
    {
      suspense: true,
    }
  );
  const invitations: Invitation[] = data?.results;
  return { invitations, refetch };
};

export const useCreateInvitation = () => {
  const [isLoading, setIsLoading] = useState(false);
  type props = {
    email: string;
  };
  const createInvitation = async (props: props) => {
    setIsLoading(true);
    await postRequest("/invitations", props).finally(() => {
      setIsLoading(false);
    });
  };
  return { isLoading, createInvitation };
};

export const useDeleteInvitation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const deleteInvitation = async (invitation: Invitation) => {
    setIsLoading(true);
    await deleteRequest("/invitations/" + invitation.id).finally(() => {
      setIsLoading(false);
    });
  };
  return { isLoading, deleteInvitation };
};
