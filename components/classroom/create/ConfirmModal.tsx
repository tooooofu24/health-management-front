import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useCreateClassroom } from "../../../hooks/Classroom";
import { ClassroomCreateTable } from "./ClassroomCreateTable";
import { CreateClassroomForm } from "./Index";

type props = {
  isOpen: boolean;
  onClose: () => void;
  data: CreateClassroomForm;
};
export const ConfirmModal: FC<props> = ({
  data,
  isOpen,
  onClose,
  ...props
}) => {
  const { students, grade, name } = data;
  const { createClassroom, isLoading } = useCreateClassroom();
  const router = useRouter();
  const toast = useToast();
  const [error, setError] = useState("");
  const onClick = async () => {
    try {
      await createClassroom(data);
      router.push("/classrooms/create");
      toast({
        title: "",
        description: "クラスを登録しました！",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (e: any) {
      setError(e.message);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="xl"
      scrollBehavior="inside"
      {...props}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>クラスの登録</ModalHeader>
        <ModalCloseButton />
        <Box px={6}>以下の内容で登録します。よろしいですか？</Box>
        <ModalBody>
          <ClassroomCreateTable grade={grade} name={name} students={students} />
        </ModalBody>
        <ModalFooter flexWrap="wrap">
          {error && (
            <Alert status="error" mb={2}>
              <AlertIcon />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button variant="ghost" colorScheme="gray" mr={2} onClick={onClose}>
            キャンセル
          </Button>
          <Button isLoading={isLoading} onClick={onClick}>
            クラスを登録
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
