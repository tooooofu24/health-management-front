import { Select, SelectProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const NumberField = ({ register, ...props }: props) => {
  return (
    <Select placeholder="選択してください" {...(register ?? null)} {...props}>
      {[...Array(40)].map((v, i) => {
        return (
          <option key={i} value={i + 1}>
            {i + 1}番
          </option>
        );
      })}
    </Select>
  );
};
