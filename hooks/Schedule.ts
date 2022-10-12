import { useEffect, useState } from "react";
import { Schedule } from "../types/Schedule";

export const useSchedules = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const getSchedules = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/schedules"
    );
    const json = await res.json();
    setSchedules(json.results);
  };
  useEffect(() => {
    getSchedules();
  }, []);
  return { schedules, getSchedules };
};
