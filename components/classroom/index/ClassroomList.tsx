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
import Link from "next/link";
import { Trash, IdentificationCard } from "phosphor-react";
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
                  <Flex gap="10px" justifyContent="center">
                    <Tag>音楽</Tag>
                    <Tag>道徳</Tag>
                  </Flex>
                </Td>
                <Td width="30%">
                  <Flex gap="20px" justifyContent="end">
                    <Link href="/classrooms/1">
                      <a>
                        <Button leftIcon={<IdentificationCard size={20} />}>
                          詳細
                        </Button>
                      </a>
                    </Link>

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
