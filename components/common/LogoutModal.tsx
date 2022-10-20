import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { logout } from "../../utils/auth";

type props = {
  isOpen: boolean;
  onClose: () => void;
};
export const LogoutModal: FC<props> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const toast = useToast();
  const onClick = async () => {
    logout()
      .then(() => {
        toast({
          title: "",
          description: "ログアウトしました！",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      })
      .catch(() => {
        toast({
          title: "",
          description: "ログアウトに失敗しました。",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ログアウト</ModalHeader>
        <ModalCloseButton />
        <ModalBody>ログアウトします。 よろしいですか？</ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            キャンセル
          </Button>
          <Button onClick={onClick}>ログアウト</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
