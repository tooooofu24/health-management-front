import { Text, TextProps } from "@chakra-ui/react";
import Link from "next/link";
import { FC, ReactNode } from "react";

type props = {
  href: string;
  children: ReactNode;
} & TextProps;
export const A: FC<props> = ({ href, children, ...props }) => {
  return (
    <Text color="teal.500" {...props}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </Text>
  );
};
