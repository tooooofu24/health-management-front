import {
  Box,
  Button,
  Flex,
  FlexProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Question, ThumbsDown, ThumbsUp } from "phosphor-react";
import { FC, ReactNode } from "react";

export const FileDescribeButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        variant="link"
        colorScheme="gray"
        size="sm"
        leftIcon={<Question />}
        ml="auto"
        onClick={onOpen}
      >
        ファイルの形式
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="lg"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ファイルの形式について</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            生徒データは
            <Text color="teal.500" as="b">
              CSVファイル
            </Text>
            で一括登録できます。
            <br />
            CSVファイルには
            <Text color="teal.500" as="b">
              生徒名だけ
            </Text>
            を含めるようにして下さい。
            <Flex flexDirection="column" gap={3} mt={5}>
              <Box>
                <Title color="teal.500" icon={<ThumbsUp />} title="Good" />
                <Code>
                  青山優雅
                  <br />
                  芦戸三奈
                  <br />
                  蛙吹梅雨
                  <br />
                  飯田天哉
                </Code>
              </Box>
              <Box>
                <Title
                  color="teal.500"
                  icon={<ThumbsUp />}
                  title="Good"
                  message="カンマ区切りでも可"
                />
                <Code>麗日お茶子,尾白猿夫,上鳴電気,切島鋭児郎</Code>
              </Box>
              <Box>
                <Title
                  color="red.500"
                  icon={<ThumbsDown />}
                  title="Bad"
                  message="「氏名」が不要"
                />
                <Code>
                  氏名
                  <br />
                  口田甲司
                  <br />
                  砂藤力動
                  <br />
                  障子目蔵
                </Code>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

type TitleProps = {
  icon: ReactNode;
  title: string;
  message?: string;
} & FlexProps;
const Title: FC<TitleProps> = ({ icon, title, message, ...props }) => {
  return (
    <Flex gap={2} alignItems="center" {...props}>
      {icon}
      <Text>{title}</Text>
      {message && (
        <Text fontSize={14} ml="auto">
          {message}
        </Text>
      )}
    </Flex>
  );
};

const Code: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      fontSize={14}
      p={3}
      borderRadius="md"
      borderColor="gray.300"
      borderWidth="1px"
    >
      {children}
    </Box>
  );
};
