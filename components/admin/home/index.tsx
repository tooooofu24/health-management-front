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
import { CommonError } from "../../common/error/CommonError";
import Link from "next/link";

export const AdminMyPage = () => {
  const { teacher } = useCurrentTeacher();
  const { healthChecks } = useUnreadHealthChecks();
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
          {healthChecks.length ? (
            <Flex flexDir="column" gap={4}>
              {teacher.classroom ? (
                <ClassroomAlert classroom={teacher.classroom} />
              ) : null}
              {teacher.club ? <ClubAlert club={teacher.club} /> : null}
              <DangerAlert />
            </Flex>
          ) : (
            <CommonError message="通知はありません" />
          )}
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
  });
  if (!healthChecks.length) return null;

  return (
    <Alert status="info">
      <AlertIcon />
      <SimpleGrid spacing={3} w="full" alignItems="center" columns={[1, 2, 2]}>
        <Box>
          <AlertTitle>
            {classroom.grade}年{classroom.name}組に未読の回答があります！
          </AlertTitle>
          <AlertDescription>
            チェックしていない生徒の回答が{healthChecks.length}件あります！
          </AlertDescription>
        </Box>
        <Flex justifyContent="end">
          <Link href={`/admin/health-checks?classroomId=${classroom.id}`}>
            <a>
              <Button w="auto">確認する</Button>
            </a>
          </Link>{" "}
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
  });
  if (!healthChecks.length) return null;
  return (
    <Alert status="info">
      <AlertIcon />
      <SimpleGrid spacing={3} w="full" alignItems="center" columns={[1, 2, 2]}>
        <Box>
          <AlertTitle>{club.name}に未読の回答があります！</AlertTitle>
          <AlertDescription>
            チェックしていない生徒の回答が{healthChecks.length}件あります！
          </AlertDescription>
        </Box>
        <Flex justifyContent="end">
          <Link href={`/admin/health-checks?clubId=${club.id}`}>
            <a>
              <Button w="auto">確認する</Button>
            </a>
          </Link>
        </Flex>
      </SimpleGrid>
    </Alert>
  );
};

const DangerAlert = () => {
  const { healthChecks } = useHealthChecks({
    isDanger: 1,
  });
  if (!healthChecks.length) return null;
  return (
    <Alert status="error">
      <AlertIcon />
      <SimpleGrid spacing={3} w="full" alignItems="center" columns={[1, 2, 2]}>
        <Box>
          <AlertTitle>未読の体調不良生徒がいます！</AlertTitle>
          <AlertDescription>
            体調不良生徒の生徒が{healthChecks.length}人います！
          </AlertDescription>
        </Box>
        <Flex justifyContent="end">
          <Link href={`/admin/health-checks?isDanger=1`}>
            <a>
              <Button colorScheme="red" w="auto">
                確認する
              </Button>
            </a>
          </Link>
        </Flex>
      </SimpleGrid>
    </Alert>
  );
};
