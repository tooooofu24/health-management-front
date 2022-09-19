import { Flex, Square, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export const TimeSlotRowHeader = () => {
  return (
    <Flex>
      <Square size="50px"></Square>
      <TimeSlotRowHeaderItem>月</TimeSlotRowHeaderItem>
      <TimeSlotRowHeaderItem>火</TimeSlotRowHeaderItem>
      <TimeSlotRowHeaderItem>水</TimeSlotRowHeaderItem>
      <TimeSlotRowHeaderItem>木</TimeSlotRowHeaderItem>
      <TimeSlotRowHeaderItem>金</TimeSlotRowHeaderItem>
    </Flex>
  );
};

const TimeSlotRowHeaderItem = ({ children }: { children: ReactNode }) => {
  return (
    <Flex flex="1" justifyContent="center" alignItems="center">
      <Text textColor="gray.500">{children}</Text>
    </Flex>
  );
};
