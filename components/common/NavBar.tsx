import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { DrawerButton } from "../navbar/DrawerButton";

export const NavBar = () => {
  return (
    <Flex
      bg="teal.500"
      w="100%"
      px="20px"
      color="white"
      position="fixed"
      zIndex="10"
      height="50px"
      alignItems="center"
    >
      <Flex alignItems="center" gap={2}>
        {/* <DrawerButton /> */}
        <Text fontWeight="bold">学校の成績管理システム</Text>
      </Flex>
    </Flex>
  );
};
