import { Img } from "@chakra-ui/react";
import { FC, memo } from "react";

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
type props = {
  image?: typeof images[number];
};
export const Illustration: FC<props> = memo(({ image }) => {
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
});
