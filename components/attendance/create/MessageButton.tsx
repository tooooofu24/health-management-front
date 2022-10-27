import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { ChatCircle, ChatCircleDots } from "phosphor-react";
import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type props = {
  register: UseFormRegisterReturn;
  filled: boolean;
};
export const MessageButton: FC<props> = ({ register, filled }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {filled ? (
        <IconButton
          color="teal.500"
          icon={<ChatCircleDots size={25} weight="fill" />}
          aria-label=""
          variant="ghost"
          size="sm"
          onClick={onOpen}
        />
      ) : (
        <IconButton
          color="gray.400"
          icon={<ChatCircle size={25} />}
          aria-label=""
          variant="ghost"
          size="sm"
          onClick={onOpen}
        />
      )}

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>コメントを入力</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Textarea
              rows={5}
              variant="flushed"
              placeholder="例：大会のため公欠。"
              {...register}
            />
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>保存</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
