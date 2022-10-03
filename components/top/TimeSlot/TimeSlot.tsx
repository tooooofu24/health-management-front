import { Box, Center, Flex, Square, Text } from "@chakra-ui/react";
import { ClassCard } from "../../common/ClassCard";
import { EmptyTimeSlotItem } from "./EmptyTimeSlotItem";
import { TimeSlotColumnHeader } from "./TimeSlotColumnHeader";

export const TimeSlot = () => {
  return (
    <Flex alignItems="stretch">
      <TimeSlotColumnHeader />
      <Flex>
        {["月", "火", "水", "木", "金"].map((day, index) => {
          return (
            <Flex flexDirection="column" flex="1" key={day}>
              <Flex justifyContent="center" alignItems="center" height={50}>
                <Text textColor="gray.500">{day}</Text>
              </Flex>
              {[...Array(6)].map((v, i) => {
                return (
                  <Flex p="7.5px" key={i}>
                    {i % 2 == index % 2 ? <ClassCard /> : <EmptyTimeSlotItem />}
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
