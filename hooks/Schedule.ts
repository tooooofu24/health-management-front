import { useState } from "react";
import useSWR from "swr";
import { Day } from "../types/Day";
import { Period } from "../types/Period";
import { Schedule } from "../types/Schedule";
import { deleteRequest, getRequest, postRequest } from "../utils/apiClient";
import { fetcher } from "../utils/fetcher";

export const useSchedules = () => {
  const { data, mutate: refetch } = useSWR(["/schedules"], fetcher, {
    suspense: true,
  });
  const schedules: Schedule[] = data?.results;
  return { schedules, refetch };
};

export const useDeleteSchedule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const deleteSchedule = async (schedule: Schedule) => {
    setIsLoading(true);
    await deleteRequest("/schedules/" + schedule.id).finally(() => {
      setIsLoading(false);
    });
  };
  return { isLoading, deleteSchedule };
};

export const useCreateSchedule = () => {
  const [isLoading, setIsLoading] = useState(false);
  type props = {
    subjectId: number;
    day: Day;
    period: Period;
    classroomId: number;
  };
  const createSchedule = async (props: props) => {
    setIsLoading(true);
    await postRequest("/schedules", props).finally(() => {
      setIsLoading(false);
    });
  };
  return { isLoading, createSchedule };
};
