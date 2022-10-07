import { Box, Flex, Text } from "@chakra-ui/react";
import { DotsThree, Student, UsersThree } from "phosphor-react";
import { Card } from "./Card";
import Router from "next/router";
import { ClassCardButton } from "./ClassCardButton";
import Link from "next/link";

export const ClassCard = () => {
  return (
    <Link href="/attendances/create">
      <a>
        <Card width="160px" height="85px">
          <Flex
            justifyContent="space-between"
            flexDirection="column"
            height="full"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold" fontSize="17px">
                1年1組
              </Text>
              <ClassCardButton />
            </Flex>
            <Flex width="full" color="gray.500" gap="5px">
              <Flex alignItems="center">
                <UsersThree size={15} />
                <Text fontSize="12px">33人</Text>
              </Flex>
              <Flex alignItems="center">
                <Student size={15} />
                <Text fontSize="12px">石田京楓</Text>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </a>
    </Link>
  );
};
