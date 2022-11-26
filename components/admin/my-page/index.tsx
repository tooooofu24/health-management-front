import { Tile, TilesWrapper } from "../../common/Tile";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Avatar,
} from "@chakra-ui/react";
import { useCurrentTeacher } from "../../../hooks/Teacher";

export const AdminMyPage = () => {
  const { teacher } = useCurrentTeacher();
  return (
    <TilesWrapper>
      <Tile>
        <TableContainer>
          <Table variant="unstyled" width="auto">
            <Thead>
              <Tr>
                <Th>アイコン</Th>
                <Th>名前</Th>
                <Th>担任</Th>
                <Th>顧問</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Avatar />
                </Td>
                <Td>{teacher.name}</Td>
                <Td>
                  {teacher.classroomId ? (
                    <>
                      {teacher.classroom?.grade}年{teacher.classroom?.name}組
                    </>
                  ) : (
                    <>なし</>
                  )}
                </Td>
                <Td>
                  {teacher.clubId ? <>{teacher.club?.name}</> : <>なし</>}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Tile>
    </TilesWrapper>
  );
};
