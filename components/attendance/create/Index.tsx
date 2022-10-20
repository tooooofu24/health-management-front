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
  const { courseId, date, period } = router.query;

  const { students, getStudents } = useStudents();
  const { courses, getCourses } = useCourses();

  useEffect(() => {
    getCourses();
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<AttendanceForm>({
    mode: "onBlur",
  });

  watch((value, { name, type }) => {
    const { courseId } = value;
    if (name != "courseId") return;
    const course = courses.find((course) => course.id == courseId);
    if (!course) return;
    getStudents(course.classroom.id);
  });

  useEffect(() => {
    if (courseId) setValue("courseId", String(courseId));
    if (date) setValue("date", String(date));
    if (period) setValue("period", String(period));
  }, [router]);

  useEffect(() => {
    const course = courses.find((course) => course.id == courseId);
    if (!course) return;
    getStudents(course.classroom.id);
  }, [courses]);

  return (
    <form action="/">
      <TilesWrapper>
        <Tile>
          <Flex gap="20px" flexWrap="wrap" width="full">
            <FormControl
              isInvalid={Boolean(errors.courseId)}
              flex={1}
              minWidth="200px"
            >
              <FormLabel>
                <AddressBook />
                <Text>クラスと教科</Text>
              </FormLabel>
              <CourseInput
                register={register("courseId", {
                  required: "入力してください。",
                })}
              />
              <FormErrorMessage>{errors.courseId?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={Boolean(errors.date)}
              flex={1}
              minWidth="200px"
            >
              <FormLabel>
                <Calendar />
                <Text>日付</Text>
              </FormLabel>
              <Input
                type="date"
                {...register("date", {
                  required: "入力してください。",
                })}
              />
              <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={Boolean(errors.period)}
              flex={1}
              minWidth="200px"
            >
              <FormLabel>
                <Clock />
                時限
              </FormLabel>
              <Select
                placeholder="選択して下さい"
                {...register("period", {
                  required: "入力してください。",
                })}
              >
                {[...Array(6)].map((v, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}時間目
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{errors.period?.message}</FormErrorMessage>
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
