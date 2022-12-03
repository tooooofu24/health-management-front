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
  ButtonProps,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PencilSimple } from "phosphor-react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useStudents } from "../../../hooks/Student";
import { useCustomToast } from "../../../hooks/Toast";
import { StudentResponse } from "../../../types/APIResponse";
import { updateStudent } from "../../../utils/api/Student";
import { ErrorAlert } from "../../common/error/ErrorAlert";
import { StudentForm } from "./StudentForm";

type props = {
  student: StudentResponse;
};
export const StudentEditButton: FC<props & ButtonProps> = ({ student }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showToast } = useCustomToast();
  const [error, setError] = useState("");
  const router = useRouter();
  const { refetch } = useStudents(router.query);
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
  const onSubmit = async (data: form) => {
    try {
      await updateStudent({ id: student.id, ...data });
      refetch();
      onClose();
      showToast("変更しました！", "info");
    } catch (e: any) {
      setError(e.message);
    }
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
            <ModalHeader>生徒情報編集</ModalHeader>
            <ModalCloseButton />
            <ModalBody maxH="70vh" overflowY="scroll">
              <StudentForm register={register} errors={errors} />
            </ModalBody>
            <ModalFooter flexWrap="wrap">
              {error && <ErrorAlert mb={2} message={error} />}
              <Button variant="ghost" mr={3} onClick={onClose}>
                閉じる
              </Button>
              <Button type="submit">保存</Button>
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
