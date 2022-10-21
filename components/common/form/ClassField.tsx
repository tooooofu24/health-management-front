import { Select, SelectProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const ClassField = ({ register, ...props }: props) => {
  return (
    <Select placeholder="選択してください" {...(register ?? null)} {...props}>
      <option value="1">1組</option>
      <option value="2">2組</option>
      <option value="3">3組</option>
      <option value="4">4組</option>
      <option value="5">5組</option>
      <option value="6">6組</option>
    </Select>
  );
};
