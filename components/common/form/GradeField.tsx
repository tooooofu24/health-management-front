import { Select, SelectProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const GradeField = ({ register, ...props }: props) => {
  return (
    <Select placeholder="選択してください" {...(register ?? null)} {...props}>
      <option value="1">1年</option>
      <option value="2">2年</option>
      <option value="3">3年</option>
    </Select>
  );
};
