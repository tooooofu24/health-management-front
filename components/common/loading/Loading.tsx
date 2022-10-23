import { Flex, Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Flex w="full" py={20} alignItems="center" justifyContent="center">
      <Spinner size="lg" color="teal.500" />
    </Flex>
  );
};
