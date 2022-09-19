import { Td, TableCellProps } from "@chakra-ui/react";
import { FC } from "react";

export const AttendanceTableTd: FC<TableCellProps> = (props) => {
  return (
    <Td color="gray.700" textAlign="center" fontSize="14px" {...props}>
      {props.children}
    </Td>
  );
};
