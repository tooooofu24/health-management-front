import { Select, SelectProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const BooleanField = ({ register, ...props }: props) => {
  return (
    <Select placeholder="選択してください" {...(register ?? null)} {...props}>
      <option value={1}>はい</option>
      <option value={0}>いいえ</option>
    </Select>
  );
};
