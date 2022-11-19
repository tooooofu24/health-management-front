import { Box, BoxProps, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Logo: FC<BoxProps> = (props) => {
  return (
    <Box>
      <Flex
        alignItems="center"
        px="16px"
        gap="20px"
        height="75px"
        color="telegram.500"
        {...props}
      >
        <Text fontWeight="bold" fontSize="18px">
          原中学校
          <br />
          健康管理システム
        </Text>
      </Flex>
    </Box>
  );
};
