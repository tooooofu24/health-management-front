import {
  Box,
  Button,
  Flex,
  FormControl,
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
import { Plus } from "phosphor-react";
import { Schedule } from "../../../types/Schedule";

type props = {};
export const PlusButton = ({}: props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <ModalHeader>時間割を追加</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form action="">
              <Flex flexDirection="column" gap="15px">
                <FormControl display="flex" alignItems="center">
                  <Box flex={1}>
                    <FormLabel m={0} justifyContent="center">
                      教科
                    </FormLabel>
                  </Box>
                  <Box flex={2}>
                    <Select placeholder="選択してください">
                      <option value="1">国語</option>
                      <option value="2">数学</option>
                      <option value="3">理科</option>
                    </Select>
                  </Box>
                </FormControl>
                <FormControl display="flex" alignItems="center">
                  <Box flex={1}>
                    <FormLabel m={0} justifyContent="center">
                      曜日
                    </FormLabel>
                  </Box>
                  <Box flex={2}>
                    <Select placeholder="選択してください">
                      <option value="1">月曜日</option>
                      <option value="2">火曜日</option>
                      <option value="3">水曜日</option>
                    </Select>
                  </Box>
                </FormControl>
                <FormControl display="flex" alignItems="center">
                  <Box flex={1}>
                    <FormLabel m={0} justifyContent="center">
                      時限
                    </FormLabel>
                  </Box>
                  <Box flex={2}>
                    <Select placeholder="選択してください">
                      <option value="1">1時間目</option>
                      <option value="2">2時間目</option>
                      <option value="3">3時間目</option>
                    </Select>
                  </Box>
                </FormControl>
              </Flex>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
            <Button>追加</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
