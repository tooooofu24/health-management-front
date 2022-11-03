import { useEffect, useState } from "react";
import { IPAddress } from "../types/IPAddress";
import { deleteRequest, getRequest, postRequest } from "../utils/apiClient";

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

export const useDeleteIPAddress = () => {
  const [isLoading, setIsLoading] = useState(false);
  const deleteIPAddress = async (IPAddress: IPAddress) => {
    setIsLoading(true);
    await deleteRequest("/ip-addresses/" + IPAddress.id).finally(() => {
      setIsLoading(false);
    });
  };
  return { isLoading, deleteIPAddress };
};

export const useCurrentIP = () => {
  const [currentIP, setCurrentIP] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchIp();
  }, []);
  const fetchIp = async () => {
    setIsLoading(true);
    const url = "https://ipinfo.io?token=c275321cf4d83b";
    const res = await fetch(url).finally(() => {
      setIsLoading(false);
    });
    const json = await res.json();
    setCurrentIP(json.ip);
  };
  return { currentIP, isLoading };
};
