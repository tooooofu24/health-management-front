import { Tile } from "../../../common/Tile";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Tag,
} from "@chakra-ui/react";
import { CaretRight } from "phosphor-react";
import { Classroom } from "@prisma/client";
import { useRouter } from "next/router";
import { useClassrooms } from "../../../../hooks/Classroom";

export const ClassroomPage = () => {
  const { classrooms } = useClassrooms();
  return (
    <Tile>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>クラス</Th>
              <Th>担任</Th>
              <Th>人数</Th>
              <Th>未読</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {classrooms.map((classroom) => (
              <Row key={classroom.id} classroom={classroom} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Tile>
  );
};
const Row = ({ classroom }: { classroom: Classroom }) => {
  const router = useRouter();
  return (
    <Tr
      _hover={{ bg: "gray.50" }}
      cursor="pointer"
      onClick={() => router.push("/classrooms/" + classroom.id)}
    >
      <Td>
        {classroom.grade}年{classroom.name}組
      </Td>
      <Td>千葉陶也</Td>
      <Td>{36}人</Td>
      <Td>
        <Tag>5</Tag>
      </Td>
      <Td>
        <Flex justifyContent="end" alignItems="center">
          <CaretRight />
        </Flex>
      </Td>
    </Tr>
  );
};
