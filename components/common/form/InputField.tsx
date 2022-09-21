import { Input, InputProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

type props = {
  register?: UseFormRegisterReturn;
};
export const InputField = (props: props & InputProps) => {
  return (
    <Input
      placeholder="コメントを入力してください。"
      size="md"
      borderColor="gray.100"
      focusBorderColor="teal.500"
      {...props.register}
      {...props}
    />
  );
};
