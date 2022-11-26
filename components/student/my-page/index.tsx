import { Tile, TilesWrapper } from "../../common/Tile";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Avatar,
} from "@chakra-ui/react";
import { userAtom } from "../../../jotai/user";
import { useAtom } from "jotai";
import { useState } from "react";
import { useCurrentStudent } from "../../../hooks/Student";

export const MyPage = () => {
  const { student } = useCurrentStudent();
  return (
    <TilesWrapper>
      <Tile>
        <TableContainer>
          <Table variant="unstyled" width="auto">
            <Thead>
              <Tr>
                <Th>アイコン</Th>
                <Th>名前</Th>
                <Th>クラス</Th>
                <Th>部活動</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Avatar />
                </Td>
                <Td>{student.name}</Td>
                <Td>
                  {student.classroom.grade}年{student.classroom.name}組
                </Td>
                <Td>
                  {student.clubId ? <>{student.club?.name}</> : <>なし</>}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Tile>
    </TilesWrapper>
  );
};
