import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Router, { useRouter } from "next/router";
import { Plus } from "phosphor-react";
import { useForm } from "react-hook-form";
import { useCreateSchedule } from "../../../hooks/Schedule";
import { Day } from "../../../types/Day";
import { Period } from "../../../types/Period";
import { ClassroomField } from "../../common/form/ClassroomField";
import { SubjectField } from "../../common/form/SubjectField";
import { useToast } from "@chakra-ui/react";

type props = {
  period: Period;
  day: Day;
};
export const PlusButton = ({ period, day }: props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { createSchedule } = useCreateSchedule();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<form>({
    mode: "onBlur",
  });
  const router = useRouter();

  const onSubmit = async (data: form) => {
    await createSchedule({ day, period, ...data });

    router.push("/schedules/edit");
    onClose();
    toast({
      title: "",
      description: "時間割が登録されました！",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <>
      <IconButton
        onClick={onOpen}
        size="lg"
        icon={<Plus />}
        aria-label="追加"
        rounded="full"
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>
              {day}曜日{period}時間目
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDirection="column" gap="15px">
                <FormControl
                  display="flex"
                  alignItems="center"
                  isInvalid={Boolean(errors.subjectId)}
                >
                  <Box flex={1}>
                    <FormLabel m={0} justifyContent="center">
                      教科
                    </FormLabel>
                  </Box>
                  <Box flex={2}>
                    <SubjectField
                      register={register("subjectId", {
                        required: "必須項目です",
                      })}
                    />
                    <FormErrorMessage>
                      {errors.subjectId?.message}
                    </FormErrorMessage>
                  </Box>
                </FormControl>
                <FormControl
                  display="flex"
                  alignItems="center"
                  isInvalid={Boolean(errors.classroomId)}
                >
                  <Box flex={1}>
                    <FormLabel m={0} justifyContent="center">
                      クラス
                    </FormLabel>
                  </Box>
                  <Box flex={2}>
                    <ClassroomField
                      register={register("classroomId", {
                        required: "必須項目です",
                      })}
                    />
                    <FormErrorMessage>
                      {errors.classroomId?.message}
                    </FormErrorMessage>
                  </Box>
                </FormControl>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" onClick={onClose}>
                キャンセル
              </Button>
              <Button type="submit">授業を追加</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

type form = {
  subjectId: number;
  classroomId: number;
};
