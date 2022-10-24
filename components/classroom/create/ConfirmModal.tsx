import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { FC } from "react";
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
        <ModalBody>
          以下の内容で登録します。よろしいですか？
          <ClassroomCreateTable grade={grade} name={name} students={students} />
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" colorScheme="gray" mr={2} onClick={onClose}>
            キャンセル
          </Button>
          <Button type="submit">授業を追加</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
