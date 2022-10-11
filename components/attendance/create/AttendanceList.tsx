import { Box, Checkbox, Flex, FormLabel, Text } from "@chakra-ui/react";
import {
  ChatCircle,
  Check,
  HandPalm,
  Lightbulb,
  Notebook,
} from "phosphor-react";
import { AttendanceABCButtons } from "./AttendanceABCButtons";

export const AttendanceList = () => {
  return (
    <>
      <Description />
      <Box p={3} borderBottom="1px" borderColor="gray.300">
        <Flex gap="5%" alignItems="center">
          <Text>1</Text>
          <Text>千葉陶也</Text>
        </Flex>
        <Flex flexDirection="column" gap="3px">
          <Flex gap="10px" alignItems="center">
            <FormLabel margin={0} width="50%">
              <Check />
              出席
            </FormLabel>
            <Checkbox size="lg" />
          </Flex>
          <Flex gap="10px" alignItems="center">
            <FormLabel margin={0} width="50%">
              <Notebook />
              知識・技能
            </FormLabel>
            <Box>
              <AttendanceABCButtons />
            </Box>
          </Flex>
          <Flex gap="10px" alignItems="center">
            <FormLabel margin={0}>
              <Lightbulb />
              <Text
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                思考力・判断力・表現力
              </Text>
            </FormLabel>
            <AttendanceABCButtons />
          </Flex>
          <Flex gap="10px" alignItems="center">
            <FormLabel margin={0}>
              <HandPalm />
            </FormLabel>
            <AttendanceABCButtons />
          </Flex>
          <Flex alignItems="center" color="gray.500">
            <ChatCircle size={20} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
const Description = () => {
  return (
    <Box rounded="base" p="10px" fontSize={12} color="gray.500">
      <Flex gap="25px" flexWrap="wrap" rowGap="5px">
        <Flex alignItems="center" gap="5px">
          <Check />
          出欠
        </Flex>
        <Flex alignItems="center" gap="5px">
          <Notebook />
          知識・技能
        </Flex>
        <Flex alignItems="center" gap="5px">
          <Lightbulb />
          思考力・判断力・表現力
        </Flex>
        <Flex alignItems="center" gap="5px">
          <HandPalm />
          主体的に学習に取り組む態度
        </Flex>
      </Flex>
    </Box>
  );
};
