import {
  useHealthChecks,
  useUnreadHealthChecks,
} from "../../../hooks/HealthCheck";
import { Tile } from "../../common/Tile";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Flex,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { useCurrentTeacher } from "../../../hooks/Teacher";
import { FC } from "react";
import { Classroom, Club } from "@prisma/client";

export const AdminHomePage = () => {
  const { teacher } = useCurrentTeacher();
  return (
    <Tile>
      <Flex flexDir="column" gap={4}>
        {teacher.classroom ? (
          <ClassroomAlert classroom={teacher.classroom} />
        ) : null}
        {teacher.club ? <ClubAlert club={teacher.club} /> : null}
        <DangerAlert />
      </Flex>
    </Tile>
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
