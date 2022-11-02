import { useState } from "react";
import { Day } from "../types/Day";
import { Period } from "../types/Period";
import { Schedule } from "../types/Schedule";
import { deleteRequest, getRequest, postRequest } from "../utils/apiClient";

export const useSchedules = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getSchedules = async () => {
    setIsLoading(true);
    const response = await getRequest("/schedules").finally(() => {
      setIsLoading(false);
    });
    setSchedules(response.results);
  };
  return { schedules, getSchedules, isLoading };
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
