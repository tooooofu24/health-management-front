import { Flex } from "@chakra-ui/react";
import { EmptyTimeSlotItemButton } from "./EmptyTimeSlotItemButton";

export const EmptyTimeSlotItem = () => {
  return (
    <Flex
      width="full"
      height="190px"
      justifyContent="center"
      alignItems="center"
      _hover={{ button: { color: "gray.400" } }}
    >
      <EmptyTimeSlotItemButton />
    </Flex>
  );
};
