import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
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
import { GraduationCap, PlusCircle } from "phosphor-react";
import { FC, ReactNode } from "react";

export const EmptyTimeSlotItemButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        icon={<PlusCircle size={60} />}
        aria-label="授業追加"
        variant="ghost"
        size="lg"
        color="white"
        rounded="full"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>時間割を追加</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection="column" gap={3}>
              <FormLayoutRow
                label="曜日"
                form={
                  <Select placeholder="選択して下さい" defaultValue="option3">
                    <option value="option1">月</option>
                    <option value="option2">火</option>
                    <option value="option3">水</option>
                  </Select>
                }
              />
              <FormLayoutRow
                label="時限"
                form={
                  <Select placeholder="選択して下さい" defaultValue="option3">
                    <option value="option1">1時間目</option>
                    <option value="option2">2時間目</option>
                    <option value="option3">3時間目</option>
                  </Select>
                }
              />
              <FormLayoutRow
                label="クラス"
                form={
                  <Select placeholder="選択して下さい">
                    <option value="option1">1年1組</option>
                    <option value="option2">1年2組</option>
                    <option value="option3">1年3組</option>
                  </Select>
                }
              />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button mr="20px" variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
            <Button onClick={onClose}>追加する</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

type FormLayoutRowProps = {
  label: string;
  form: ReactNode;
};
const FormLayoutRow: FC<FormLayoutRowProps> = ({ label, form }) => {
  return (
    <FormControl>
      <Flex alignItems="center">
        <Flex
          flex={1}
          justifyContent="end"
          alignItems="center"
          color="gray.500"
          gap={3}
          pr="10%"
        >
          <FormLabel margin={0}>{label}</FormLabel>
        </Flex>
        <Box flex={2}>{form}</Box>
      </Flex>
    </FormControl>
  );
};
