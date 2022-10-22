import { useState } from "react";
import { Invitation } from "../types/Invitation";
import { getRequest } from "../utils/apiClient";

export const useInvitations = () => {
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const getInvitations = async () => {
    const response = await getRequest("/invitations");
    setInvitations(response.results);
  };
  return { invitations, getInvitations };
};
