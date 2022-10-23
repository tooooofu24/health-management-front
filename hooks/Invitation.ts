import { useState } from "react";
import { Invitation } from "../types/Invitation";
import { deleteRequest, getRequest, postRequest } from "../utils/apiClient";

export const useInvitations = () => {
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const getInvitations = async () => {
    const response = await getRequest("/invitations", { accept: 0 });
    setInvitations(response.results);
  };
  return { invitations, getInvitations };
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
