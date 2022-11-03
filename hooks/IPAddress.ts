import { useState } from "react";
import { IPAddress } from "../types/IPAddress";
import { getRequest } from "../utils/apiClient";

export const useIPAddresses = () => {
  const [IPAddresses, setIPAddresses] = useState<IPAddress[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getIPAddresses = async () => {
    setIsLoading(true);
    const response = await getRequest("/ip-addresses").finally(() => {
      setIsLoading(false);
    });
    setIPAddresses(response.results);
  };
  return { IPAddresses, getIPAddresses, isLoading };
};
