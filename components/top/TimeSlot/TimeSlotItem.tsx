import { Box, Flex, Text } from "@chakra-ui/react";
import { DotsThree, Student, UsersThree } from "phosphor-react";
import { Card } from "../../common/Card";
import Router from "next/router";

export const TimeSlotItem = () => {
  return (
    <Card
      _hover={{ bg: "gray.50" }}
      px="20px"
      onClick={() => Router.push("/create/1")}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold" fontSize="17px">
          1年1組
        </Text>
        <Box color="gray.500">
          <DotsThree weight="bold" size={20} />
        </Box>
      </Flex>
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
