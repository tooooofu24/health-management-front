import { Box, Center, Flex, Square, Text } from "@chakra-ui/react";
import { EmptyTimeSlotItem } from "./EmptyTimeSlotItem";
import { TimeSlotColumnHeader } from "./TimeSlotColumnHeader";
import { TimeSlotItem } from "./TimeSlotItem";

export const TimeSlot = () => {
  return (
    <Flex alignItems="stretch">
      <TimeSlotColumnHeader />
      <Flex>
        {["月", "火", "水", "木", "金"].map((day) => {
          return (
            <Flex flexDirection="column" flex="1" key={day}>
              <Flex justifyContent="center" alignItems="center" height={50}>
                <Text textColor="gray.500">{day}</Text>
              </Flex>
              {[...Array(6)].map((v, i) => {
                return (
                  <Flex p="7.5px" key={i}>
                    {i % 2 == 0 ? <TimeSlotItem /> : <EmptyTimeSlotItem />}
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
