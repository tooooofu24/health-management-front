import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Text,
  Input,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import { Student } from "@prisma/client";
import {
  Baseball,
  EnvelopeSimple,
  GraduationCap,
  ListNumbers,
  PencilSimple,
  User,
} from "phosphor-react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { StudentResponse } from "../../../types/APIResponse";
import { ClassroomField } from "../../common/form/ClassroomField";
import { ClubField } from "../../common/form/ClubField";
import { NumberField } from "../../common/form/NumberField";

type props = {
  student: StudentResponse;
};
export const StudentEditButton: FC<props> = ({ student }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<form>({
    mode: "onBlur",
    defaultValues: {
      name: student.name,
      classroomId: student.classroomId,
      clubId: student.clubId,
      email: student.user.email,
      number: student.number,
    },
  });
  const onSubmit = (data: form) => {};
  return (
    <>
      <IconButton
        rounded="full"
        icon={<PencilSimple />}
        aria-label="生徒編集ボタン"
        onClick={onOpen}
      />

      <Modal isCentered size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxH="80vh" overflowY="scroll">
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>生徒情報の編集</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
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
                  <FormErrorMessage>
                    {errors.classroomId?.message}
                  </FormErrorMessage>
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
                    {...register("email", { required: "必須項目です！" })}
                  />
                  <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" mr="auto">
                削除
              </Button>
              <Button type="submit">更新</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

type form = {
  name: string;
  classroomId: number;
  clubId: number | null;
  email: string;
  number: number;
};
