import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Square,
  Tag,
  Text,
} from "@chakra-ui/react";
import Router from "next/router";
import { DotsThree, Flask } from "phosphor-react";
import { Card } from "../../common/Card";
import { TimeSlotItemButton } from "./TimeSlotItemButton";

export const TimeSlotItem = () => {
  return (
    <Card width="full" height="230px">
      <Flex flexDirection="column" gap="15px" height="full">
        <Square flex="1">
          <Flex color="teal.500" alignItems="center" justifyContent="center">
            <Flask size={100} />
          </Flex>
        </Square>
        <Flex alignItems="center" gap="10px">
          <Text fontWeight="bold">1年3組</Text>
          <Tag>理科</Tag>
        </Flex>
        <Flex justifyContent="end" gap="5px">
          <ButtonGroup size="sm" isAttached>
            <Button
              onClick={() => {
                Router.push("/attendances/create");
              }}
            >
              成績登録
            </Button>
            <TimeSlotItemButton />
          </ButtonGroup>
        </Flex>
      </Flex>
    </Card>
  );
};
