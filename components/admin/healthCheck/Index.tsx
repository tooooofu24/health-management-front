import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Provider, useAtom } from "jotai";
import { useRouter } from "next/router";
import {
  Baseball,
  Calendar,
  GraduationCap,
  CaretRight,
  CaretLeft,
  CheckCircle,
  SmileySad,
  MagnifyingGlass,
} from "phosphor-react";
import { memo, Suspense, useEffect, useMemo, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useForm } from "react-hook-form";
import { useHealthChecks } from "../../../hooks/HealthCheck";
import { findClassroom } from "../../../utils/api/Classroom";
import { findClub } from "../../../utils/api/Club";
import { filterProps } from "../../../utils/server/healthCheck";
import { formatDateString } from "../../../utils/time";
import { ErrorFallbackTile } from "../../common/error/ErrorFallbackTile";
import { ClassroomField } from "../../common/form/ClassroomField";
import { ClubField } from "../../common/form/ClubField";
import { HealthCheckTable } from "../../common/health-check/HealthCheckTable";
import { LoadingTile } from "../../common/loading/LoadingTile";
import { Tile, TilesWrapper } from "../../common/Tile";

export const HealthChecksPage = () => {
  const router = useRouter();
  const {
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm<filterProps>({
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
      date: "",
      classroomId: null,
      studentId: null,
      clubId: null,
      showChecked: null,
      isDanger: null,
    });
    router.replace({
      query: null,
    });
  };

  return (
    <TilesWrapper>
      <Tile>
        <SimpleGrid columns={[null, 2, 3]} spacingX={5} spacingY={5}>
          <FormControl isInvalid={Boolean(errors.classroomId)}>
            <FormLabel>
              <GraduationCap />
              <Text>?????????</Text>
            </FormLabel>
            <ClassroomField register={register("classroomId")} />
            <FormErrorMessage>{errors.classroomId?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.clubId)}>
            <FormLabel>
              <Baseball />
              <Text>??????</Text>
            </FormLabel>
            <ClubField register={register("clubId")} />
            <FormErrorMessage>{errors.clubId?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.date)}>
            <FormLabel>
              <Calendar />
              <Text>??????</Text>
            </FormLabel>
            <Input type="date" {...register("date")} />
            <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.showChecked)}>
            <FormLabel>
              <CheckCircle />
              <Text>????????????????????????</Text>
            </FormLabel>
            <Select placeholder="???????????????" {...register("showChecked")}>
              <option value={1}>????????????</option>
            </Select>
            <FormErrorMessage>{errors.showChecked?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.isDanger)}>
            <FormLabel>
              <SmileySad />
              <Text>?????????????????????</Text>
            </FormLabel>
            <Select placeholder="??????????????????" {...register("isDanger")}>
              <option value={1}>????????????</option>
            </Select>
            <FormErrorMessage>{errors.isDanger?.message}</FormErrorMessage>
          </FormControl>
        </SimpleGrid>
        <Flex justifyContent="center" mt={5}>
          <Button colorScheme="gray" size="sm" onClick={onReset}>
            ???????????????????????????
          </Button>
        </Flex>
      </Tile>
      <SearchResult />
      <Provider>
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <HealthCheckList />
          </Suspense>
        </ErrorBoundary>
      </Provider>
    </TilesWrapper>
  );
};

const HealthCheckList = memo(() => {
  const router = useRouter();
  const { healthChecks, refetch } = useHealthChecks(router.query);

  const page = router.query.page ? Number(router.query.page) : 1;

  const goPage = (toPage: number) => {
    router.replace({
      query: { ...router.query, page: toPage },
    });
  };

  return (
    <>
      <Tile>
        <HealthCheckTable healthChecks={healthChecks} refetch={refetch} />
      </Tile>
      <Flex justifyContent="space-between">
        <Button
          onClick={() => goPage(page - 1)}
          disabled={page == 1}
          leftIcon={<CaretLeft />}
        >
          ??????
        </Button>
        <Button
          onClick={() => goPage(page + 1)}
          disabled={healthChecks.length < 20}
          rightIcon={<CaretRight />}
        >
          ??????
        </Button>
      </Flex>
    </>
  );
});

const SearchResult = () => {
  const router = useRouter();
  const { date, classroomId, clubId, showChecked, isDanger } = router.query;
  const classroom = findClassroom(Number(classroomId));
  const club = findClub(Number(clubId));
  return (
    <Flex alignItems="center" color="gray.500" gap={3}>
      <Box mr={1}>
        <MagnifyingGlass />
      </Box>
      {date && <Tag>{formatDateString(String(date))}</Tag>}
      {classroom && (
        <Tag>
          {classroom?.grade}???{classroom?.name}???
        </Tag>
      )}
      {club && <Tag>{club.name}</Tag>}
      {showChecked && <Tag>????????????????????????</Tag>}
      {isDanger && <Tag>?????????????????????</Tag>}
      {!date && !classroomId && !clubId && !showChecked && !isDanger && (
        <Tag>??????</Tag>
      )}
    </Flex>
  );
};
