import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Tag,
} from "@chakra-ui/react";
import { Pencil, Trash, Plus, ClipboardText } from "phosphor-react";
export const ClassroomList = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th color="teal.500">学年・クラス</Th>
            <Th color="teal.500">人数</Th>
            <Th color="teal.500">担任</Th>
            <Th color="teal.500">授業</Th>
            <Th color="teal.500"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Array(5)].map(() => {
            return (
              <Tr>
                <Td>1年1組</Td>
                <Td>33人</Td>
                <Td>石田京楓</Td>
                <Td>
                  <Flex gap="10px">
                    <Tag>音楽</Tag>
                    <Tag>道徳</Tag>
                  </Flex>
                </Td>
                <Td width="30%">
                  <Flex gap="20px" justifyContent="end">
                    <Button colorScheme="gray" leftIcon={<Pencil size={20} />}>
                      編集
                    </Button>
                    <Button leftIcon={<ClipboardText size={20} />}>
                      成績処理
                    </Button>
                    <Button colorScheme="red" leftIcon={<Trash size={20} />}>
                      削除
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
