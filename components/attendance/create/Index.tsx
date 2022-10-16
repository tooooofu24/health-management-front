import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AddressBook, Calendar, Clock, PaperPlaneTilt } from "phosphor-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCourses } from "../../../hooks/Course";
import {
  AttendanceForm,
  AttendanceFormDefaultValue,
} from "../../../hooks/form/AttendanceFormHook";
import { useStudents } from "../../../hooks/Student";
import { Tile, TilesWrapper } from "../../common/Tile";
import { AttendanceTable } from "./AttendanceTable";
import { CourseInput } from "./Forms";

export const AttendanceCreate = () => {
  const router = useRouter();

  const { students } = useStudents();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<AttendanceForm>({
    mode: "onBlur",
  });

  useEffect(() => {
    if (!router.isReady) return;
    setValue("courseId", String(router.query.courseId));
    setValue("date", String(router.query.date));
    setValue("period", String(router.query.period));
  }, [router]);

  return (
    <form action="/">
      <TilesWrapper>
        <Tile>
          <Flex gap="20px" flexWrap="wrap" width="full">
            <FormControl isInvalid={false} flex={1} minWidth="200px">
              <FormLabel>
                <AddressBook />
                <Text>クラスと教科</Text>
              </FormLabel>
              <CourseInput register={register("courseId")} />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={false} flex={1} minWidth="200px">
              <FormLabel>
                <Calendar />
                <Text>日付</Text>
              </FormLabel>
              <Input type="date" {...register("date")} />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={false} flex={1} minWidth="200px">
              <FormLabel>
                <Clock />
                時限
              </FormLabel>
              <Select placeholder="選択して下さい" {...register("period")}>
                {[...Array(6)].map((v, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}時間目
                  </option>
                ))}
              </Select>
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
          </Flex>
        </Tile>
        <Tile>
          <AttendanceTable students={students} />
        </Tile>
        <Flex w="full" justifyContent="end" gap="20px">
          <Button rightIcon={<PaperPlaneTilt />} type="submit">
            成績を登録する
          </Button>
        </Flex>
      </TilesWrapper>
    </form>
  );
};
