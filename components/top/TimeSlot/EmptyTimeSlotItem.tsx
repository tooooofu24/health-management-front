import { Flex } from "@chakra-ui/react";
import { EmptyTimeSlotItemButton } from "./EmptyTimeSlotItemButton";

export const EmptyTimeSlotItem = () => {
  return (
    <Flex
      width="160px"
      height="85px"
      justifyContent="center"
      alignItems="center"
      _hover={{ button: { color: "teal.500" } }}
    >
      <EmptyTimeSlotItemButton />
    </Flex>
  );
};
