import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { CaretLeft } from "phosphor-react";
import Router from "next/router";
import { FC, ReactNode } from "react";

type props = {
  backURL?: string;
  title: string | ReactNode;
};
export const PageTitle: FC<props> = ({ backURL, title }) => {
  return (
    <Flex
      fontWeight="bold"
      fontSize={20}
      textColor="teal.500"
      marginBottom="20px"
      alignItems="center"
      gap="10px"
    >
      {backURL && (
        <Link href={backURL}>
          <a>
            <CaretLeft size={25} />
          </a>
        </Link>
      )}
      <Text>{title}</Text>
    </Flex>
  );
};
