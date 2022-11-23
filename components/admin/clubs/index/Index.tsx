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
import { Classroom, Club } from "@prisma/client";
import { useRouter } from "next/router";
import { useClubs } from "../../../../hooks/Clubs";

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
const Row = ({ club }: { club: Club }) => {
  const router = useRouter();
  return (
    <Tr
      _hover={{ bg: "gray.50" }}
      cursor="pointer"
      onClick={() => router.push("/admin/health-checks/?clubId=" + club.id)}
    >
      <Td>{club.name}</Td>
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
