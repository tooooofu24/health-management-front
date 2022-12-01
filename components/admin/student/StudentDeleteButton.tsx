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
  Flex,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PencilSimple, X } from "phosphor-react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useDeleteStudent,
  useStudents,
  useUpdateStudent,
} from "../../../hooks/Student";
import { useCustomToast } from "../../../hooks/Toast";
import { StudentResponse } from "../../../types/APIResponse";
import { ErrorAlert } from "../../common/error/ErrorAlert";
import { StudentForm } from "./StudentForm";

type props = {
  student: StudentResponse;
};
export const StudentDeleteButton: FC<props> = ({ student }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteStudent, isLoading } = useDeleteStudent();
  const { showToast } = useCustomToast();
  const [error, setError] = useState("");
  const router = useRouter();
  const { refetch } = useStudents(router.query);

  const onClick = async () => {
    try {
      await deleteStudent(student.id);
      refetch();
      onClose();
      showToast("削除しました！", "info");
    } catch (e: any) {
      setError(e.message);
    }
  };
  return (
    <>
      <IconButton
        rounded="full"
        icon={<X />}
        aria-label="生徒削除ボタン"
        onClick={onOpen}
        colorScheme="red"
      />

      <Modal blockScrollOnMount isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxH="70vh">
          <ModalHeader>生徒削除</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY="scroll">
            <Flex alignItems="center" gap="7%">
              <Avatar
                name={student.name}
                // src={user.profileImage}
                size="lg"
                referrerPolicy="no-referrer"
              />
              <Flex flexDirection="column" fontSize={14} gap={1.5}>
                <Text>{student.name}</Text>
                <Text>{student.user.email}</Text>
              </Flex>
            </Flex>
            <Text mt={4}>
              上記生徒を削除します。
              <br />
              削除したユーザーはログインできなくなります。よろしいですか？
            </Text>
          </ModalBody>
          <ModalFooter flexWrap="wrap">
            {error && <ErrorAlert mb={2} message={error} />}
            <Button variant="ghost" mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button colorScheme="red" isLoading={isLoading} onClick={onClick}>
              削除
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
