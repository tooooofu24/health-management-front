import { Flex, FlexProps, Spinner } from "@chakra-ui/react";
import { FC } from "react";

export const Loading: FC<FlexProps> = (props) => {
  return (
    <Flex
      w="full"
      h="10rem"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <Spinner size="lg" color="teal.500" />
    </Flex>
  );
};
