import {
  Alert,
  AlertDescription,
  AlertIcon,
  Avatar,
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
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
            <Flex alignItems="center" gap="7%">
              <Avatar
                name={user.name}
                src={user.profileImage}
                size="lg"
                referrerPolicy="no-referrer"
              />
              <Flex flexDirection="column" fontSize={14} gap={1.5}>
                <Text>{user.name}</Text>
                <Text>{user.email}</Text>
              </Flex>
            </Flex>
            <Text mt={4}>
              上記ユーザーを削除します。
              <br />
              削除したユーザーはログインできなくなります。よろしいですか？
            </Text>
            {error && (
              <Alert status="error" mt={2}>
                <AlertIcon />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" variant="ghost" onClick={onClose} mr={2}>
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
