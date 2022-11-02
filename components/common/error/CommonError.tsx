import { Box, Button, Flex, Img, Square, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type props = {
  message?: string;
  error?: string;
  image?: typeof images[number];
};

export const CommonError: FC<props> = memo(({ message, error, image }) => {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      h="full"
      justifyContent="center"
      pb={8}
    >
      <Square size="200px" maxWidth="100%">
        <Illustration image={image} />
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

const images = [
  "bath",
  "box",
  "cat",
  "flower",
  "kiwi",
  "meat",
  "money",
  "PC",
  "snow",
  "tel",
  "work",
  "worry",
] as const;
type IllustrationProps = {
  image?: typeof images[number];
};
const Illustration: FC<IllustrationProps> = ({ image }) => {
  if (!image) {
    image = images[Math.floor(Math.random() * images.length)];
  }
  return (
    <Img
      src={`/img/shigureni/${image}.png`}
      alt="shigureniのイラスト"
      width="full"
    />
  );
};
