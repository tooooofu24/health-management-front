import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Chalkboard,
  GraduationCap,
  PaperPlaneTilt,
  User,
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
import { useEffect } from "react";
import { ConfirmModal } from "./ConfirmModal";

export const Create = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<CreateClassroomForm>({
    mode: "onBlur",
  });

  const setStudents = (data: any) => {
    const students = data.flatMap((v: string) => v);
    setValue("students", students);
  };

  const validateStudents = () => {
    clearErrors("students");
    // 生徒が一人以上いるかのチェック
    const students = watch("students");
    if (!students?.length) {
      setError("students", {
        message: "生徒のデータがありません！",
        type: "required",
      });
      return false;
    }
    // 空データが存在しないかのチェック
    const existsEmptyData = students.find((v) => !v);
    if (existsEmptyData != undefined) {
      setError("students", {
        message: "空白の行が含まれています！",
        type: "required",
      });
      return false;
    }
    return true;
  };

  const onSubmit = (data: CreateClassroomForm) => {
    if (!validateStudents()) return;
    onOpen();
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name == "students") {
        validateStudents();
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          gap={isSmartPhoneScreen() ? "2rem" : "5%"}
          flexDirection={isSmartPhoneScreen() ? "column" : "row"}
        >
          <Flex
            h="fit-content"
            flex={1}
            position={isSmartPhoneScreen() ? "inherit" : "sticky"}
            top="5"
          >
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
                <FormControl isInvalid={Boolean(errors.teacher)}>
                  <FormLabel>
                    <User />
                    <Text>担任</Text>
                  </FormLabel>
                  <Input
                    {...register("teacher", { required: "必須項目です！" })}
                    placeholder="例：坂本金八"
                  />
                  <FormErrorMessage>{errors.teacher?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={Boolean(errors.students)}>
                  <FormLabel>
                    <Users />
                    <Text>生徒データ</Text>
                    <FileDescribeButton />
                  </FormLabel>
                  <FilePicker
                    onUpload={setStudents}
                    onDelete={() => setStudents([])}
                  />
                  <FormErrorMessage>
                    {errors.students?.message}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
            </Tile>
          </Flex>
          <Flex
            flexDirection="column"
            gap="20px"
            flex={1}
            position={isSmartPhoneScreen() ? "inherit" : "sticky"}
            top="5"
          >
            <Tile>
              <ClassroomCreateTable
                grade={watch("grade")}
                name={watch("name")}
                students={watch("students")}
                teacher={watch("teacher")}
              />
            </Tile>
            <Flex justifyContent="end" position="sticky" bottom="5">
              <Button
                type="submit"
                boxShadow="base"
                leftIcon={<PaperPlaneTilt />}
              >
                クラスを登録する
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </form>
      <ConfirmModal data={watch()} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export type CreateClassroomForm = {
  grade: number;
  name: string;
  students: string[];
  teacher: string;
};
