import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemProps,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {
  ChalkboardTeacher,
  ClockCounterClockwise,
  CaretDown,
  Trash,
} from "phosphor-react";
import { FC, ReactNode } from "react";
import * as CSS from "csstype";

export const TimeSlotItemButton = () => {
  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        aria-label="その他のアクション"
        size="sm"
        icon={<CaretDown />}
      />
      <MenuList fontSize={14}>
        <MyMenuItem icon={<ChalkboardTeacher />} text="成績処理をする" />
        <MyMenuItem icon={<ClockCounterClockwise />} text="過去の成績を見る" />
        <MyMenuItem color="red.500" icon={<Trash />} text="授業を削除する" />
      </MenuList>
    </Menu>
  );
};

type MyMenuItemProps = {
  icon: ReactNode;
  text: string;
  color?: CSS.Property.Color;
};
const MyMenuItem: FC<MyMenuItemProps & MenuItemProps> = (props) => {
  return (
    <MenuItem color={props.color ? props.color : ""}>
      <Flex alignItems="center" gap={3}>
        {props.icon}
        <Text>{props.text}</Text>
      </Flex>
    </MenuItem>
  );
};
