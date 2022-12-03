import { postRequest } from "../apiClient";

export type HealthCheckFormProps = {
  date: string;
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
export const registerHealthCheck = async (props: HealthCheckFormProps) => {
  await postRequest("/api/health-checks", props);
};

export const checkHealthCheck = async (id: number) => {
  await postRequest("/api/health-checks/check", { id });
};
