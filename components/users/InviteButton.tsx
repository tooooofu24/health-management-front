import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
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
import { EnvelopeSimple, UserPlus } from "phosphor-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateInvitation } from "../../hooks/Invitation";
import { isSmartPhoneScreen } from "../../styles/Responsive";

export const InviteButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { createInvitation, isLoading } = useCreateInvitation();
  const [error, setError] = useState("");
  const toast = useToast();
  const router = useRouter();
  const onSubmit = async (data: form) => {
    try {
      await createInvitation(data);
      router.push("/users");
      onClose();
      toast({
        title: "",
        description: "招待を送信しました！",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (e: any) {
      setError(e.message);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm<form>({
    mode: "onSubmit",
  });

  useEffect(() => {
    setValue("email", "");
    setError("");
    clearErrors();
  }, [router]);

  return (
    <>
      <Button variant="responsive" leftIcon={<UserPlus />} onClick={onOpen}>
        招待する
      </Button>

      <Modal size="md" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>ユーザー招待</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text mb={3}>
                招待したい方のメールアドレスを入力してください。
              </Text>
              <FormControl isInvalid={Boolean(errors.email ?? error)}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<EnvelopeSimple />}
                    color="gray.500"
                  />
                  <Input
                    variant="flushed"
                    placeholder="user@shusseki-kun.com"
                    {...register("email", {
                      required: "必須項目です！",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                        message: "メールアドレスの形式が正しくありません！",
                      },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
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
              <Button type="submit" isLoading={isLoading}>
                招待する
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

type form = {
  email: string;
};
