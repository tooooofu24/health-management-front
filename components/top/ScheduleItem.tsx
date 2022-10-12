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
        onClick={() => Router.push("/attendances/create")}
      >
        <Flex height="full" position="relative">
          <Flex flexDirection="column" gap="5px" alignItems="center">
            <Flask size="50%" />
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
