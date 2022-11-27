import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Role } from "@prisma/client";
import Link from "next/link";
import { FC } from "react";
import { DrawerButton } from "./DrawerButton";

type props = {
  role: Role;
};
export const NavBar: FC<props> = ({ role }) => {
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
              <Text fontWeight="bold" color="telegram.500">
                原中学校
              </Text>
            </Flex>
          </a>
        </Link>
        <DrawerButton role={role} />
      </Flex>
    </Box>
  );
};
