import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { CalendarCheck } from "phosphor-react";
import { useEffect } from "react";
import { PageTitle } from "../components/common/PageTitle";
import { Tile } from "../components/common/Tile";
import { TimeSlot } from "../components/top/TimeSlot/TimeSlot";
import { Schedule } from "../types/Schedule";

const TopPage: NextPage = () => {
  const schedules: Schedule[] = [];
  return (
    <>
      <PageTitle
        title="時間割"
        icon={<CalendarCheck size={25} />}
        iconUrl="/"
      />
      <Tile>
        <Flex justifyContent="center">
          <TimeSlot schedules={schedules} />
        </Flex>
      </Tile>
    </>
  );
};

export default TopPage;
