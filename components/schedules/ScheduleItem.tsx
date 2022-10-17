import { AspectRatio } from "@chakra-ui/react";
import { FC } from "react";
import { Schedule } from "../../types/Schedule";
import { Tooltip } from "@chakra-ui/react";
import Router from "next/router";
import { SubjectIcon } from "../common/SubjectIcon";
import { ScheduleItemContent } from "./ScheduleItemContent";

type props = {
  schedule?: Schedule;
};
export const ScheduleItem: FC<props> = ({ schedule }) => {
  if (schedule) {
    return (
      <Tooltip label="出欠を登録する" placement="top" hasArrow>
        <AspectRatio
          ratio={1}
          cursor="pointer"
          _hover={{ bg: "gray.50" }}
          rounded="lg"
          color="teal.500"
          onClick={() =>
            Router.push(
              `/attendances/create?courseId=${schedule.course.id}&period=${
                schedule.period
              }&date=${calculateDate(schedule)}`
            )
          }
        >
          <ScheduleItemContent schedule={schedule} />
        </AspectRatio>
      </Tooltip>
    );
  } else {
    return (
      <AspectRatio ratio={1}>
        <></>
      </AspectRatio>
    );
  }
};

const calculateDate = (schedule: Schedule) => {
  return new Date().toLocaleDateString().replace("/", "-").replace("/", "-");
};
