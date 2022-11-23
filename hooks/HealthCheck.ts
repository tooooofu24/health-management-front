import { HealthCheck, Student } from "@prisma/client";
import { useState } from "react";
import useSWR from "swr";
import { postRequest } from "../utils/apiClient";
import { fetcher } from "../utils/fetcher";
import { filterProps } from "../utils/server/healthCheck";

export type HealthCheckFormProps = {
  date: Date;
  bedTime: Date;
  wakeUpTime: Date;
  nightTemp: number;
  morningTemp: number;
  cough: boolean; // 咳
  stuffiness: boolean; // 息苦しさ
  languor: boolean; // だるさ
  lessAppetite: boolean; // 食欲の減退
  goHospital: boolean; // 通院
  comment: string;
};
export const useRegisterHealthCheck = () => {
  const [isLoading, setIsLoading] = useState(false);

  const registerHealthCheck = async (props: HealthCheckFormProps) => {
    setIsLoading(true);
    await postRequest("/api/health-checks", props).finally(() => {
      setIsLoading(false);
    });
  };
  return { isLoading, registerHealthCheck };
};

export const useHealthChecks = (props: filterProps) => {
  const { data, mutate: refetch } = useSWR(
    ["/api/health-checks", props],
    fetcher,
    {
      suspense: true,
    }
  );
  const healthChecks: (HealthCheck & { student: Student })[] = data.data;
  return {
    healthChecks,
    refetch,
  };
};
