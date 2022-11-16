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
import { useDeleteInvitation } from "../../hooks/Invitation";
import { isSmartPhoneScreen } from "../../styles/Responsive";
import { Invitation } from "../../types/Invitation";

type props = {
  invitation: Invitation;
};
export const CancelInvitationButton: FC<props> = ({ invitation }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState("");
  const { deleteInvitation } = useDeleteInvitation();
  const router = useRouter();
  const toast = useToast();

  const onClick = async () => {
    try {
      await deleteInvitation(invitation);
      router.push("/users");
      toast({
        title: "",
        description: "削除しました！",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      onClose();
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
        size={isSmartPhoneScreen() ? "xs" : "sm"}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>招待キャンセル</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={3}>{invitation.email}</Text>
            上記メールアドレス宛ての招待をキャンセルします。
            <br />
            よろしいですか？
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
