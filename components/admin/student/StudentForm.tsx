import {
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Text,
  Input,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import {
  Baseball,
  EnvelopeSimple,
  GraduationCap,
  ListNumbers,
  User,
} from "phosphor-react";
import { FC } from "react";
import { ClassroomField } from "../../common/form/ClassroomField";
import { NumberField } from "../../common/form/NumberField";
import { ClubField } from "../../common/form/ClubField";

type props = {
  register: UseFormRegister<StudentForm>;
  errors: Partial<FieldErrorsImpl<StudentForm>>;
};

export type StudentForm = {
  name: string;
  classroomId: number;
  clubId: number | null;
  email: string;
  number: number;
};

export const StudentForm: FC<props> = ({ register, errors }) => {
  return (
    <Flex flexDirection="column" gap={5}>
      <FormControl isInvalid={Boolean(errors.name)}>
        <FormLabel>
          <User />
          <Text>氏名</Text>
        </FormLabel>
        <Input
          placeholder="お名前"
          {...register("name", { required: "必須項目です！" })}
        />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.classroomId)}>
        <FormLabel>
          <GraduationCap />
          <Text>クラス</Text>
        </FormLabel>
        <ClassroomField
          register={register("classroomId", {
            required: "必須項目です！",
          })}
        />
        <FormErrorMessage>{errors.classroomId?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.number)}>
        <FormLabel>
          <ListNumbers />
          <Text>出席番号</Text>
        </FormLabel>
        <NumberField
          register={register("number", {
            required: "必須項目です！",
          })}
        />
        <FormErrorMessage>{errors.number?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.clubId)}>
        <FormLabel>
          <Baseball />
          <Text>部活</Text>
        </FormLabel>
        <ClubField register={register("clubId")} />
        <FormErrorMessage>{errors.clubId?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.email)}>
        <FormLabel>
          <EnvelopeSimple />
          <Text>メールアドレス</Text>
        </FormLabel>
        <Input
          placeholder="user@email.com"
          {...register("email", {
            required: "必須項目です！",
            pattern: {
              value:
                /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
              message: "メールアドレスの形式が正しくありません！",
            },
          })}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
    </Flex>
  );
};
