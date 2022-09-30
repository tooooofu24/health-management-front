import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { DrawerButton } from "../navbar/DrawerButton";

export const NavBar = () => {
  return (
    <Box bg="teal.500" w="100%" p={2} color="white" position="fixed">
      <Flex alignItems="center" gap={2}>
        <DrawerButton />
        <Text fontWeight="bold">学校の成績管理システム</Text>
      </Flex>
    </Box>
  );
};
