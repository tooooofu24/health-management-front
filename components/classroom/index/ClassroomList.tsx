import { Box, Flex, Text } from "@chakra-ui/react";
import { ClassCard } from "../../common/ClassCard";

export const ClassroomList = () => {
  return (
    <Flex flexDirection="column" gap="30px" p="20px">
      <Flex flexDirection="column" gap="10px">
        <Text fontWeight="bold" color="teal.500">
          1年生
        </Text>
        <Flex flexWrap="wrap" gap="20px">
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="10px">
        <Text fontWeight="bold" color="teal.500">
          2年生
        </Text>
        <Flex flexWrap="wrap" gap="20px">
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="10px">
        <Text fontWeight="bold" color="teal.500">
          3年生
        </Text>
        <Flex flexWrap="wrap" gap="20px">
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </Flex>
      </Flex>
    </Flex>
  );
};
