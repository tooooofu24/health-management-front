import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
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
} from "phosphor-react";
import { memo, Suspense, useEffect, useMemo, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useForm } from "react-hook-form";
import { useHealthChecks } from "../../../hooks/HealthCheck";
import { filterProps } from "../../../utils/server/healthCheck";
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
    formState: { errors },
  } = useForm<filterProps>({
    mode: "onBlur",
    defaultValues: router.query,
  });

  watch((data, { name, type }) => {
    router.query.page = "1";
    const key = name!;
    const value = data?.[key];
    router.replace({
      query: { ...router.query, [key]: value },
    });
  });

  return (
    <TilesWrapper>
      <Tile>
        <SimpleGrid columns={[null, 2, 3]} spacingX={5} spacingY={5}>
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
          <FormControl isInvalid={Boolean(errors.date)}>
            <FormLabel>
              <Calendar />
              <Text>日付</Text>
            </FormLabel>
            <Input type="date" {...register("date")} />
            <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.showChecked)}>
            <FormLabel>
              <CheckCircle />
              <Text>チェック済も表示</Text>
            </FormLabel>
            <Select placeholder="表示しない" {...register("showChecked")}>
              <option value={1}>表示する</option>
            </Select>
            <FormErrorMessage>{errors.showChecked?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.isDanger)}>
            <FormLabel>
              <SmileySad />
              <Text>体調不良に絞る</Text>
            </FormLabel>
            <Select placeholder="絞り込まない" {...register("isDanger")}>
              <option value={1}>絞り込む</option>
            </Select>
            <FormErrorMessage>{errors.isDanger?.message}</FormErrorMessage>
          </FormControl>
        </SimpleGrid>
      </Tile>
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

  useEffect(() => {
    // refetch();
  }, [router.query]);
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
          戻る
        </Button>
        <Button
          onClick={() => goPage(page + 1)}
          disabled={healthChecks.length < 20}
          rightIcon={<CaretRight />}
        >
          次へ
        </Button>
      </Flex>
    </>
  );
});
