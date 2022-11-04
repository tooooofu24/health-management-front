import { Box, BoxProps, Flex, FlexProps } from "@chakra-ui/react";
import { FC } from "react";

export const Tile: FC<BoxProps> = (props) => {
  return (
    <Box
      p={["12px", "16px"]}
      bg="white"
      borderRadius="10px"
      boxShadow="base"
      {...props}
    >
      <Box overflow="scroll">{props.children}</Box>
    </Box>
  );
};

export const TilesWrapper: FC<FlexProps> = (props) => {
  return (
    <Flex flexDirection="column" gap="20px">
      {props.children}
    </Flex>
  );
};
