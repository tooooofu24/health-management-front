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
import { Trash, IdentificationCard, CaretRight } from "phosphor-react";
import { useClassrooms } from "../../../hooks/Classroom";
import { Classroom } from "../../../types/Classroom";
import Router from "next/router";

export const ClassroomList = () => {
  const { classrooms } = useClassrooms();

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>学年・クラス</Th>
            <Th>担任</Th>
            <Th>人数</Th>
            <Th>授業</Th>
            <Th>最終授業日</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {classrooms.map((classroom) => {
            return <Row key={classroom.id} classroom={classroom} />;
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const Row = ({ classroom }: { classroom: Classroom }) => {
  return (
    <Tr
      _hover={{ bg: "gray.50" }}
      cursor="pointer"
      onClick={() => Router.push("/classrooms/" + classroom.id)}
    >
      <Td>
        {classroom.grade}年{classroom.name}組
      </Td>
      <Td>{classroom.teacher}</Td>
      <Td>41人</Td>
      <Td>
        <Flex gap="10px" justifyContent="center">
          {classroom.subjects?.map((subject) => {
            return <Tag key={subject.id}>{subject.name}</Tag>;
          })}
        </Flex>
      </Td>
      <Td>2022年10月1日</Td>
      <Td>
        <Flex justifyContent="end" alignItems="center">
          <CaretRight />
        </Flex>
      </Td>
    </Tr>
  );
};
