import { Flex, Square, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export const TimeSlotColumnHeader = () => {
  return (
    <Flex width="50px" flexDirection="column">
      <Square size="50px"></Square>
      <TimeSlotColumnHeaderItem>1</TimeSlotColumnHeaderItem>
      <TimeSlotColumnHeaderItem>2</TimeSlotColumnHeaderItem>
      <TimeSlotColumnHeaderItem>3</TimeSlotColumnHeaderItem>
      <TimeSlotColumnHeaderItem>4</TimeSlotColumnHeaderItem>
      <TimeSlotColumnHeaderItem>5</TimeSlotColumnHeaderItem>
      <TimeSlotColumnHeaderItem>6</TimeSlotColumnHeaderItem>
    </Flex>
  );
};

const TimeSlotColumnHeaderItem = ({ children }: { children: ReactNode }) => {
  return (
    <Flex justifyContent="center" alignItems="center" flex="1">
      <Text textColor="gray.500">{children}</Text>
    </Flex>
  );
};
