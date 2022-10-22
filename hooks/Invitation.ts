import { useState } from "react";
import { Invitation } from "../types/Invitation";
import { getRequest, postRequest } from "../utils/apiClient";

export const useInvitations = () => {
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const getInvitations = async () => {
    const response = await getRequest("/invitations");
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
