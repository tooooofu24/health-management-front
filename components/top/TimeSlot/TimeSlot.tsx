import { Box, Center, Flex, Square, Text } from "@chakra-ui/react";
import { TimeSlotColumnHeader } from "./TimeSlotColumnHeader";
import { TimeSlotItem } from "./TimeSlotItem";
import { TimeSlotRowHeader } from "./TimeSlotRowHeader";

export const TimeSlot = () => {
  return (
    <>
      <TimeSlotRowHeader />
      <Flex width="full" alignItems="stretch">
        <TimeSlotColumnHeader />
        <Flex flex="1">
          {[...Array(5)].map(() => {
            return (
              <Flex flexDirection="column" flex="1">
                {[...Array(6)].map(() => {
                  return (
                    <Flex p="7.5px">
                      <TimeSlotItem></TimeSlotItem>
                    </Flex>
                  );
                })}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};
