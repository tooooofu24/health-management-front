import { useEffect, useState } from "react";
import useSWR from "swr";
import { IPAddress } from "../types/IPAddress";
import { deleteRequest, getRequest, postRequest } from "../utils/apiClient";
import { fetcher } from "../utils/fetcher";

export const useIPAddresses = () => {
  const { data, mutate: refetch } = useSWR(["/ip-addresses"], fetcher, {
    suspense: true,
  });
  const IPAddresses: IPAddress[] = data?.results;
  return { IPAddresses, refetch };
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
  const url = "https://ipinfo.io?token=c275321cf4d83b";
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, mutate: refetch } = useSWR([url], fetcher, {
    suspense: true,
  });
  const currentIP = data?.ip;
  return { currentIP, refetch };
};
