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
import { useDeleteIPAddress } from "../../../hooks/IPAddress";
import { IPAddress } from "../../../types/IPAddress";

type props = {
  IPAddress: IPAddress;
};
export const DeleteIPButtton: FC<props> = ({ IPAddress }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState("");
  const { deleteIPAddress, isLoading } = useDeleteIPAddress();
  const router = useRouter();
  const toast = useToast();

  const onClick = async () => {
    try {
      await deleteIPAddress(IPAddress);
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
      setError("");
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
              <Text>{IPAddress.label}</Text>
            </Flex>
            <Flex alignItems="center" gap={5} mt={1}>
              <Box color="gray.500">
                <WifiHigh />
              </Box>
              <Text>{IPAddress.ip}</Text>
            </Flex>
            <Text mt={4}>
              上記IPアドレスを削除します。
              <br />
              削除したIPアドレスからは操作ができなくなります。よろしいですか？
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
            <Button isLoading={isLoading} onClick={onClick} colorScheme="red">
              削除する
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
