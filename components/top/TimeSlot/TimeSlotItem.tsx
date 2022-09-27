import { Flex, IconButton, Text } from "@chakra-ui/react";
import {
  ClockCounterClockwise,
  Plus,
  Student,
  UsersThree,
} from "phosphor-react";
import { Card } from "../../common/Card";
import Router from "next/router";

export const TimeSlotItem = () => {
  return (
    <Card _hover={{ bg: "gray.50" }} onClick={() => Router.push("/create/1")}>
      <Text fontWeight="bold" fontSize="17px">
        1年1組
      </Text>
      <Flex width="full" color="gray.500" gap="5px" pt="5px">
        <Flex alignItems="center">
          <UsersThree size={15} />
          <Text fontSize="12px">33人</Text>
        </Flex>
        <Flex alignItems="center">
          <Student size={15} />
          <Text fontSize="12px">石田京楓</Text>
        </Flex>
      </Flex>
    </Card>
  );
};
