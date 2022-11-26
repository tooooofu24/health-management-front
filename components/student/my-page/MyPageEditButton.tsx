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
import { Baseball, GraduationCap, Pencil, User } from "phosphor-react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ClubField } from "../../common/form/ClubField";
import { useCurrentStudent, useUpdateStudent } from "../../../hooks/Student";
import { ClassroomField } from "../../common/form/ClassroomField";

export const MyPageEditButton = () => {
  const { updateStudent, isLoading } = useUpdateStudent();
  const { student, refetch } = useCurrentStudent();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<form>({
    mode: "onBlur",
    defaultValues: {
      clubId: student.clubId,
      classroomId: student.classroomId,
    },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onSubmit = (data: form) => {
    updateStudent({ id: student.id, ...data }).then(() => {
      refetch();
      onClose();
    });
  };
  return (
    <>
      <Button onClick={onOpen} leftIcon={<Pencil />}>
        編集する
      </Button>
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>生徒情報更新</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDirection="column" gap={5}>
                <FormControl>
                  <FormLabel>
                    <User />
                    <Text>氏名</Text>
                  </FormLabel>
                  <Input value={student.name} readOnly />
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
                <FormControl isInvalid={Boolean(errors.clubId)}>
                  <FormLabel>
                    <Baseball />
                    <Text>部活動</Text>
                  </FormLabel>
                  <ClubField register={register("clubId")} />
                  <FormErrorMessage>{errors.clubId?.message}</FormErrorMessage>
                </FormControl>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                閉じる
              </Button>
              <Button isLoading={isLoading} type="submit">
                保存
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

type form = {
  clubId: number | null;
  classroomId: number;
};