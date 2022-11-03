import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
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
import { Plus, WifiHigh } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateIPAddress } from "../../../hooks/IPAddress";

export const AddIPButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { createIPAddress } = useCreateIPAddress();

  const toast = useToast();
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (data: form) => {
    try {
      await createIPAddress(data);
      router.push("/settings");
      onClose();
      toast({
        title: "",
        description: "IPアドレスを追加しました！",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setValue("label", "");
      setValue("ip", "");
    } catch (e: any) {
      setError(e.message);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<form>({
    mode: "onSubmit",
  });

  return (
    <>
      <Button variant="responsive" leftIcon={<Plus />} onClick={onOpen}>
        追加する
      </Button>
      <Modal size="md" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>IPアドレスの追加</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDirection="column" gap="15px">
                <FormControl
                  display="flex"
                  alignItems="center"
                  isInvalid={Boolean(errors.label)}
                >
                  <Box flex={1}>
                    <FormLabel m={0} justifyContent="center">
                      ラベル
                    </FormLabel>
                  </Box>
                  <Box flex={3}>
                    <Input
                      variant="flushed"
                      placeholder="自宅、学校等"
                      {...register("label", { required: "必須項目です！" })}
                    />
                    <FormErrorMessage>{errors.label?.message}</FormErrorMessage>
                  </Box>
                </FormControl>
                <FormControl
                  display="flex"
                  alignItems="center"
                  isInvalid={Boolean(errors.ip)}
                >
                  <Box flex={1}>
                    <FormLabel m={0} justifyContent="center">
                      IP
                    </FormLabel>
                  </Box>
                  <Box flex={3}>
                    <Input
                      variant="flushed"
                      placeholder="123.456.789.000"
                      {...register("ip", {
                        required: "必須項目です！",
                        // pattern: {
                        //   value:
                        //     /^((25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])$/,
                        //   message: "IPアドレスの形式が正しくありません！",
                        // },
                      })}
                    />
                    <FormErrorMessage>{errors.ip?.message}</FormErrorMessage>
                  </Box>
                </FormControl>
              </Flex>
              {error && (
                <Alert status="error">
                  <AlertIcon />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="gray"
                mr={2}
                variant="ghost"
                onClick={onClose}
              >
                キャンセル
              </Button>
              <Button type="submit">追加する</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

type form = {
  label: string;
  ip: string;
};
