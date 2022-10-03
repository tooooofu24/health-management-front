import { Th, TableColumnHeaderProps } from "@chakra-ui/react";
import { FC } from "react";

export const AttendanceTableTh: FC<TableColumnHeaderProps> = (props) => {
  return (
    <Th color="teal.500" textAlign="center" {...props}>
      {props.children}
    </Th>
  );
};
