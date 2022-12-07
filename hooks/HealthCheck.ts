import { atom, useAtom } from "jotai";
import { atomFamily, useUpdateAtom } from "jotai/utils";
import { HealthCheckResponse } from "../types/APIResponse";
import { fetcher } from "../utils/fetcher";
import { filterProps } from "../utils/server/healthCheck";
import deepEqual from "fast-deep-equal";

const versionAtom = atom(0);

const healthChecksFamilyAtom = atomFamily(
  (filter: filterProps) =>
    atom<Promise<HealthCheckResponse[]> | []>((get) => {
      get(versionAtom);
      return fetcher("/api/health-checks", filter);
    }),
  deepEqual
);

export const useHealthChecks = (filter: filterProps) => {
  const [healthChecks] = useAtom(healthChecksFamilyAtom(filter));
  const [version, setVersion] = useAtom(versionAtom);
  const refetch = () => {
    setVersion(version + 1);
  };
  return {
    healthChecks,
    refetch,
  };
};

const unreadCountAtom = atom<Promise<number> | null>(null);
unreadCountAtom.read = () => fetcher("/api/health-checks/unread-count");

export const useUnreadCount = () => {
  const [count, updateValue] = useAtom(unreadCountAtom);
  const refetch = async () => {
    updateValue(fetcher("/api/health-checks/unread-count"));
  };
  return {
    count,
    refetch,
  };
};
