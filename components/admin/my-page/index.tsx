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

export const AdminMyPage = () => {
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
                <Td>千葉陶也</Td>
                <Td>1-1</Td>
                <Td>バスケ部</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Tile>
    </TilesWrapper>
  );
};
