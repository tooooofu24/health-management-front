import { Flex, Img, Square, Text } from "@chakra-ui/react";
import { FC } from "react";

type props = {
  message?: string;
};
export const DataFetchError: FC<props> = ({ message }) => {
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
      {message && <Text color="red.500">{message}</Text>}
    </Flex>
  );
};
