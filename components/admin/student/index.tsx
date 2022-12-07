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
import {
  Baseball,
  GraduationCap,
  User,
  EnvelopeSimple,
  CaretLeft,
  CaretRight,
} from "phosphor-react";
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
import { StudentDeleteButton } from "./StudentDeleteButton";
import { StudentEditButton } from "./StudentEditButton";

export const StudentSearchPage = () => {
  const router = useRouter();
  const {
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm<studentsProps>({
    mode: "onBlur",
    defaultValues: router.query,
  });

  watch((data, { name, type }) => {
    router.replace({
      query: watch(),
    });
  });

  const onReset = () => {
    reset({
      name: "",
      email: "",
      classroomId: null,
      clubId: null,
    });
    router.replace({
      query: null,
    });
  };

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
        <Flex justifyContent="center" mt={5}>
          <Button colorScheme="gray" size="sm" onClick={onReset}>
            検索条件をリセット
          </Button>
        </Flex>
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
  const { students } = useStudents(router.query);
  const page = router.query.page ? Number(router.query.page) : 1;

  const goPage = (toPage: number) => {
    router.replace({
      query: { ...router.query, page: toPage },
    });
  };
  return students.length ? (
    <>
      <Tile>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>クラス</Th>
                <Th>番号</Th>
                <Th>氏名</Th>
                <Th>部活動</Th>
                <Th>メールアドレス</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((student) => {
                return (
                  <Tr key={student.id}>
                    <Td>
                      {student.classroom.grade}年{student.classroom.name}組
                    </Td>
                    <Td>{student.number}番</Td>
                    <Td>{student.name}</Td>
                    <Td>{student.club?.name}</Td>
                    <Td>{student.user.email}</Td>
                    <Td>
                      <Flex gap={3} justifyContent="end">
                        <StudentEditButton student={student} />
                        <StudentDeleteButton student={student} />
                      </Flex>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Tile>
      <Flex justifyContent="space-between">
        <Button
          onClick={() => goPage(page - 1)}
          disabled={page == 1}
          leftIcon={<CaretLeft />}
        >
          戻る
        </Button>
        <Button
          onClick={() => goPage(page + 1)}
          disabled={students.length < 20}
          rightIcon={<CaretRight />}
        >
          次へ
        </Button>
      </Flex>
    </>
  ) : (
    <Tile>
      <CommonError message="データがありません" />
    </Tile>
  );
};
