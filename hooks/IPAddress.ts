import { useState } from "react";
import { IPAddress } from "../types/IPAddress";
import { getRequest, postRequest } from "../utils/apiClient";

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

export const useCreateIPAddress = () => {
  const [isLoading, setIsLoading] = useState(false);
  type props = {
    ip: string;
    label: string;
  };
  const createIPAddress = async (props: props) => {
    setIsLoading(true);
    await postRequest("/ip-addresses", props).finally(() => {
      setIsLoading(false);
    });
  };
  return { isLoading, createIPAddress };
};
