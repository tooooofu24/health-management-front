import {
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
import Router from "next/router";
import { DotsThree, Flask, X } from "phosphor-react";
import { FC } from "react";
import { Schedule } from "../../../types/Schedule";
import { Card } from "../../common/Card";
import { TimeSlotItemButton } from "./TimeSlotItemButton";

type props = {
  schedule: Schedule;
};
export const TimeSlotItem: FC<props> = ({ schedule }) => {
  return (
    <Link href="/attendances/create">
      <a style={{ width: "100%" }}>
        <Card height="190px" position="relative">
          <Box position="absolute" right="0" top="0" p="1px">
            <IconButton
              aria-label="削除"
              icon={<X size={20} />}
              variant="ghost"
            />
          </Box>
          <Flex flexDirection="column" gap="15px" height="full">
            <Square flex="1">
              <Flex
                color="teal.500"
                alignItems="center"
                justifyContent="center"
              >
                <Flask size={100} />
              </Flex>
            </Square>
            <Flex alignItems="center" gap="10px">
              <Text fontWeight="bold">
                {schedule.course.classroom.grade}年
                {schedule.course.classroom.name}組
              </Text>
              <Tag>{schedule.course.subject.name}</Tag>
            </Flex>
          </Flex>
        </Card>
      </a>
    </Link>
  );
};
