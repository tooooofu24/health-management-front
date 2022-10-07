import { Box, BoxProps, Flex, FlexProps } from "@chakra-ui/react";
import { FC } from "react";

export const Tile: FC<BoxProps> = (props) => {
  return (
    <Box p="16px" bg="white" borderRadius="10px" boxShadow="base" {...props}>
      {props.children}
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
