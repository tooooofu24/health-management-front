import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC, ReactNode } from "react";

type props = {
  iconUrl: string;
  icon: ReactNode;
  title: string;
};
export const PageTitle: FC<props> = ({ iconUrl, icon, title }) => {
  return (
    <Flex
      fontWeight="bold"
      fontSize={20}
      textColor="teal.500"
      marginBottom="20px"
      alignItems="center"
      gap="15px"
    >
      <Link href={iconUrl}>
        <a>{icon}</a>
      </Link>
      <>{title}</>
    </Flex>
  );
};
