import { format } from "date-fns";
import { useState } from "react";
import { postRequest } from "../utils/apiClient";

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
