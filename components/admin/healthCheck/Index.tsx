import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Calendar, GraduationCap } from "phosphor-react";
import { useForm } from "react-hook-form";
import { useHealthChecks } from "../../../hooks/HealthCheck";
import { ClassroomField } from "../../common/form/ClassroomField";
import { HealthCheckTable } from "../../common/health-check/HealthCheckTable";
import { Tile, TilesWrapper } from "../../common/Tile";

export const HealthChecksPage = () => {
  const {
    register,
    watch,
    formState: { errors },
    control,
  } = useForm<form>({
    mode: "onBlur",
  });

  const { healthChecks } = useHealthChecks();

  return (
    <TilesWrapper>
      <Tile>
        <SimpleGrid columns={[null, 2, 3]} spacingX={5} spacingY={5}>
          <FormControl isInvalid={Boolean(errors.date)}>
            <FormLabel>
              <Calendar />
              <Text>日付</Text>
            </FormLabel>
            <Input type="date" {...register("date")} />
            <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.date)}>
            <FormLabel>
              <GraduationCap />
              <Text>クラス</Text>
            </FormLabel>
            <ClassroomField register={register("classroomId")} />
            <FormErrorMessage>{errors.classroomId?.message}</FormErrorMessage>
          </FormControl>
        </SimpleGrid>
      </Tile>
      <Tile>
        <HealthCheckTable healthChecks={healthChecks} />
      </Tile>
    </TilesWrapper>
  );
};

type form = {
  date?: string;
  classroomId?: number;
  studentId?: number;
  clubId?: number;
};
