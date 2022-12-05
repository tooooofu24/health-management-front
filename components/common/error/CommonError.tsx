import { Box, Button, Flex, Img, Square, Text } from "@chakra-ui/react";
import { FC, memo, useState } from "react";
import { Illustration } from "../Illustration";

type props = {
  message?: string;
  error?: string;
};

export const CommonError: FC<props> = memo(({ message, error }) => {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      pb={3}
    >
      <Square size="200px" maxWidth="100%">
        <Illustration />
      </Square>
      <Box width="300px" maxWidth="100%">
        {message && <Text textAlign="center">{message}</Text>}
        {error && (
          <Text textAlign="center" color="red.500">
            {error}
          </Text>
        )}
      </Box>
    </Flex>
  );
});
