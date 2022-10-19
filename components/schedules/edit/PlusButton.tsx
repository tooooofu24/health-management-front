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
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import Router, { useRouter } from "next/router";
import { Plus } from "phosphor-react";
import { useForm } from "react-hook-form";
import { useCreateSchedule, useSchedules } from "../../../hooks/Schedule";
import { Day } from "../../../types/Day";
import { Period } from "../../../types/Period";
import { Schedule } from "../../../types/Schedule";
import { ClassroomField } from "../../common/form/ClassroomField";
import { DayField } from "../../common/form/DayField";
import { PeriodField } from "../../common/form/PeriodField";
import { SubjectField } from "../../common/form/SubjectField";

type props = {
  get: () => {};
};
export const PlusButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { createSchedule } = useCreateSchedule();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<form>({
    mode: "onBlur",
  });
  const router = useRouter();

  const onSubmit = async (data: form) => {
    await createSchedule(data);

    onClose();
    router.push("/schedules/edit");
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
            <ModalHeader>時間割を追加</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDirection="column" gap="15px">
                <FormControl
                  display="flex"
                  alignItems="center"
                  isInvalid={Boolean(errors.day)}
                >
                  <Box flex={1}>
                    <FormLabel m={0} justifyContent="center">
                      曜日
                    </FormLabel>
                  </Box>
                  <Box flex={2}>
                    <DayField
                      register={register("day", { required: "必須項目です" })}
                    />
                    <FormErrorMessage>{errors.day?.message}</FormErrorMessage>
                  </Box>
                </FormControl>
                <FormControl
                  display="flex"
                  alignItems="center"
                  isInvalid={Boolean(errors.period)}
                >
                  <Box flex={1}>
                    <FormLabel m={0} justifyContent="center">
                      時限
                    </FormLabel>
                  </Box>
                  <Box flex={2}>
                    <PeriodField
                      register={register("period", {
                        required: "必須項目です",
                      })}
                    />
                    <FormErrorMessage>
                      {errors.period?.message}
                    </FormErrorMessage>
                  </Box>
                </FormControl>
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
              <Button type="submit">追加</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

type form = {
  subjectId: number;
  day: Day;
  period: Period;
  classroomId: number;
};
