import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Check, Trash, X } from "phosphor-react";
import { Tile } from "../../common/Tile";
import { DeleteIPButtton } from "./DeleteIPButton";

export const IPList = () => {
  return (
    <Tile>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>使用中</Th>
              <Th>ラベル</Th>
              <Th>IPアドレス</Th>
              <Th>追加ユーザー</Th>
              <Th>追加日時</Th>
              <Th>削除</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Td>
              <Flex justifyContent="center" color="teal.500">
                <Check />
              </Flex>
            </Td>
            <Td>自宅</Td>
            <Td>121.114.22.92</Td>
            <Td>千葉陶也</Td>
            <Td>1日前</Td>
            <Td>
              <DeleteIPButtton />
            </Td>
          </Tbody>
        </Table>
      </TableContainer>
    </Tile>
  );
};
