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
} from "@chakra-ui/react";
import { Plus, WifiHigh } from "phosphor-react";

export const AddIPButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant="responsive" leftIcon={<Plus />} onClick={onOpen}>
        追加する
      </Button>
      <Modal size="md" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <form>
            <ModalHeader>IPアドレスの追加</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text mb={3}>追加したいIPアドレスを入力してください。</Text>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<WifiHigh />}
                    color="gray.500"
                  />
                  <Input variant="flushed" placeholder="123.456.789.000" />
                </InputGroup>
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              {false && (
                <Alert status="error">
                  <AlertIcon />
                  <AlertDescription></AlertDescription>
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
              <Button>追加する</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
