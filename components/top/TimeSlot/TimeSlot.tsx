import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  IconButton,
  Square,
  Tag,
  Text,
} from "@chakra-ui/react";
import { MusicNotes, DotsThree } from "phosphor-react";
import { FC } from "react";
import { Schedule } from "../../../types/Schedule";
import { Card } from "../../common/Card";
import { ClassCard } from "../../common/ClassCard";
import { EmptyTimeSlotItem } from "./EmptyTimeSlotItem";
import { TimeSlotColumnHeader } from "./TimeSlotColumnHeader";
import { TimeSlotItem } from "./TimeSlotItem";

type props = {
  schedules: Schedule[];
};
export const TimeSlot: FC<props> = ({ schedules }) => {
  console.log(schedules);

  return (
    <Flex width="full">
      <TimeSlotColumnHeader />
      <Flex width="full">
        {["月", "火", "水", "木", "金"].map((day, index) => {
          return (
            <Flex flexDirection="column" flex="1" key={day}>
              <Flex justifyContent="center" alignItems="center" height={50}>
                <Text textColor="gray.500">{day}</Text>
              </Flex>
              {[1, 2, 3, 4, 5, 6].map((period, i) => {
                const schedule = schedules.find(
                  (schedule) =>
                    schedule.day_ja === day && schedule.period === period
                );
                if (schedule) {
                  return (
                    <Flex p="7.5px" key={i} flex="1">
                      <TimeSlotItem schedule={schedule} />
                    </Flex>
                  );
                } else {
                  return (
                    <Flex p="7.5px" key={i} flex="1">
                      <EmptyTimeSlotItem />
                    </Flex>
                  );
                }
              })}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
