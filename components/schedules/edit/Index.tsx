import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSchedules } from "../../../hooks/Schedule";
import { Tile } from "../../common/Tile";
import { SchedulesTable } from "../SchedulesTable";

export const ScheduleEdit = () => {
  const { schedules, refetch } = useSchedules();
  const router = useRouter();

  useEffect(() => {
    refetch();
  }, [router]);

  return (
    <Tile>
      <SchedulesTable schedules={schedules} type="edit" />
    </Tile>
  );
};
