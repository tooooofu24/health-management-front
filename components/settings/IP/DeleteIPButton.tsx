import {
  Alert,
  AlertDescription,
  AlertIcon,
  Avatar,
  Box,
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
import { Tag, WifiHigh, X } from "phosphor-react";
import { FC, useState } from "react";

export const DeleteIPButtton: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState("");
  const router = useRouter();
  const toast = useToast();

  const onClick = async () => {
    try {
      router.push("/settings");
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
        size="sm"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>IPアドレス削除</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex alignItems="center" gap={5}>
              <Box color="gray.500">
                <Tag />
              </Box>
              <Text>自宅</Text>
            </Flex>
            <Flex alignItems="center" gap={5}>
              <Box color="gray.500">
                <WifiHigh />
              </Box>
              <Text>121.114.22.92</Text>
            </Flex>
            <Text mt={4}>
              上記IPアドレスを削除します。
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
