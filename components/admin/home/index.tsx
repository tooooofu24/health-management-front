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
  Alert,
  AlertIcon,
  SimpleGrid,
  Box,
  AlertTitle,
  AlertDescription,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useCurrentTeacher } from "../../../hooks/Teacher";
import {
  useHealthChecks,
  useUnreadHealthChecks,
} from "../../../hooks/HealthCheck";
import { Classroom, Club } from "@prisma/client";
import { FC } from "react";
import { PageTitle } from "../../common/PageTitle";
import { Bell } from "phosphor-react";

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
      <Box>
        <PageTitle iconUrl="" icon={<Bell />} title="通知" />
        <Tile>
          <Flex flexDir="column" gap={4}>
            {teacher.classroom ? (
              <ClassroomAlert classroom={teacher.classroom} />
            ) : null}
            {teacher.club ? <ClubAlert club={teacher.club} /> : null}
            <DangerAlert />
          </Flex>
        </Tile>
      </Box>
    </TilesWrapper>
  );
};

type ClassroomAlertProps = {
  classroom: Classroom;
};
const ClassroomAlert: FC<ClassroomAlertProps> = ({ classroom }) => {
  const { healthChecks } = useHealthChecks({
    classroomId: classroom.id,
    isUnread: 1,
  });
  return (
    <Alert status="info">
      <AlertIcon />
      <SimpleGrid spacing={3} w="full" alignItems="center" columns={[1, 2, 2]}>
        <Box>
          <AlertTitle>
            {classroom.grade}年{classroom.name}組に新着の回答があります！
          </AlertTitle>
          <AlertDescription>
            まだチェックをつけていない生徒の回答が{healthChecks.length}
            件あります！
          </AlertDescription>
        </Box>
        <Flex justifyContent="end">
          <Button w="auto">確認する</Button>
        </Flex>
      </SimpleGrid>
    </Alert>
  );
};

type ClubAlertProps = {
  club: Club;
};

const ClubAlert: FC<ClubAlertProps> = ({ club }) => {
  const { healthChecks } = useHealthChecks({
    clubId: club.id,
    isUnread: 1,
  });
  return (
    <Alert status="info">
      <AlertIcon />
      <SimpleGrid spacing={3} w="full" alignItems="center" columns={[1, 2, 2]}>
        <Box>
          <AlertTitle>{club.name}に新着の回答があります！</AlertTitle>
          <AlertDescription>
            まだチェックをつけていない生徒の回答が{healthChecks.length}
            件あります！
          </AlertDescription>
        </Box>
        <Flex justifyContent="end">
          <Button w="auto">確認する</Button>
        </Flex>
      </SimpleGrid>
    </Alert>
  );
};

const DangerAlert = () => {
  const { healthChecks } = useHealthChecks({
    isUnread: 1,
    isDanger: 1,
  });
  return (
    <Alert status="error">
      <AlertIcon />
      <SimpleGrid spacing={3} w="full" alignItems="center" columns={[1, 2, 2]}>
        <Box>
          <AlertTitle>未読の体調不良生徒がいます</AlertTitle>
          <AlertDescription>
            体調不良生徒の生徒が{healthChecks.length}
            人います！
          </AlertDescription>
        </Box>
        <Flex justifyContent="end">
          <Button colorScheme="red" w="auto">
            確認する
          </Button>
        </Flex>
      </SimpleGrid>
    </Alert>
  );
};
