import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
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
import { useState } from "react";
import { useDeleteSchedule } from "../../../hooks/Schedule";
import {
  APIError,
  APIErrorResponse,
  unknownError,
} from "../../../types/APIErrorResponse";
import { Schedule } from "../../../types/Schedule";

type props = {
  schedule: Schedule;
};
export const DeleteButton = ({ schedule }: props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteSchedule, isLoading } = useDeleteSchedule();
  const [error, setError] = useState<APIErrorResponse | null>(null);
  const router = useRouter();
  const toast = useToast();

  const onClick = async () => {
    try {
      await deleteSchedule(schedule);
      router.push("/schedules/edit");
      onClose();
      toast({
        title: "",
        description: "時間割を削除しました！",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (e) {
      if (e instanceof APIError) {
        setError(e.response);
      } else {
        console.log(e);
        setError(unknownError);
      }
    }
  };

  return (
    <>
      <IconButton
        colorScheme="red"
        size="sm"
        icon={<X />}
        aria-label="削除"
        rounded="full"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>時間割を削除</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {schedule.dayJa}曜{schedule.period}時間目の
            {schedule.course.subject.name}の授業を削除します。
            <br />
            よろしいですか？
            {error && (
              <Alert status="error" mt={3}>
                <AlertIcon />
                <AlertDescription>{error.message}</AlertDescription>
              </Alert>
            )}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="gray" onClick={onClose} mr={2}>
              キャンセル
            </Button>
            <Button colorScheme="red" onClick={onClick} isLoading={isLoading}>
              削除
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
