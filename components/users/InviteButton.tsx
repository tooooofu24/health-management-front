import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
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
} from "@chakra-ui/react";
import { EnvelopeSimple, UserPlus } from "phosphor-react";

export const InviteButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button leftIcon={<UserPlus />} onClick={onOpen}>
        招待する
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ユーザー招待</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={3}>招待したい方のメールアドレスを入力してください。</Text>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EnvelopeSimple />}
                  color="gray.500"
                />
                <Input
                  variant="flushed"
                  type="email"
                  placeholder="user@shusseki-kun.com"
                />
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
            <Button>招待する</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
