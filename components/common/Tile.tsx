import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

export const Tile: FC<BoxProps> = (props) => {
  return (
    <Box p="16px" bg="white" borderRadius="10px" boxShadow="base" {...props}>
      {props.children}
    </Box>
  );
};
