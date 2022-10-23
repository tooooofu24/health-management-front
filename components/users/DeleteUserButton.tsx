import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { X } from "phosphor-react";
import { FC, useState } from "react";
import { useDeleteUser } from "../../hooks/User";
import { User } from "../../types/User";

type props = {
  user: User;
};
export const DeleteUserButtton: FC<props> = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteUser } = useDeleteUser();
  const [error, setError] = useState("");
  const router = useRouter();
  const toast = useToast();

  const onClick = async () => {
    try {
      await deleteUser(user);
      router.push("/users");
      toast({
        title: "",
        description: "削除しました！",
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
    <>
      <IconButton
        colorScheme="red"
        icon={<X />}
        aria-label="削除"
        rounded="full"
        size="sm"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ユーザー削除</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            ユーザーを削除します。
            <br />
            削除したユーザーはログインできなくなります。よろしいですか？
            {error && (
              <Alert status="error">
                <AlertIcon />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
            <Button onClick={onClick} colorScheme="red">
              削除する
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
