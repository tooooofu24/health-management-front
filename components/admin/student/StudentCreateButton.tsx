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
import { UserPlus } from "phosphor-react";
import { useForm } from "react-hook-form";
import { useRegisterStudent } from "../../../hooks/Student";
import { useCustomToast } from "../../../hooks/Toast";
import { StudentForm } from "./StudentForm";
export const StudentCreateButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { registerStudent, isLoading } = useRegisterStudent();
  const { showToast } = useCustomToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentForm>({
    mode: "onBlur",
  });

  const onSubmit = (data: StudentForm) => {
    registerStudent(data)
      .then(() => {
        onClose();
        showToast("登録しました！", "info");
      })
      .catch((e: Error) => {
        showToast("登録に失敗しました", "error");
      });
  };

  return (
    <>
      <Button onClick={onOpen} leftIcon={<UserPlus />}>
        新規登録
      </Button>
      <Modal
        blockScrollOnMount
        isCentered
        size="lg"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>新規生徒登録</ModalHeader>
            <ModalCloseButton />
            <ModalBody maxH="70vh" overflowY="scroll">
              <StudentForm register={register} errors={errors} />
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
