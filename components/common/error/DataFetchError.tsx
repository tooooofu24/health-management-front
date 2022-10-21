import { Flex, Img, Square, Text } from "@chakra-ui/react";
import Link from "next/link";

export const DataFetchError = () => {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      h="full"
      justifyContent="center"
    >
      <Square size="350px">
        <Img
          src="/img/not-found.png"
          alt="寂しい女の子のイラスト"
          width="full"
        />
      </Square>
      <Text>データの取得に失敗しました。</Text>
    </Flex>
  );
};
