import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import {
  ChatCircleText,
  ChatsCircle,
  EnvelopeSimple,
  User,
  PaperPlaneTilt,
} from "phosphor-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useFirebaseUser } from "../../hooks/CurrentUser";
import { useCustomToast } from "../../hooks/Toast";
import { userAtom } from "../../jotai/user";
import { usePostSlackMessage } from "../../utils/slack";
import { Tile } from "../common/Tile";

export const ContactForm = () => {
  const { user, isLoading } = useFirebaseUser();
  const { postSlackMessage } = usePostSlackMessage();
  const { showToast } = useCustomToast();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<form>({
    mode: "onBlur",
  });

  useEffect(() => {
    if (isLoading) return;
    setValue("name", user?.displayName || "");
    setValue("email", user?.email || "");
  }, [isLoading]);

  const onSubmit = async (data: form) => {
    const { name, email, text } = data;
    const message = `お問合せが届きました！\n\n氏名：${name}\nメールアドレス：${email}\n${"```"}${text}${"```"}`;
    await postSlackMessage("U04BSB0V4AY", message);
    reset();
    showToast("お問合せを送信しました！", "info");
  };
  return (
    <>
      <Tile>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDir="column" gap="1rem">
            <FormControl isInvalid={Boolean(errors.name)}>
              <FormLabel>
                <User />
                <Text>お名前</Text>
              </FormLabel>
              <Input {...register("name")} placeholder="出席太郎" />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(errors.email)}>
              <FormLabel>
                <EnvelopeSimple />
                <Text>メールアドレス</Text>
              </FormLabel>
              <Input
                {...register("email", {
                  pattern: {
                    value:
                      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                    message: "メールアドレスの形式が正しくありません！",
                  },
                })}
                placeholder="user@shusseki-kun.com"
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(errors.text)}>
              <FormLabel>
                <ChatCircleText />
                <Text>お問合せ内容</Text>
              </FormLabel>
              <Textarea
                {...register("text", { required: "必須項目です！" })}
                placeholder="こちらにお問合せ内容をご入力ください。"
                rows={5}
              />
              <FormErrorMessage>{errors.text?.message}</FormErrorMessage>
            </FormControl>
            <Button type="submit" leftIcon={<PaperPlaneTilt />} w="full">
              送信する
            </Button>
          </Flex>
        </form>
      </Tile>
    </>
  );
};

type form = {
  name: string | null;
  email: string | null;
  text: string;
};
