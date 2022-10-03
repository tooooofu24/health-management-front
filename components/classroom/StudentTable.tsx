import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export const StudentTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th color="teal.500">クラス</Th>
            <Th color="teal.500">出席番号</Th>
            <Th color="teal.500">名前</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>3</Td>
            <Td>1</Td>
            <Td>石田京楓</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>1</Td>
            <Td>井鍋里香</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>1</Td>
            <Td>高野かなこ</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
