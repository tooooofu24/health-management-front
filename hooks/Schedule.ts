import { useState } from "react";
import { Day } from "../types/Day";
import { Period } from "../types/Period";
import { Schedule } from "../types/Schedule";
import { deleteRequest, getRequest, postRequest } from "../utils/apiClient";

export const useSchedules = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const getSchedules = async () => {
    const response = await getRequest("/schedules");
    setSchedules(response.results);
  };
  return { schedules, getSchedules };
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
