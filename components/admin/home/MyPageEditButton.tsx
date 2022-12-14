import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { Baseball, GraduationCap, Pencil, User } from "phosphor-react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ClubField } from "../../common/form/ClubField";
import { ClassroomField } from "../../common/form/ClassroomField";
import { useCustomToast } from "../../../hooks/Toast";
import { useState } from "react";
import { ErrorAlert } from "../../common/error/ErrorAlert";
import { useCurrentTeacher } from "../../../hooks/CurrentTeacher";
import { updateTeacher } from "../../../utils/api/Teacher";

export const MyPageEditButton = () => {
  const { teacher, refetch } = useCurrentTeacher();
  const { showToast } = useCustomToast();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<form>({
    mode: "onBlur",
    defaultValues: {
      classroomId: teacher?.classroomId,
      clubId: teacher?.clubId,
    },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onSubmit = (data: form) => {
    updateTeacher({ id: teacher?.id!, ...data })
      .then(() => {
        onClose();
        refetch();
        showToast("更新しました！", "info");
      })
      .catch((e: any) => {
        setError(e.message);
      });
  };
  return (
    <>
      <Button onClick={onOpen} leftIcon={<Pencil />}>
        編集する
      </Button>
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>教員情報更新</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDirection="column" gap={5}>
                <FormControl>
                  <FormLabel>
                    <User />
                    <Text>氏名</Text>
                  </FormLabel>
                  <Tooltip label="氏名は変更できません！" placement="top">
                    <Input value={teacher?.name} readOnly />
                  </Tooltip>
                </FormControl>
                <FormControl isInvalid={Boolean(errors.classroomId)}>
                  <FormLabel>
                    <GraduationCap />
                    <Text>担任</Text>
                  </FormLabel>
                  <ClassroomField register={register("classroomId")} />
                  <FormErrorMessage>
                    {errors.classroomId?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={Boolean(errors.clubId)}>
                  <FormLabel>
                    <Baseball />
                    <Text>顧問</Text>
                  </FormLabel>
                  <ClubField register={register("clubId")} />
                  <FormErrorMessage>{errors.clubId?.message}</FormErrorMessage>
                </FormControl>
              </Flex>
            </ModalBody>

            <ModalFooter flexWrap="wrap">
              {error && <ErrorAlert mb={2} message={error} />}

              <Button variant="ghost" mr={3} onClick={onClose}>
                閉じる
              </Button>
              <Button type="submit">保存</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

type form = {
  clubId: number | null;
  classroomId: number | null;
};
