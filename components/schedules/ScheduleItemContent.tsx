import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Schedule } from "../../types/Schedule";
import { SubjectIcon } from "../common/SubjectIcon";

type props = {
  schedule: Schedule;
};
export const ScheduleItemContent: FC<props> = ({ schedule }) => {
  return (
    <Flex height="full" position="relative">
      <Flex flexDirection="column" alignItems="center">
        <SubjectIcon subjectName={schedule.course.subject.name} size="50%" />
        <Text fontSize="12px">{schedule.course.subject.name}</Text>
        <Text fontWeight="bold">
          {schedule.course.classroom.grade}年{schedule.course.classroom.name}組
        </Text>
      </Flex>
    </Flex>
  );
};
