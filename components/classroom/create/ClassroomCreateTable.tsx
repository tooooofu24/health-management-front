import {
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Table,
  Text,
  TableCaption,
} from "@chakra-ui/react";
import { type } from "os";
import { FC } from "react";

type props = {
  grade?: number;
  name?: string;
  students?: string[];
  teacher?: string;
};
export const ClassroomCreateTable: FC<props> = ({
  grade,
  name,
  students,
  teacher,
}) => {
  return (
    <>
      <TableContainer mb={3}>
        <Table>
          <TableCaption placement="top">クラス情報</TableCaption>
          <Thead>
            <Tr>
              <Th>クラス</Th>
              <Th>担任</Th>
              <Th>人数</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                {grade || "？"}年{name || "？"}組
              </Td>
              <Td>{teacher || "？"}</Td>
              <Td>{students?.length || "？"}人</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table>
          <TableCaption placement="top">生徒情報</TableCaption>
          <Thead>
            <Tr>
              <Th>出席番号</Th>
              <Th>氏名</Th>
            </Tr>
          </Thead>
          <Tbody>
            {students?.length
              ? students.map((stundent, i) => (
                  <Tr key={i}>
                    <Td>{i + 1}</Td>
                    <Td>{stundent}</Td>
                  </Tr>
                ))
              : null}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
