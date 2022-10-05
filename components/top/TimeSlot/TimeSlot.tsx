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
import { Card } from "../../common/Card";
import { ClassCard } from "../../common/ClassCard";
import { EmptyTimeSlotItem } from "./EmptyTimeSlotItem";
import { TimeSlotColumnHeader } from "./TimeSlotColumnHeader";
import { TimeSlotItem } from "./TimeSlotItem";

export const TimeSlot = () => {
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
              {[...Array(6)].map((v, i) => {
                return (
                  <Flex p="7.5px" key={i} flex="1">
                    {i % 2 == index % 2 ? (
                      <TimeSlotItem />
                    ) : (
                      <EmptyTimeSlotItem />
                    )}
                  </Flex>
                );
              })}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
