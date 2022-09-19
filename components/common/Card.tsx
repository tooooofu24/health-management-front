import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

export const Card: FC<BoxProps> = (props) => {
  return (
    <Box
      p="10px"
      border="1px"
      borderColor="gray.300"
      borderRadius="10px"
      {...props}
    >
      {props.children}
    </Box>
  );
};
