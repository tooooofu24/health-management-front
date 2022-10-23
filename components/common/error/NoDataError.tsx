import { Flex, Img, Square, Text } from "@chakra-ui/react";
import { FC } from "react";

export const NoDataError: FC = () => {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      h="full"
      justifyContent="center"
    >
      <Square size="350px" maxWidth="100%">
        <Img
          src="/img/not-found.png"
          alt="寂しい女の子のイラスト"
          width="full"
        />
      </Square>
      <Text>データが存在しません。</Text>
    </Flex>
  );
};
