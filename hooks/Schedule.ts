import { useState } from "react";
import { Day } from "../types/Day";
import { Period } from "../types/Period";
import { Schedule } from "../types/Schedule";
import { getBearerToken } from "../utils/auth";

export const useSchedules = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const getSchedules = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/schedules",
      {
        headers: {
          Authorization: "Bearer " + getBearerToken(),
        },
      }
    );
    const json = await res.json();
    setSchedules(json.results);
  };
  return { schedules, getSchedules };
};

export const useDeleteSchedule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const deleteSchedule = async (schedule: Schedule) => {
    setIsLoading(true);
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/schedules/" + schedule.id,
      {
        headers: {
          Authorization: "Bearer " + getBearerToken(),
        },
        method: "DELETE",
      }
    );
    setIsLoading(false);
  };
  return { isLoading, deleteSchedule };
};

export const useCreateSchedule = () => {
  const [isLoading, setIsLoading] = useState(true);
  type props = {
    subjectId: number;
    day: Day;
    period: Period;
    classroomId: number;
  };
  const createSchedule = async (props: props) => {
    setIsLoading(true);
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/schedules/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getBearerToken(),
        },
        body: JSON.stringify(props),
      }
    );
    setIsLoading(false);
    const json = await res.json();
  };
  return { isLoading, createSchedule };
};
