import { Box, Flex, Text } from "@chakra-ui/react";
import { FaceMask } from "phosphor-react";

export const Logo = () => {
  return (
    <Box>
      <Flex
        alignItems="center"
        px="16px"
        gap="15px"
        height="75px"
        color="telegram.500"
      >
        <FaceMask size={30} />
        <Text fontWeight="bold" fontSize="20px">
          原中学校
        </Text>
      </Flex>
    </Box>
  );
};
