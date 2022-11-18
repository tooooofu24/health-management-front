import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { DrawerButton } from "./DrawerButton";
import { Icon } from "../Icon";

export const NavBar = () => {
  return (
    <Box
      w="100%"
      px="20px"
      position="fixed"
      zIndex="10"
      boxShadow="base"
      bg="#fff"
    >
      <Flex height="50px" alignItems="center" justifyContent="space-between">
        <Link href="/">
          <a>
            <Flex alignItems="center" gap="15px">
              <Icon width={30} height={30} />
              <Text fontWeight="bold" color="telegram.500">
                原中学校
              </Text>
            </Flex>
          </a>
        </Link>
        <DrawerButton />
      </Flex>
    </Box>
  );
};
