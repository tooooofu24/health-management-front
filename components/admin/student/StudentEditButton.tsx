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
} from "@chakra-ui/react";
import { PencilSimple } from "phosphor-react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateStudent } from "../../../hooks/Student";
import { useCustomToast } from "../../../hooks/Toast";
import { StudentResponse } from "../../../types/APIResponse";
import { ErrorAlert } from "../../common/error/ErrorAlert";
import { StudentForm } from "./StudentForm";

type props = {
  student: StudentResponse;
};
export const StudentEditButton: FC<props> = ({ student }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateStudent, isLoading } = useUpdateStudent();
  const { showToast } = useCustomToast();
  const [error, setError] = useState("");
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
  const onSubmit = (data: form) => {
    updateStudent({ id: student.id, ...data })
      .then(() => {
        onClose();
        showToast("登録しました！", "info");
      })
      .catch((e: any) => {
        setError(e.message);
      });
  };
  return (
    <>
      <IconButton
        rounded="full"
        icon={<PencilSimple />}
        aria-label="生徒編集ボタン"
        onClick={onOpen}
      />

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
              {error && <ErrorAlert mb={2} message={error} />}

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
  name: string;
  classroomId: number;
  clubId: number | null;
  email: string;
  number: number;
};
