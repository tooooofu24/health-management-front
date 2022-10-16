import {
  AspectRatio,
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Square,
  Tag,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { Flask, X } from "phosphor-react";
import { FC } from "react";
import { Schedule } from "../../types/Schedule";
import { Tooltip } from "@chakra-ui/react";
import Router from "next/router";
import { SubjectIcon } from "../common/SubjectIcon";

type props = {
  schedule: Schedule;
};
export const ScheduleItem: FC<props> = ({ schedule }) => {
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
        <Flex height="full" position="relative">
          <Flex flexDirection="column" alignItems="center">
            <SubjectIcon
              subjectName={schedule.course.subject.name}
              size="50%"
            />
            <Text fontSize="12px">{schedule.course.subject.name}</Text>
            <Text fontWeight="bold">
              {schedule.course.classroom.grade}年
              {schedule.course.classroom.name}組
            </Text>
          </Flex>
        </Flex>
      </AspectRatio>
    </Tooltip>
  );
};

const calculateDate = (schedule: Schedule) => {
  return new Date().toLocaleDateString().replace("/", "-").replace("/", "-");
};
