import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AddressBook, Calendar, Clock, PaperPlaneTilt } from "phosphor-react";
import { useEffect } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { useStudents } from "../../../hooks/Student";
import { Student } from "../../../types/Student";
import {
  AttendanceForm,
  AttendanceRow,
} from "../../../utils/form/AttendanceForm";
import { CourseField } from "../../common/form/CourseField";
import { PeriodField } from "../../common/form/PeriodField";
import { Tile, TilesWrapper } from "../../common/Tile";
import { AttendanceTable } from "./AttendanceTable";
import { Loading } from "../../common/loading/Loading";
import { useCreateCourseLog } from "../../../hooks/CourseLog";

export const AttendanceCreate = () => {
  const router = useRouter();
  const { students, getStudents, isLoading } = useStudents();
  const { createCourseLog, isLoading: isLoadingCreate } = useCreateCourseLog();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    control,
  } = useForm<AttendanceForm>({
    mode: "onSubmit",
    defaultValues: {
      attendances: [],
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "attendances",
  });

  useEffect(() => {
    const { courseId, date, period } = router.query;
    if (courseId) setValue("courseId", Number(courseId));
    if (date) setValue("date", String(date));
    if (period) setValue("period", Number(period));
  }, [router]);

  useEffect(() => {
    if (
      students.length &&
      students[0]?.id != watch("attendances.0.student.id")
    ) {
      setValue("attendances", makeAttendanceRow(students));
    }
  }, [students]);

  useEffect(() => {
    getStudents(2);
  }, []);

  useEffect(() => {
    console.log(watch("attendances"));
  }, [watch()]);

  const onSubmit = async ({
    courseId,
    date,
    period,
    attendances,
  }: AttendanceForm) => {
    await createCourseLog({
      courseId,
      date,
      period,
      attendances: attendances.map((attendance) => {
        const { attend, knowledge, expression, attitude } = attendance;
        return {
          studentId: attendance.student.id,
          attend,
          knowledge: knowledge!,
          expression: expression!,
          attitude: attitude!,
          message: "",
        };
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              <CourseField
                register={register("courseId", {
                  required: "必須項目です！",
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
                  required: "必須項目です！",
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
              <PeriodField
                register={register("period", {
                  required: "必須項目です！",
                })}
              />
              <FormErrorMessage>{errors.period?.message}</FormErrorMessage>
            </FormControl>
          </Flex>
        </Tile>
        <Tile>
          {isLoading ? (
            <Loading />
          ) : (
            <AttendanceTable
              fields={fields}
              register={register}
              errors={errors}
            />
          )}
        </Tile>
        <Flex w="full" justifyContent="end" gap="20px">
          <Button
            isLoading={isLoadingCreate}
            rightIcon={<PaperPlaneTilt />}
            type="submit"
          >
            成績を登録する
          </Button>
        </Flex>
      </TilesWrapper>
    </form>
  );
};

const makeAttendanceRow = (students: Student[]): AttendanceRow[] => {
  return students.map((student) => {
    return {
      student: student,
      attend: true,
    };
  });
};
