import { Card, CardBody, CardProps, Flex, FlexProps } from "@chakra-ui/react";
import { FC } from "react";

export const Tile: FC<CardProps> = (props) => {
  return (
    <Card {...props} bg="white">
      <CardBody>{props.children}</CardBody>
    </Card>
  );
};

export const TilesWrapper: FC<FlexProps> = (props) => {
  return (
    <Flex flexDirection="column" gap="20px">
      {props.children}
    </Flex>
  );
};
