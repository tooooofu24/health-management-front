import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import {
  Chalkboard,
  GraduationCap,
  PaperPlaneTilt,
  Users,
} from "phosphor-react";
import { isSmartPhoneScreen } from "../../../styles/Responsive";
import { Tile } from "../../common/Tile";
import { GradeField } from "../../common/form/GradeField";
import { ClassField } from "../../common/form/ClassField";
import { useForm } from "react-hook-form";
import { ClassroomCreateTable } from "./ClassroomCreateTable";
import { FilePicker } from "./FilePicker";
import { FileDescribeButton } from "./FileDiscribeButton";

export const Create = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm<form>({
    mode: "onBlur",
  });

  const setStudents = (data: any) => {
    const students = data.flatMap((v: string) => v);
    setValue("students", students);
  };

  const onSubmit = (data: form) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        gap={isSmartPhoneScreen() ? "2rem" : "5%"}
        flexDirection={isSmartPhoneScreen() ? "column" : "row"}
      >
        <Flex h="fit-content" flex={1}>
          <Tile w="full">
            <Flex flexDirection="column" gap="20px">
              <FormControl isInvalid={Boolean(errors.grade)}>
                <FormLabel>
                  <GraduationCap />
                  <Text>学年</Text>
                </FormLabel>
                <GradeField
                  register={register("grade", { required: "必須項目です！" })}
                />
                <FormErrorMessage>{errors.grade?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.name)}>
                <FormLabel>
                  <Chalkboard />
                  <Text>クラス</Text>
                </FormLabel>
                <ClassField
                  register={register("name", { required: "必須項目です！" })}
                />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  Boolean(errors.students) && watch("students").length == 0
                }
                {...register("students", {
                  required: "生徒データが存在しません！",
                })}
              >
                <FormLabel>
                  <Users />
                  <Text>生徒データ</Text>
                  <FileDescribeButton />
                </FormLabel>
                <FilePicker
                  onUpload={setStudents}
                  onDelete={() => setStudents([])}
                />
                <FormErrorMessage>{errors.students?.message}</FormErrorMessage>
              </FormControl>
            </Flex>
          </Tile>
        </Flex>
        <Flex flexDirection="column" gap="20px" flex={1}>
          <Tile>
            <ClassroomCreateTable
              grade={watch("grade")}
              name={watch("name")}
              students={watch("students")}
            />
          </Tile>
          <Flex justifyContent="end">
            <Button type="submit" leftIcon={<PaperPlaneTilt />}>
              クラスを登録する
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </form>
  );
};

type form = {
  grade: number;
  name: string;
  students: string[];
};
