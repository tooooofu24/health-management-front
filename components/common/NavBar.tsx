import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <Box bg="teal.500" w="100%" p={4} color="white">
      <Text fontWeight={"bold"}>学校の成績管理システム</Text>
    </Box>
  );
};
