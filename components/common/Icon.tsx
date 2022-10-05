import { Img, ImgProps } from "@chakra-ui/react";
import { FC } from "react";

export const Icon: FC<ImgProps> = (props) => {
  return <Img src="/svg/girl.svg" alt="アイコン" {...props} />;
};
