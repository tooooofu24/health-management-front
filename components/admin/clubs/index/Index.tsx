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
  Text,
} from "@chakra-ui/react";
import { CaretRight } from "phosphor-react";
import { useRouter } from "next/router";
import { useClubs } from "../../../../hooks/Clubs";
import { ClubResponse } from "../../../../types/APIResponse";

export const ClubPage = () => {
  const { clubs } = useClubs();
  return (
    <Tile>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>部活名</Th>
              <Th>顧問</Th>
              <Th>人数</Th>
              <Th>未読</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {clubs.map((club) => (
              <Row key={club.id} club={club} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Tile>
  );
};
const Row = ({ club }: { club: ClubResponse }) => {
  const unreadHealthChecks = club.students.flatMap((student) => {
    return student.healthChecks;
  });
  const router = useRouter();
  return (
    <Tr
      _hover={{ bg: "gray.50" }}
      cursor="pointer"
      onClick={() => router.push("/admin/health-checks/?clubId=" + club.id)}
    >
      <Td>{club.name}</Td>
      <Td>
        <Flex justifyContent="center" gap={3}>
          {club.teachers.map((teacher) => {
            return <Text key={teacher.id}>{teacher.name}</Text>;
          })}
        </Flex>
      </Td>
      <Td>{club.students.length}人</Td>
      <Td>
        <Tag>{unreadHealthChecks.length}</Tag>
      </Td>
      <Td>
        <Flex justifyContent="end" alignItems="center">
          <CaretRight />
        </Flex>
      </Td>
    </Tr>
  );
};
