import {
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Table,
} from "@chakra-ui/react";
import { type } from "os";
import { FC } from "react";

type props = {
  grade?: number;
  name?: string;
  students?: string[];
};
export const ClassroomCreateTable: FC<props> = ({ grade, name, students }) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>学年・クラス</Th>
            <Th>出席番号</Th>
            <Th>氏名</Th>
          </Tr>
        </Thead>
        <Tbody>
          {students?.length &&
            students.map((stundent, i) => (
              <Tr key={i}>
                <Td>
                  {grade || "?"}年{name || "?"}組
                </Td>
                <Td>{i + 1}</Td>
                <Td>{stundent}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
