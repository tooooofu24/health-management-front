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
import { useClassrooms } from "../../../hooks/Classroom";
import { Classroom } from "../../../types/Classroom";
export const ClassroomList = () => {
  const { classrooms } = useClassrooms();

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>学年・クラス</Th>
            <Th>担任</Th>
            <Th>授業</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {classrooms.map((classroom) => {
            return <Row classroom={classroom} />;
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const Row = ({ classroom }: { classroom: Classroom }) => {
  return (
    <Tr>
      <Td>
        {classroom.grade}年{classroom.name}組
      </Td>
      <Td>{classroom.teacher}</Td>
      <Td>
        <Flex gap="10px" justifyContent="center">
          <Tag>音楽</Tag>
          <Tag>道徳</Tag>
        </Flex>
      </Td>
      <Td width="30%">
        <Flex gap="20px" justifyContent="end">
          <Link href={`/classrooms/${classroom.id}`}>
            <a>
              <Button leftIcon={<IdentificationCard size={20} />}>詳細</Button>
            </a>
          </Link>

          <Button colorScheme="red" leftIcon={<Trash size={20} />}>
            削除
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
};
