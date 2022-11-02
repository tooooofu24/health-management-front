import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC, memo, ReactNode } from "react";
import { isPCScreen } from "../../styles/Responsive";

type props = {
  iconUrl: string;
  icon: ReactNode;
  title: string;
  rightItem?: ReactNode;
};
export const PageTitle: FC<props> = memo(
  ({ iconUrl, icon, title, rightItem }) => {
    if (isPCScreen()) {
      return (
        <Flex
          fontWeight="bold"
          textColor="teal.500"
          marginBottom="10px"
          alignItems="center"
          gap="15px"
          height="40px"
        >
          <Box
            __css={{
              svg: {
                height: "25px",
                width: "25px",
              },
            }}
          >
            <Link href={iconUrl}>
              <a>{icon}</a>
            </Link>
          </Box>
          <Text fontSize={20}>{title}</Text>
          <Flex ml="auto">{rightItem}</Flex>
        </Flex>
      );
    } else {
      return (
        <Flex
          fontWeight="bold"
          textColor="teal.500"
          marginBottom="10px"
          alignItems="center"
          gap="10px"
          height="30px"
        >
          <Box
            __css={{
              svg: {
                height: "20px",
                width: "20px",
              },
            }}
          >
            <Link href={iconUrl}>
              <a>{icon}</a>
            </Link>
          </Box>
          <Text fontSize={16}>{title}</Text>
          <Flex ml="auto">{rightItem}</Flex>
        </Flex>
      );
    }
  }
);
