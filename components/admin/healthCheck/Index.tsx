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
import { Suspense } from "react";
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
  const { page } = router.query;
  const {
    register,
    watch,
    formState: { errors },
    control,
    setValue,
  } = useForm<filterProps>({
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

  const addPage = () => {
    setValue("page", page ? Number(page) + 1 : 2);
  };

  const backPage = () => {
    setValue("page", page ? Number(page) - 1 : 1);
  };

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
            <Input disabled type="date" {...register("date")} />
            <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.isUnread)}>
            <FormLabel>
              <CheckCircle />
              <Text>未読に絞る</Text>
            </FormLabel>
            <Select placeholder="選択して下さい" {...register("isUnread")}>
              <option value={0}>絞り込まない</option>
              <option value={1}>絞り込む</option>
            </Select>
            <FormErrorMessage>{errors.isUnread?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.isDanger)}>
            <FormLabel>
              <SmileySad />
              <Text>体調不良に絞る</Text>
            </FormLabel>
            <Select placeholder="選択して下さい" {...register("isDanger")}>
              <option value={0}>絞り込まない</option>
              <option value={1}>絞り込む</option>
            </Select>
            <FormErrorMessage>{errors.isDanger?.message}</FormErrorMessage>
          </FormControl>
        </SimpleGrid>
      </Tile>
      <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
        <Suspense fallback={<LoadingTile />}>
          <HealthCheckList />
        </Suspense>
      </ErrorBoundary>
      <Flex justifyContent="space-between">
        <Button
          disabled={!page || Number(page) == 1}
          onClick={backPage}
          leftIcon={<CaretLeft />}
        >
          戻る
        </Button>
        <Button onClick={addPage} rightIcon={<CaretRight />}>
          次へ
        </Button>
      </Flex>
    </TilesWrapper>
  );
};

const HealthCheckList = () => {
  const router = useRouter();
  const { healthChecks, refetch } = useHealthChecks(router.query);

  return (
    <Tile>
      <HealthCheckTable healthChecks={healthChecks} refetch={refetch} />
    </Tile>
  );
};
