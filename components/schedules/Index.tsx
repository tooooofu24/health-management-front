import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";
import { useSchedules } from "../../hooks/Schedule";
import { CommonError } from "../common/error/CommonError";
import { Tile } from "../common/Tile";
import { CalendarPlus } from "phosphor-react";
import { SchedulesTable } from "./SchedulesTable";

export const Schedule = () => {
  const { schedules, refetch } = useSchedules();
  const router = useRouter();

  useEffect(() => {
    refetch();
  }, [router]);

  return !schedules.length ? (
    <Tile>
      <CommonError message="時間割が登録されていません" />
      <Flex justifyContent="center" pb={5}>
        <Link href="/schedules/edit">
          <a>
            <Button leftIcon={<CalendarPlus />}>時間割を登録する</Button>
          </a>
        </Link>
      </Flex>
    </Tile>
  ) : (
    <Tile>
      <SchedulesTable schedules={schedules} type="index" />
    </Tile>
  );
};
