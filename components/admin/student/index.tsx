import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Baseball, GraduationCap, User, EnvelopeSimple } from "phosphor-react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useForm } from "react-hook-form";
import { useHealthChecks } from "../../../hooks/HealthCheck";
import { studentsProps, useStudents } from "../../../hooks/Student";
import { filterProps } from "../../../utils/server/healthCheck";
import { CommonError } from "../../common/error/CommonError";
import { ErrorFallbackTile } from "../../common/error/ErrorFallbackTile";
import { ClassroomField } from "../../common/form/ClassroomField";
import { ClubField } from "../../common/form/ClubField";
import { HealthCheckTable } from "../../common/health-check/HealthCheckTable";
import { LoadingTile } from "../../common/loading/LoadingTile";
import { Tile, TilesWrapper } from "../../common/Tile";

export const StudentSearchPage = () => {
  const router = useRouter();
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<studentsProps>({
    mode: "onBlur",
    defaultValues: router.query,
  });

  watch((data, { name, type }) => {
    const key = name!;
    const value = data?.[key];
    router.replace({
      query: { ...router.query, [key]: value },
    });
  });

  return (
    <TilesWrapper>
      <Tile>
        <SimpleGrid columns={[null, 2]} spacingX={5} spacingY={5}>
          <FormControl isInvalid={Boolean(errors.classroomId)}>
            <FormLabel>
              <GraduationCap />
              <Text>クラス</Text>
            </FormLabel>
            <ClassroomField register={register("classroomId")} />
            <FormErrorMessage>{errors.classroomId?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.clubId)}>
            <FormLabel>
              <Baseball />
              <Text>部活</Text>
            </FormLabel>
            <ClubField register={register("clubId")} />
            <FormErrorMessage>{errors.clubId?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel>
              <User />
              <Text>氏名</Text>
            </FormLabel>
            <Input placeholder="お名前" {...register("name")} />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel>
              <EnvelopeSimple />
              <Text>メールアドレス</Text>
            </FormLabel>
            <Input placeholder="user@email.com" {...register("email")} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
        </SimpleGrid>
      </Tile>
      <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
        <Suspense fallback={<LoadingTile />}>
          <StudentList />
        </Suspense>
      </ErrorBoundary>
    </TilesWrapper>
  );
};

const StudentList = () => {
  const router = useRouter();
  const { students, refetch } = useStudents(router.query);
  return (
    <Tile>
      {students.length ? (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>クラス</Th>
                <Th>番号</Th>
                <Th>氏名</Th>
                <Th>部活動</Th>
                <Th>メールアドレス</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((student) => {
                return (
                  <Tr>
                    <Td>
                      {student.classroom.grade}年{student.classroom.name}組
                    </Td>
                    <Td>{student.number}番</Td>
                    <Td>{student.name}</Td>
                    <Td>{student.club?.name}</Td>
                    <Td>{student.user.email}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <CommonError message="データがありません" />
      )}
    </Tile>
  );
};
