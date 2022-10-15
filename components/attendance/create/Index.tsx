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
import { AddressBook, Calendar, Clock, PaperPlaneTilt } from "phosphor-react";
import { useForm } from "react-hook-form";
import { useCourses } from "../../../hooks/Course";
import {
  AttendanceForm,
  AttendanceFormDefaultValue,
} from "../../../hooks/form/AttendanceFormHook";
import { useStudents } from "../../../hooks/Student";
import { Tile, TilesWrapper } from "../../common/Tile";
import { AttendanceTable } from "./AttendanceTable";

export const AttendanceCreate = () => {
  const { students } = useStudents();
  const { courses } = useCourses();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AttendanceForm>({
    mode: "onBlur",
    defaultValues: AttendanceFormDefaultValue,
  });

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
              <Select colorScheme="teal" placeholder="選択して下さい">
                {courses.map((course) => {
                  return (
                    <option value={course.id}>
                      {course.classroom.grade}年{course.classroom.name}組「
                      {course.subject.name}」
                    </option>
                  );
                })}
              </Select>
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={false} flex={1} minWidth="200px">
              <FormLabel>
                <Calendar />
                <Text>日付</Text>
              </FormLabel>
              <Input type="date" value="" />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={false} flex={1} minWidth="200px">
              <FormLabel>
                <Clock />
                時限
              </FormLabel>
              <Select placeholder="選択して下さい" defaultValue="option1">
                {[...Array(6)].map((v, i) => (
                  <option value={i + 1}>{i + 1}時間目</option>
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
