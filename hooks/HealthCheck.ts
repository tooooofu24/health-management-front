import { atom, useAtom } from "jotai";
import { HealthCheckResponse } from "../types/APIResponse";
import { fetcher } from "../utils/fetcher";
import { filterProps } from "../utils/server/healthCheck";

const healthChecksAtom = atom<Promise<HealthCheckResponse[]> | []>([]);

healthChecksAtom.read = () => fetcher("/api/health-checks");

export const useHealthChecks = (props: filterProps) => {
  const [healthChecks, updateValue] = useAtom(healthChecksAtom);
  const refetch = () => {
    updateValue(fetcher("/api/health-checks", props));
  };
  return {
    healthChecks,
    refetch,
  };
};
